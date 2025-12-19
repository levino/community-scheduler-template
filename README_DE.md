# Community Scheduler Template

> **Ein produktionsreifes Planungssystem, das Admin-Panels und Backend-Entwicklung überflüssig macht.**
>
> Gebaut für wiederkehrende Freiwilligen-Pläne mit Self-Service, automatischen Erinnerungen und KI-gestützten Updates.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **💡 Live-Demo:** [community-scheduler-demo.levinkeller.de](https://community-scheduler-demo.levinkeller.de) - Kindergarten Zipfelmütze Kochdienst-Demo
>
> Die Demo ist der Einfachheit halber öffentlich. In der Praxis kann das System **zugriffsgeschützt** betrieben werden (privates Repo + Authentication).

---

## 📅 Was dieses Template macht

Ursprünglich für ein Waldorfschul-Waldprogramm gebaut, bietet dieses Template ein vollständiges Planungssystem mit:

### Kernfunktionen

✅ **Wöchentlich rotierende Zeitpläne** über mehrere Wochentagsgruppen (Montag-Freitag)
✅ **Self-Service für Teilnehmer** - jeder kann:
- Sich selbst zum Plan hinzufügen
- Dienste mit anderen tauschen
- Kontaktdaten aktualisieren
- Planänderungen anfragen

✅ **Automatische Erinnerungen** - aktive Aktionen wie:
- **SMS-Benachrichtigungen** einen Tag vor dem Dienst (via Twilio Integration)
- Email-Erinnerungen (einfach hinzuzufügen)
- Kalender-Integrationen (via Webhooks)

✅ **Statistik-Dashboard** zeigt:
- Wer hat wann gedient
- Anzahl Dienste pro Person
- Anstehende Verpflichtungen

✅ **Mobile-friendly Design**:
- One-Tap Telefonanrufe
- Responsive Layout
- Schnelles Laden (statische Seiten)

✅ **Typsichere Daten** mit Zod Schema-Validierung
- Fehler werden zur Build-Zeit abgefangen
- Keine Runtime-Überraschungen
- Klare Datenstruktur

### Perfekt für

- 🏫 **Schulen**: Eltern-Freiwilligen-Programme, Pausenaufsichten, Mensadienste
- 📚 **Bildungseinrichtungen**: Bibliotheks-Freiwillige, Tutoren-Zeitpläne
- 🏥 **Gesundheitswesen**: Schichtpläne (mit etwas Anpassung), Bereitschaftsdienste
- 🌱 **Dorfgemeinschaften**: Blumen gießen, Gemeinschaftsgarten-Pflege
- ⛪ **Religiöse Gemeinschaften**: Kirchengruppen-Pläne, Gottesdienst-Koordination
- 👁️ **Nachbarschaft**: Nachbarschaftswachen, Mülltonnen-Rotationen
- 🎨 **Kulturvereine**: Veranstaltungshilfe, Technik-Teams
- 🏢 **Büros**: Meeting-Raum-Reinigung, Küchendienste
- 🔄 **Jede wiederkehrende gruppen-basierte Planung**

---

## 💰 Der Business Case

### Traditioneller Ansatz

**Entwicklung:**
- Frontend: 2 Wochen
- Backend API: 2 Wochen
- Admin-Interface: 3 Wochen
- Authentifizierung/Berechtigungen: 1 Woche
- Testing/Deployment: 1 Woche
**Gesamt: 9 Wochen @ 100€/h = 36.000€**

**Hosting:**
- Backend Server: 20€/Monat
- Datenbank: 15€/Monat
- SSL-Zertifikate, Monitoring: 10€/Monat
**Gesamt: 45€/Monat = 540€/Jahr**

### Dieses Template

**Entwicklung:**
- Frontend anpassen: 2 Tage
- Deployment konfigurieren: 30 Minuten
**Gesamt: 2,5 Tage @ 100€/h = 2.000€**

**Hosting:**
- Statisches Hosting: **0-5€/Monat** (GitHub Pages/Cloudflare/Netlify Free-Tiers)
- Keine Datenbank nötig
- Kein Backend-Server nötig
**Gesamt: ~0-60€/Jahr**

**💡 Du sparst über 34.000€ allein im ersten Jahr.**

Plus: Geringere Wartung, bessere Sicherheit (kein Server zum Hacken), unendliche Skalierbarkeit (CDN-basiert).

---

## 🎯 Wie es funktioniert: GitHub als Admin-Interface

Die Innovation dieses Templates ist die Nutzung von **GitHub selbst** als Admin-Interface, wodurch wochenlange CRUD-Entwicklung wegfällt.

### Das Geheimnis: Kein Admin-Panel nötig

Statt komplexe Admin-Interfaces mit Authentifizierung, Rollen-Management und endlosen Formularen zu bauen:

- **User bearbeiten Daten direkt** - einfache Textdateien in GitHub (kein Coding erforderlich)
- **Pull Requests = dein Review-System** - Änderungen mit einem Klick freigeben
- **KI unterstützt bei Änderungen** - Claude Code macht Edits aus einfachen Anweisungen
- **Git History = Audit-Log** - komplette Aufzeichnung wer was wann geändert hat

### Real-World Workflow

**Traditioneller Ansatz:**
1. User schreibt Email: "Kannst du meinen Dienst vom 15. April auf den 22. April verschieben?"
2. Admin loggt sich ins Backend ein
3. Admin navigiert durch 5 Screens
4. Admin aktualisiert Datenbank manuell
5. Admin bestätigt per Email
**⏱️ Zeit: 10-15 Minuten pro Anfrage**

**Mit diesem Template:**
1. User öffnet GitHub Issue: "@claude-code bitte meinen Dienst vom 15. April auf den 22. April verschieben"
2. Claude Code erstellt Pull Request automatisch
3. Admin reviewt (sieht genau was sich ändert) und klickt "Merge"
4. Seite deployed automatisch mit Änderungen live in Sekunden
**⏱️ Zeit: 30 Sekunden gesamt**

### Self-Service gibt allen Power

**User können:**
- Änderungen selbst einreichen via GitHub Issues
- Exakte Änderungen sehen bevor sie angewendet werden (im PR)
- Kein technisches Wissen erforderlich - nur einfaches Deutsch
- Sofortige Bestätigung wenn gemerged

**Admins müssen nur:**
- Pull Requests reviewen (visueller Diff zeigt Änderungen)
- Mergen oder Modifikationen anfragen
- Vertrauen aber verifizieren - keine manuelle Dateneingabe

### KI-gestützte Updates

Sobald du [Claude Code GitHub Action](https://docs.claude.com/claude-code/github-actions) installiert hast, können User Änderungen anfragen wie:

**Freiwillige hinzufügen:**
```
@claude-code bitte hinzufügen:
Name: Maria Garcia
Telefon: +1555001234
Gruppe: Mittwoch
```

**Dienste tauschen:**
```
@claude-code dienste tauschen:
- Max von 2025-04-15 auf 2025-04-22 verschieben
- Sarah von 2025-04-22 auf 2025-04-15 verschieben
```

**Bulk-Planung:**
```
@claude-code plane Montags-Dienste für nächstes Quartal
mit alternierenden Paaren: Anna/Thomas, Julia/Michael
```

Claude Code erstellt einen PR der genau zeigt was sich ändern wird. Du reviewst, mergst, fertig.

---

## ⚖️ Trade-offs

### Der Trade-off: Datensichtbarkeit

- **Daten liegen in GitHub Repository** - jeder mit Repo-Zugriff kann sie sehen
- Für viele Anwendungsfälle (Community-Pläne, Freiwilligen-Listen) ist das **völlig in Ordnung**
- Deine Organisation teilt diese Infos vermutlich eh schon via Email/Spreadsheets

### Lösungen bei Bedarf für Privatsphäre

**Für halb-private Daten** (z.B. schulinterne Pläne):
- Mache GitHub Repo **privat** (kostenlos für Organisationen)
- Gewähre Zugriff nur autorisierten Nutzern (Lehrer, Personal, etc.)
- Daten sind vor Öffentlichkeit versteckt, aber für dein Team zugänglich

**Für wirklich private Daten** (selten bei Zeitplänen):
- Füge einen einfachen Auth-Layer hinzu (Cloudflare Access, BasicAuth, etc.)
- Immer noch kein Backend nötig! Auth passiert auf CDN/Edge-Level
- User editieren weiter via GitHub, Besucher brauchen Credentials

---

## 🚀 Schnellstart

### 1. Template verwenden

Klicke "Use this template" auf GitHub, dann:

```bash
git clone https://github.com/DEIN-USERNAME/dein-scheduler.git
cd dein-scheduler
npm install
```

### 2. Daten anpassen

`src/content/parent.yaml` bearbeiten:
```yaml
- id: max-mustermann
  firstName: Max
  lastName: Mustermann
  phone: "+491234567890"
  weekday: monday
  active: true
```

`src/content/service.yaml` bearbeiten:
```yaml
- id: "1"
  date: 2025-08-04
  parents: ["max-mustermann", "maria-beispiel"]
```

### 3. Deployen

Zu GitHub pushen und verbinden mit:
- **GitHub Pages** (kostenlos, automatisch)
- **Cloudflare Pages/Workers** (kostenlos, blitzschnell)
- **Netlify** (großzügiger Free-Tier)
- **Vercel** (großzügiger Free-Tier)

Alle haben erstklassige GitHub-Integration. Push = Deploy. Fertig.

### 4. SMS-Erinnerungen hinzufügen (Optional)

**✅ Vorkonfiguriert und einsatzbereit!** Dieses Template enthält SMS-Erinnerungs-Funktionalität via Twilio:
- Automatische tägliche Erinnerungen an Teilnehmer
- Gesendet 18 Stunden vor Dienstzeit
- Personalisierte Nachrichten mit Mit-Teilnehmer-Namen
- Läuft via GitHub Actions (geplanter Workflow)

Der Workflow und das Script sind **bereits im Template enthalten**:
- `.github/workflows/sms-reminder.yml` - GitHub Action Workflow (Cron-Schedule auskommentiert)
- `scripts/send-sms-reminder.ts` - SMS-Versand-Logik

**Setup:**
1. [Twilio Account](https://www.twilio.com) erstellen (Kostenlose Testversion verfügbar)
2. Diese GitHub Secrets zu deinem Repository hinzufügen:
   - `TWILIO_ACCOUNT_SID` - Deine Twilio Account SID
   - `TWILIO_AUTH_TOKEN` - Dein Twilio Auth Token
   - `TWILIO_SENDER_ID` - Absender-Name (z.B. "KiGa Zipfelmütze")
   - `REMINDER_CONTEXT` - Kontext-Text (z.B. "Kochdienst")
   - `SENDER_NAME` - Wer die Erinnerungen sendet (z.B. "die Koordination")
3. Die `schedule`-Sektion in `.github/workflows/sms-reminder.yml` auskommentieren
4. Bei Bedarf Cron-Schedule anpassen (Standard: 17:00 UTC = 18:00 CET)

**Manuell testen:** Nutze den "Run workflow" Button in GitHub Actions vor Aktivierung des Zeitplans.

**Kosten:** ~0,01€ pro SMS (Twilio Pricing) - typischerweise wenige Euro pro Monat für kleine Gruppen

---

## 🛠️ Technologie-Stack

- **[Astro 5.16+](https://astro.build)** - Static Site Generator mit Content Collections
- **TypeScript 5.6** - Typsicherheit durchgehend
- **Tailwind CSS + DaisyUI** - Modernes, responsives Styling
- **Zod** - Runtime Schema-Validierung
- **Lefthook + Biome** - Auto-Formatierung und Code-Qualität
- **date-fns + Ramda** - Funktionale Utilities

Kein Framework-Lock-in. Standard Web-Technologien. Einfach zu warten.

---

## 📋 Wie es technisch funktioniert

### Datenspeicherung

Alle Daten leben in einfachen YAML-Dateien (keine Datenbanken):

**Freiwillige** (`src/content/parent.yaml`):
```yaml
- id: max-mustermann
  firstName: Max
  lastName: Mustermann
  phone: "+491234567890"
  weekday: monday
  active: true
```

**Zeitplan** (`src/content/service.yaml`):
```yaml
- id: "1"
  date: 2025-08-04
  parents: ["max-mustermann", "maria-beispiel"]
```

### Typsicherheit

Zod-Schemas validieren Daten zur Build-Zeit:

```typescript
const elternSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  weekday: z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday']),
  active: z.boolean(),
})
```

**Fehlerhafte Daten = Build schlägt fehl.** Keine Runtime-Fehler. Niemals.

### Statische Generierung

Astro generiert statisches HTML zur Build-Zeit:
- **Blitzschnell** - vor-gerenderte Seiten vom CDN ausgeliefert
- **Sicher** - kein Server zum Hacken, keine Datenbank zum Brechen
- **Günstig** - nur File-Serving
- **Skalierbar** - handhabt Millionen Besucher ohne Mehrkosten

---

## 🎓 Bildungswert

Dieses Template demonstriert:

**Moderne Architektur:**
- Static Site Generation (JAMstack)
- Git-basierter CMS-Ansatz
- Edge-Deployment-Strategien
- Typsichere Daten-Pipelines

**KI-Mensch-Kollaboration:**
- GitHub als Interface-Layer
- KI-assistiertes Daten-Management
- Pull-Request-Workflows
- Automatisierte Deployments

**Business Value:**
- Radikale Kostenreduktion ohne Feature-Verzicht
- Schnellere Time-to-Market (Tage statt Monate)
- Geringere Wartungslast (keine Server)
- Bessere User Experience (sofortiges Laden)

Perfekt für:
- Moderne Webentwicklung lernen
- Software-Architektur lehren
- JAMstack-Prinzipien verstehen
- KI-assistierte Workflows demonstrieren

---

## 💡 Inspiration & Hintergrund

Dieses Template entstand aus echter Frustration: Eltern-Freiwillige für ein wöchentliches Waldprogramm einer Waldorfschule zu koordinieren.

**Wir wollten nicht:**
- Noch ein Admin-Panel bauen (wochenlange Arbeit)
- 50€/Monat für ein SaaS-Planungs-Tool zahlen
- Einen Backend-Server warten (Security Updates, Backups, Monitoring)
- User-Authentifizierung und Berechtigungen managen

**Wir wollten:**
- Transparente Planung, die jeder sehen kann
- Einfache Updates ohne technische Hürden
- Historisches Tracking eingebaut
- Mobiler Zugriff für schnelles Nachschlagen
- Aktive Erinnerungen damit Leute nicht vergessen

**Lösung:**
GitHub + KI + Static Site + Twilio = Komplettes System, kein Backend!

Das Ergebnis handhabt echte Workloads, kostet fast nichts und brauchte Tage (nicht Monate) zum Bauen.

---

## 🤝 Beitragen

Dieses Template wurde mit KI-Unterstützung (Claude Code) gebaut und entwickelt sich weiter.

**Beitragen:**
- Issues melden
- Features vorschlagen
- Deine Implementierung teilen
- Dokumentation verbessern
- Integrationen hinzufügen (Email, Kalender, etc.)

Fork, modifiziere, teile. Das ist der Spirit!

---

## 📄 Lizenz

MIT License - nutze es für alles!

---

## 🆘 Support & Dienstleistungen

### Community Support

- **Issues**: [GitHub Issues](https://github.com/levino/community-scheduler-template/issues)
- **Diskussionen**: [GitHub Discussions](https://github.com/levino/community-scheduler-template/discussions)
- **KI-Hilfe**: Issue öffnen mit `@claude-code`

### Professionelle Dienstleistungen

Benötigst du Hilfe beim Deployment oder Anpassungen für deinen spezifischen Anwendungsfall?

**[Levin Keller](https://levinkeller.de)** bietet an:
- 🚀 **Deployment-Service** - Ich richte dein System komplett ein
- 🔧 **Anpassungen & Erweiterungen** - Zusätzliche Features, Custom Styling, Integrationen
- 📱 **SMS/Email-Integration** - Automatische Reminder-Systeme
- 📊 **Custom Dashboards** - Spezielle Auswertungen und Statistiken
- 🎓 **Schulungen** - Dein Team lernt, das System selbst zu pflegen

**Kontakt:** Siehe [levinkeller.de](https://levinkeller.de) für Anfragen

---

**Mit ❤️ und KI-Unterstützung gebaut**

Powered by [Claude Code](https://claude.com/claude-code) und [Astro](https://astro.build)

*Beweis, dass man nicht immer ein Backend braucht.*

---

## Impressum

Angaben gemäß § 5 TMG:

**Levin Keller**
Hohenzollerndam 152
14199 Berlin
Deutschland

**Kontakt:** [levinkeller.de](https://levinkeller.de)

**Haftungsausschluss:**
Dieses Template wird "as is" ohne Gewährleistung bereitgestellt. Siehe MIT License für Details.
