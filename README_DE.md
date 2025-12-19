# Community Scheduler Template

> **GitHub als Admin-Interface. KI als Entwickler. Null Backend-Code.**
>
> Ein produktionsreifes Template, das Admin-Panels, CRUD-Interfaces und Backend-Entwicklung überflüssig macht.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 💡 Die Kern-Idee

**Traditioneller Ansatz:**
1. Frontend bauen ✅
2. Backend API bauen ⏰💰
3. Admin-Interface bauen ⏰💰💰
4. Alles für immer warten ⏰💰💰💰

**Dieses Template:**
1. Frontend bauen ✅
2. GitHub als Admin-Interface nutzen ✅ (kostenlos!)
3. Claude Code für Änderungen ✅ (KI-gestützt!)
4. Überall statisch deployen ✅ (Centbeträge!)

**Du sparst Wochen Entwicklungszeit und Tausende Euro.**

---

## 🎯 Warum das alles verändert

### Kein Admin-Panel nötig

Statt komplexe CRUD-Interfaces mit Authentifizierung, Rollen-Management und endlosen Formularen zu bauen:

- **User bearbeiten Daten direkt** via GitHub (Textdateien, kein Code)
- **Pull Requests sind dein Review-System** - Änderungen mit einem Klick freigeben
- **KI unterstützt bei Änderungen** - Claude Code macht Edits basierend auf einfachen Anweisungen
- **Git History ist dein Audit-Log** - wer hat was wann geändert und warum

### Self-Service für alle

User können:
- Sich selbst zum Plan hinzufügen
- Dienste tauschen
- Ihre Kontaktdaten aktualisieren
- Plan-Änderungen anfragen

Admins müssen nur:
- Pull Requests reviewen (5 Sekunden)
- Mergen oder Änderungen anfordern
- Das war's. Wirklich.

### Real-World Beispiel

**Traditioneller Workflow:**
1. User schreibt Email: "Kannst du meinen Dienst vom 15. April auf den 22. April verschieben?"
2. Admin loggt sich ins Backend ein
3. Admin navigiert durch 5 Screens
4. Admin aktualisiert Datenbank
5. Admin bestätigt per Email
**Zeit: 10-15 Minuten**

**Mit diesem Template:**
1. User öffnet GitHub Issue: "@claude-code bitte meinen Dienst vom 15. April auf den 22. April verschieben"
2. Claude Code erstellt Pull Request
3. Admin klickt "Merge"
4. Seite deployed automatisch
**Zeit: 30 Sekunden**

---

## ⚖️ Trade-offs

### Der Trade-off: Datensichtbarkeit

- **Daten liegen in einem GitHub Repository** - jeder mit Repo-Zugriff kann sie sehen
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

## 📅 Was dieses Template bietet

Ursprünglich für ein Waldorfschul-Waldprogramm gebaut, handhabt dieses Template:

- **Wiederkehrende Freiwilligen-Pläne** über mehrere Wochentagsgruppen
- **Automatische Vergangenheit/Zukunft-Trennung** (Build-Time Berechnung)
- **Statistik-Dashboard** zeigt, wer was gemacht hat
- **Mobile-friendly** Design mit One-Tap Anrufen
- **Typsichere Daten** mit Zod Schema-Validierung

**Perfekt für:**
- Schul-Eltern-Freiwilligen-Programme
- Gemeinschaftsgarten-Pflege
- Nachbarschaftswachen
- Bibliotheks-Freiwillige
- Kirchengruppen-Pläne
- Jede wiederkehrende gruppen-basierte Planung

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
```

`src/content/service.yaml` bearbeiten:
```yaml
- id: "1"
  date: 2025-08-04
  parents: ["max-mustermann", "maria-beispiel"]
```

### 3. Deployen

Zu GitHub pushen. Verbinden mit:
- **GitHub Pages** (kostenlos, automatisch)
- **Cloudflare Pages** (kostenlos, schnell)
- **Netlify** (großzügiger Free-Tier)
- **Vercel** (großzügiger Free-Tier)

Alle haben erstklassige GitHub-Integration. Push = Deploy. Fertig.

---

## 🤖 KI-gestützte Workflows

### Claude Code einrichten (Optional aber empfohlen)

1. [Claude Code GitHub Action](https://docs.claude.com/claude-code/github-actions) installieren
2. User können jetzt Änderungen via GitHub Issues anfragen

### Beispiel-Anfragen

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

Claude Code erstellt einen PR. Du reviewst und mergst. Seite deployed automatisch.

---

## 💰 Kostenvergleich

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
- SSL-Zertifikate, Monitoring, etc: 10€/Monat
**Gesamt: 45€/Monat = 540€/Jahr**

### Dieses Template

**Entwicklung:**
- Frontend anpassen: 2 Tage
- Deployment: 30 Minuten
**Gesamt: 2,5 Tage @ 100€/h = 2.000€**

**Hosting:**
- Statisches Hosting: **0-5€/Monat**
- Keine Datenbank nötig
- Kein Backend-Server nötig
**Gesamt: ~0-60€/Jahr**

**Du sparst über 34.000€ allein im ersten Jahr.**

---

## 📋 Wie es funktioniert

### Datenspeicherung

Alle Daten leben in einfachen YAML-Dateien:

**Freiwillige** (`src/content/parent.yaml`):
```yaml
- id: max-mustermann
  firstName: Max
  lastName: Mustermann
  phone: "+491234567890"
  weekday: monday
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
})
```

Fehlerhafte Daten = Build schlägt fehl. Keine Runtime-Fehler.

### Statische Generierung

Astro generiert statisches HTML zur Build-Zeit:
- **Blitzschnell** - vor-gerenderte Seiten
- **Sicher** - kein Server zum Hacken
- **Günstig** - nur File-Serving
- **Skalierbar** - CDN handhabt jeden Traffic

---

## 🛠️ Technologie-Stack

- **[Astro 5.16+](https://astro.build)** - Static Site Generator
- **TypeScript 5.6** - Typsicherheit
- **Content Collections** - Typsicheres Daten-Laden
- **Tailwind CSS + DaisyUI** - Styling
- **Lefthook + Biome** - Auto-Formatierung
- **date-fns + Ramda** - Utilities

Kein Framework-Lock-in. Standard Web-Technologien. Einfach zu warten.

---

## 🎓 Bildungswert

Dieses Template demonstriert:

**Moderne Architektur:**
- Static Site Generation
- Git-basiertes CMS
- Edge Deployment
- Typsichere Daten-Pipelines

**KI-Mensch-Kollaboration:**
- GitHub als Interface-Layer
- KI-assistierte Daten-Änderungen
- Pull Request Workflows
- Automatisierte Deployments

**Business Value:**
- Radikale Kostenreduktion
- Schnellere Time-to-Market
- Geringere Wartungslast
- Bessere User Experience

Perfekt für:
- Moderne Webentwicklung lernen
- Software-Architektur lehren
- JAMstack verstehen
- KI-assistierte Workflows demonstrieren

---

## 🤝 Beitragen

Dieses Template wurde mit KI-Unterstützung (Claude Code) gebaut und entwickelt sich weiter.

**Beitragen:**
- Issues melden
- Features vorschlagen
- Deine Implementierung teilen
- Dokumentation verbessern

Fork, modifiziere, teile. Das ist der Spirit!

---

## 📄 Lizenz

MIT License - nutze es für alles!

---

## 💡 Inspiration & Hintergrund

Dieses Template entstand aus echter Frustration: Eltern-Freiwillige für ein wöchentliches Waldprogramm einer Waldorfschule zu koordinieren.

**Wir wollten nicht:**
- Noch ein Admin-Panel bauen
- 50€/Monat für ein SaaS-Planungs-Tool zahlen
- Einen Backend-Server warten
- User-Management betreiben

**Wir wollten:**
- Transparente Planung, die jeder sehen kann
- Einfache Updates ohne technische Hürden
- Historisches Tracking eingebaut (Git!)
- Mobiler Zugriff für schnelles Nachschlagen

**Lösung:**
GitHub + KI + Static Site = Kein Backend nötig!

Das Ergebnis handhabt echte Workloads, kostet fast nichts und brauchte Tage (nicht Monate) zum Bauen.

---

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/levino/community-scheduler-template/issues)
- **Diskussionen**: [GitHub Discussions](https://github.com/levino/community-scheduler-template/discussions)
- **KI-Hilfe**: Issue öffnen mit `@claude-code`

---

**Mit ❤️ und KI-Unterstützung gebaut**

Powered by [Claude Code](https://claude.com/claude-code) und [Astro](https://astro.build)

*Beweis, dass man nicht immer ein Backend braucht.*
