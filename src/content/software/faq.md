---
title: Häufig gestellte Fragen
description: FAQ zum Community Scheduler Template
---

# Häufig gestellte Fragen

## Warum nicht einfach eine Excel-Tabelle, Google Sheets oder einen geteilten Google Kalender nutzen?

Eine berechtigte Frage! Für einfache, persönliche Terminplanung sind Excel, Google Sheets oder Google Kalender durchaus geeignet. Doch bei **wiederkehrenden Gemeinschaftsaufgaben** mit mehreren Beteiligten stößt man schnell an Grenzen:

| Aspekt | Excel / Google Sheets / Kalender | Dieses System |
|--------|----------------------------------|---------------|
| **Änderungen** | Eine Person verwaltet die Datei, alle anderen schreiben Mails/WhatsApp - Flaschenhals | Selbstständig Tausch-Anfragen stellen, KI erstellt Änderung, Admin bestätigt nur noch |
| **Fehlerquellen** | Tippfehler, falsches Datum, ungültige Einträge möglich | Automatische Validierung - fehlerhafte Daten werden vor Veröffentlichung abgelehnt |
| **Mobilfreundlichkeit** | Tabellen und Kalender sind auf dem Handy umständlich | Responsive Design, Telefonnummern direkt anrufbar |
| **Erinnerungen** | Manuell verschicken oder vergessen | Automatische SMS-Erinnerungen vor jedem Dienst |
| **Statistiken** | Manuelles Zählen und Sortieren | Übersichtliche Statistik: Wer hat wie oft Dienst gemacht? |
| **Nachvollziehbarkeit** | Änderungen überschreiben Originaldaten | Vollständige Historie aller Änderungen mit Begründung |
| **Kosten** | Kostenlos, aber eingeschränkte Zusammenarbeit | 0-5 EUR/Monat für professionelle Features |

**Kurz gesagt:** Für eine einzelne Geburtstagsfeier reicht ein geteilter Kalender. Für regelmäßige Gemeinschaftsdienste mit Tauschbedarf, Erinnerungen und fairer Rotation bietet dieses System deutliche Vorteile - und spart langfristig Zeit für alle Beteiligten.

---

## Welche technischen Voraussetzungen gibt es?

Das Template basiert auf [Astro](https://astro.build/) und benötigt:
- Node.js 22 oder höher
- npm oder ein alternativer Package Manager
- Optional: GitHub Account für einfaches Deployment

---

## Wie werden Daten gespeichert?

Alle Daten werden in einfachen **YAML-Dateien** gespeichert:
- `src/content/parent.yaml` - Teilnehmer/Eltern
- `src/content/service.yaml` - Dienstplan-Einträge

Es gibt **keine Datenbank** - die Daten liegen direkt im Git-Repository und sind somit vollständig versioniert.

---

## Wie sicher sind meine Daten?

Das System kann auf verschiedene Arten geschützt werden:
- **Privates GitHub Repository** - Nur eingeladene Personen haben Zugriff
- **Authentication-Layer** - z.B. Cloudflare Access oder BasicAuth
- **Selbst-Hosting** - Vollständige Kontrolle über die Infrastruktur

Die Demo-Installation ist absichtlich öffentlich, um die Funktionen zu demonstrieren.

---

## Kann ich das Template für meine Gemeinschaft nutzen?

Ja! Das Template ist **Open Source** unter MIT-Lizenz. Sie können:
- Das Repository forken
- Texte, Namen und Termine anpassen
- Eigenes Branding hinzufügen
- Auf einer beliebigen Plattform deployen

---

## Wie funktioniert der KI-gestützte Tausch?

1. Ein Teilnehmer öffnet ein [GitHub Issue](https://github.com/levino/community-scheduler-template/issues)
2. Er schreibt: "@claude bitte tausche meinen Dienst am [DATUM] mit [NAME] am [DATUM]"
3. Die KI (Claude) erstellt automatisch einen Pull Request mit der Änderung
4. Ein Administrator überprüft und bestätigt die Änderung

---

## Kann ich Dienstpläne mit KI optimieren lassen?

Ja! Ein großer Vorteil dieses Systems ist die Möglichkeit, Dienstpläne mit KI-Unterstützung zu optimieren. Anstatt manuell Excel-Zellen zu verschieben oder alle Beteiligten zu befragen, kannst du einfach Anforderungen in natürlicher Sprache formulieren:

- *"Hans kann dienstags nie"*
- *"Anna und Thomas möchten immer zusammen Dienst haben"*
- *"Stelle sicher, dass niemand zwei Wochen hintereinander dran ist"*
- *"Familie Müller kann im August nicht, weil sie im Urlaub sind"*

Die KI (z.B. Claude) analysiert den bestehenden Dienstplan, berücksichtigt alle Einschränkungen und schlägt automatisch eine optimierte Lösung vor - fair, effizient und ohne stundenlange Koordination per WhatsApp oder E-Mail.

---

## Was kostet das System?

| Komponente | Kosten |
|------------|--------|
| Template (Open Source) | Kostenlos |
| GitHub (für kleine Teams) | Kostenlos |
| Hosting (GitHub Pages, Cloudflare) | Kostenlos |
| SMS-Erinnerungen (optional) | Ca. 0,07 EUR pro SMS |

Für die meisten Gemeinschaften ist die Nutzung **komplett kostenlos**.
