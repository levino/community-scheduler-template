---
title: Community Scheduler Template - Live Demo
description: Siehe das Template in Aktion und lerne, wie du es für deine Organisation nutzen kannst
layout: '@levino/shipyard-base/layouts/Splash.astro'
---

# Community Scheduler Template
## Live Demo

> **GitHub als Admin-Interface. KI als Entwickler. Null Backend-Code.**

Dies ist eine **Live-Demonstration** des Community Scheduler Templates - eine produktionsreife Lösung für die Verwaltung von Freiwilligen-Zeitplänen ohne Backend oder Admin-Panel.

---

## 🎯 Was du hier siehst

Diese Demo zeigt ein reales Planungssystem, das ursprünglich für das Waldprogramm einer Waldorfschule gebaut wurde. Statt ein individuelles Backend und Admin-Interface zu bauen (Wochen Arbeit, Tausende Euro Kosten), nutzen wir:

- **GitHub** als Admin-Interface
- **Claude Code** für Änderungen in einfachem Deutsch
- **Static Site Generation** für blitzschnelle, sichere Auslieferung
- **YAML-Dateien** statt Datenbanken
- **Automatische SMS-Erinnerungen** via Twilio (optional)

**Ergebnis:** Über 34.000€ gespart im ersten Jahr, keine Wartungslast.

### Perfekt geeignet für:

- 🏫 **Schulen**: Eltern-Freiwillige, Pausenaufsichten, Mensadienste, Stundenpläne (mit Anpassung)
- 🏥 **Gesundheitswesen**: Schichtpläne, Bereitschaftsdienste
- 🌱 **Dorfgemeinschaften**: Blumen gießen, Gemeinschaftsgarten
- ⛪ **Religionsgemeinschaften**: Kirchengruppen, Gottesdienst-Koordination
- 👁️ **Nachbarschaft**: Nachbarschaftswachen, Mülltonnen-Rotationen
- 🎨 **Vereine**: Veranstaltungshilfe, Technik-Teams
- 🏢 **Büros**: Meeting-Raum-Reinigung, Küchendienste

---

## 🚀 Probier es aus

### Erkunde die Demo

- [**Wochenpläne**](/dienstplan/monday) - Siehe wie Dienste nach Wochentagen organisiert sind
- [**Statistik-Dashboard**](/dienstplan/auswertung) - Zeigt Metriken für alle Freiwilligen
- [**Kontaktverzeichnis**](/docs/ansprechpartnerinnen) - Mobile-freundliche Kontaktliste mit direkter Anruffunktion

### Wie es funktioniert

1. **Daten leben in YAML-Dateien** - einfacher Text, keine Datenbank
2. **Bearbeiten via GitHub** - User können Änderungen via Issues anfragen
3. **Claude Code hilft** - KI macht Änderungen basierend auf einfachen Anweisungen
4. **Pull Requests = Review** - Admins genehmigen mit einem Klick
5. **Auto-Deploy** - Änderungen sind in Sekunden live

**Beispiel:** "Hey @claude-code, bitte verschiebe Johns Dienst vom 15. April auf den 22. April"
→ Claude erstellt PR → Admin merged → Fertig in 30 Sekunden

---

## 💡 Warum das alles verändert

### Traditioneller Ansatz
- Frontend bauen (2 Wochen)
- Backend API bauen (2 Wochen)
- Admin-Interface bauen (3 Wochen)
- Authentifizierung hinzufügen (1 Woche)
- **Gesamt: 9 Wochen @ 100€/h = 36.000€**
- **Hosting: 540€/Jahr** (Server + Datenbank + SSL)

### Dieses Template
- Frontend anpassen (2 Tage)
- Deployment (30 Minuten)
- **Gesamt: 2,5 Tage @ 100€/h = 2.000€**
- **Hosting: ~0-60€/Jahr** (nur statische Dateien)

**Du sparst über 34.000€ allein im ersten Jahr.**

---

## 📦 So startest du

### 1. Template forken

```bash
# Klicke "Use this template" auf GitHub, dann:
git clone https://github.com/DEIN-USERNAME/dein-scheduler.git
cd dein-scheduler
npm install
```

### 2. Deine Daten anpassen

Bearbeite `src/content/parent.yaml` und `src/content/service.yaml` mit deinen Freiwilligen und Terminen.

### 3. Deployen

Zu GitHub pushen und verbinden mit:
- GitHub Pages (kostenlos)
- Cloudflare Pages (kostenlos)
- Netlify (großzügiger Free-Tier)
- Vercel (großzügiger Free-Tier)

### 4. KI-Unterstützung einrichten (Optional)

Installiere [Claude Code GitHub Action](https://docs.claude.com/claude-code/github-actions) und deine User können Änderungen in einfachem Deutsch anfragen!

---

## 🌟 Hauptfunktionen

- ✅ **Kein Backend nötig** - GitHub ist dein CMS
- ✅ **KI-gestützte Updates** - Claude Code hilft bei Änderungen
- ✅ **Self-Service für User** - sie bearbeiten Daten direkt
- ✅ **Automatische Erinnerungen** - SMS-Benachrichtigungen via Twilio (siehe Original-Projekt)
- ✅ **Typsicher** - Zod-Validierung fängt Fehler zur Build-Zeit ab
- ✅ **Mobile-friendly** - funktioniert perfekt auf Smartphones
- ✅ **Blitzschnell** - vor-gerenderte statische Seiten
- ✅ **Null Wartung** - keine Server zu verwalten
- ✅ **Git History** - eingebautes Audit-Log

### Aktive Aktionen möglich

Das Template unterstützt nicht nur Anzeige, sondern auch **aktive Aktionen**:

- 📱 **SMS-Erinnerungen**: Das [Original-Projekt](https://github.com/levino/waeldchendienst-waldorfschule-hannover-maschsee) enthält fertigen Code für automatische SMS-Benachrichtigungen via Twilio
- 📧 **Email-Benachrichtigungen**: Einfach hinzuzufügen via GitHub Actions
- 📅 **Kalender-Sync**: Integration mit Google Calendar, iCal etc. möglich
- 🔔 **Webhook-Integration**: Verbinde mit Slack, Discord, oder anderen Tools

---

## 📚 Mehr erfahren

### Dokumentation
- [**GitHub Repository**](https://github.com/levino/community-scheduler-template) - Quellcode, README und Setup-Anleitung
- [**README (English)**](https://github.com/levino/community-scheduler-template/blob/main/README.md) - Comprehensive guide
- [**README (Deutsch)**](https://github.com/levino/community-scheduler-template/blob/main/README_DE.md) - Umfassende Anleitung

### Technische Details
- Gebaut mit [Astro 5.16+](https://astro.build)
- Gestylt mit [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- Nutzt [Content Collections](https://docs.astro.build/en/guides/content-collections/) für typsichere Daten
- Auto-formatiert mit [Biome](https://biomejs.dev)
- Deployed auf [Cloudflare Workers](https://workers.cloudflare.com)

---

## 👨‍💻 Über das Projekt

Dieses Template wurde von [Levin Keller](https://levinkeller.de) mit Unterstützung von [Claude Code](https://claude.com/claude-code) erstellt.

**Aus Frustration geboren:** Die Koordination von Eltern-Freiwilligen sollte nicht erfordern, noch ein Admin-Panel zu bauen. Dieses Template beweist, dass man nicht immer ein Backend braucht.

### Professionelle Dienstleistungen

Brauchst du Hilfe beim Deployment oder Anpassungen für deinen speziellen Anwendungsfall?

**Levin Keller bietet an:**
- 🚀 **Deployment-Service** - Komplette Einrichtung und Konfiguration
- 🔧 **Anpassungen & Erweiterungen** - Zusätzliche Features, Custom Styling, Integrationen
- 📱 **SMS/Email-Integration** - Automatische Reminder-Systeme aufsetzen
- 📊 **Custom Dashboards** - Spezielle Auswertungen und Statistiken
- 🎓 **Schulungen** - Dein Team lernt, das System selbst zu pflegen

**Kontakt für Anfragen:** [levinkeller.de](https://levinkeller.de)

### Community Support

- **GitHub:** [@levino](https://github.com/levino)
- **Issues:** [Bugs melden oder Features anfragen](https://github.com/levino/community-scheduler-template/issues)
- **Discussions:** [Fragen stellen oder Ideen teilen](https://github.com/levino/community-scheduler-template/discussions)

---

## 📄 Lizenz

MIT License - frei nutzbar für jeden Zweck!

---

## 🚀 Bereit, dein eigenes zu bauen?

Klicke "Use this template" auf [GitHub](https://github.com/levino/community-scheduler-template) und starte mit der Verwaltung von Zeitplänen ohne Backend-Aufwand.

**Fragen?** Öffne ein Issue mit `@claude-code` und erhalte KI-gestützte Hilfe!

---

*Beweis, dass man nicht immer ein Backend braucht.*
