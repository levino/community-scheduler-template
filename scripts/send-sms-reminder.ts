/**
 * SMS-Erinnerung für Community Scheduler
 *
 * Dieses Script wird täglich ausgeführt und sendet
 * SMS-Erinnerungen an die Teilnehmer, die am nächsten Tag Dienst haben.
 */

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import Twilio from 'twilio'
import { parse } from 'yaml'

// Environment variables
const YAML_FILE = process.env.YAML_FILE
const DATE = process.env.DATE
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_SENDER_ID = process.env.TWILIO_SENDER_ID || 'Scheduler'
const REMINDER_CONTEXT = process.env.REMINDER_CONTEXT || 'Kochdienst'
const SENDER_NAME = process.env.SENDER_NAME || 'die Koordination'

// Typen
interface Service {
	date: string // Format: YYYY-MM-DD
	parents: string[] // Array of parent IDs
}

interface Parent {
	id: string
	firstName: string
	lastName: string
	fullName: string
	phone: string
	weekday: string
	active: boolean
}

interface YamlData {
	services: Service[]
	parents: Parent[]
}

/**
 * Lädt die YAML-Daten aus separaten Dateien
 */
async function loadYamlData(): Promise<YamlData> {
	// Single file mode (for testing or legacy)
	if (YAML_FILE) {
		const yamlPath = join(process.cwd(), YAML_FILE)
		const fileContent = await readFile(yamlPath, 'utf-8')
		const data = parse(fileContent)

		// Legacy support: Convert old structure to new
		if (data.eltern && data.dienste) {
			return {
				parents: data.eltern,
				services: data.dienste,
			}
		}
		return data as YamlData
	}

	// Normal: Load from separate files
	const parentsPath = join(process.cwd(), 'src/content/parent.yaml')
	const servicesPath = join(process.cwd(), 'src/content/service.yaml')

	const parentsContent = await readFile(parentsPath, 'utf-8')
	const servicesContent = await readFile(servicesPath, 'utf-8')

	const rawParents = parse(parentsContent) as Omit<Parent, 'fullName'>[]
	const parents = rawParents.map((p) => ({
		...p,
		fullName: `${p.firstName} ${p.lastName}`,
	}))
	const services = parse(servicesContent) as Service[]

	return { parents, services }
}

/**
 * Konvertiert ISO-Datum (YYYY-MM-DD) zu deutschem Format (DD.MM.YYYY)
 */
function formatDatumDeutsch(isoDate: string): string {
	const [jahr, monat, tag] = isoDate.split('-')
	return `${tag}.${monat}.${jahr}`
}

/**
 * Findet den Dienst für ein bestimmtes Datum oder morgen
 */
function findService(services: Service[]): Service | undefined {
	const targetDate =
		DATE ||
		(() => {
			const today = new Date()
			const tomorrow = new Date(today)
			tomorrow.setDate(tomorrow.getDate() + 1)
			return tomorrow.toISOString().split('T')[0]
		})()

	if (DATE) {
		console.log(`🧪 Suche Dienst für ${DATE}`)
	}

	return services.find((service) => service.date === targetDate)
}

/**
 * Erstellt die SMS-Nachricht
 */
function createMessage(
	firstName: string,
	date: string,
	otherParentNames: string[],
): string {
	const partnersText =
		otherParentNames.length > 0
			? ` zusammen mit ${otherParentNames.join(' und ')}`
			: ''
	return `Hallo ${firstName}! Erinnerung: Morgen (${date}) bist Du mit ${REMINDER_CONTEXT}${partnersText} dran. Viele Grüße, ${SENDER_NAME}`
}

/**
 * Sendet eine SMS über Twilio
 */
async function sendSMS(
	client: Twilio.Twilio,
	to: string,
	message: string,
	from: string,
): Promise<void> {
	try {
		const twilioMessage = await client.messages.create({
			body: message,
			from: from,
			to: to,
		})
		console.log(`✅ SMS gesendet an ${to}: ${twilioMessage.sid}`)
	} catch (error) {
		console.error(`❌ Fehler beim Senden an ${to}:`, error)
		throw error
	}
}

/**
 * Hauptfunktion
 */
async function main(): Promise<void> {
	console.log('🔔 Starte SMS-Erinnerung...\n')

	if (DATE) {
		console.log(`🧪 Datum: ${DATE}`)
	}

	// Check Twilio credentials
	if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN) {
		console.error('❌ Fehlende Umgebungsvariablen:')
		if (!TWILIO_ACCOUNT_SID) console.error('   - TWILIO_ACCOUNT_SID')
		if (!TWILIO_AUTH_TOKEN) console.error('   - TWILIO_AUTH_TOKEN')
		process.exit(1)
	}

	console.log(`📱 Sender ID: ${TWILIO_SENDER_ID}`)
	console.log(`📝 Kontext: ${REMINDER_CONTEXT}`)
	console.log(`👤 Absender: ${SENDER_NAME}\n`)

	// Load data
	console.log('📂 Lade Dienstplan-Daten...')
	const { services, parents } = await loadYamlData()
	console.log(`   ${services.length} Services geladen`)
	console.log(`   ${parents.length} Parents geladen\n`)

	// Create parent lookup map (only active parents)
	const parentMap = new Map<string, Parent>()
	for (const parent of parents) {
		if (parent.active) {
			parentMap.set(parent.id, parent)
		}
	}

	// Find service
	const service = findService(services)

	if (!service) {
		console.log('ℹ️  Kein Dienst gefunden. Keine SMS zu versenden.')
		return
	}

	const dateFormatted = formatDatumDeutsch(service.date)
	console.log(`📅 Dienst gefunden für ${dateFormatted}:`)
	for (const parentId of service.parents) {
		const parent = parentMap.get(parentId)
		if (parent) {
			console.log(`   - ${parent.fullName}`)
		} else {
			console.log(`   - ${parentId} (nicht gefunden)`)
		}
	}
	console.log()

	// Send SMS
	const client = Twilio(
		TWILIO_ACCOUNT_SID as string,
		TWILIO_AUTH_TOKEN as string,
	)

	for (const parentId of service.parents) {
		const parent = parentMap.get(parentId)

		if (parent) {
			// Get other parents' names for the message
			const otherParentNames = service.parents
				.filter((id) => id !== parentId)
				.map((id) => {
					const otherParent = parentMap.get(id)
					return otherParent ? otherParent.fullName : id
				})

			const message = createMessage(
				parent.firstName,
				dateFormatted,
				otherParentNames,
			)
			await sendSMS(client, parent.phone, message, TWILIO_SENDER_ID)
		} else {
			console.warn(`⚠️  Keine Daten für ${parentId} gefunden`)
		}
	}

	console.log('\n✨ SMS-Erinnerungen erfolgreich versendet!')
}

// Script ausführen
main().catch((error) => {
	console.error('Unerwarteter Fehler:', error)
	process.exit(1)
})
