# Quick Start Guide - Astro + Shipyard

Schnelleinstieg für die neue Wäldchendienst-Website mit Astro und Shipyard.

## Installation und Start

```bash
# Abhängigkeiten installieren
npm install --legacy-peer-deps

# Entwicklungsserver starten
npm start

# Build für Produktion
npm run build

# Produktion-Preview lokal testen
npm run preview
```

## Wichtigste Dateien und Ordner

```
src/
├── pages/                    # Routing (URL = Dateistruktur)
│   ├── index.astro          # Startseite (/)
│   └── dienstplan/
│       └── montag.astro     # /dienstplan/montag
│
├── content/                 # Strukturierte Inhalte
│   ├── config.ts           # Schema-Definitionen
│   ├── docs/               # Dokumentation (Markdown)
│   ├── dienstplan/         # Dienstplan-Einträge (YAML)
│   └── betreuer/           # Betreuer-Daten (YAML)
│
├── components/             # Wiederverwendbare Komponenten
└── layouts/                # Seitenlayouts
```

## Häufige Aufgaben

### 1. Neuen Dienstplan-Eintrag erstellen

**Datei:** `src/content/dienstplan/YYYY-MM-DD-wochentag.yaml`

```yaml
datum: "2025-12-15"
person1: "Vorname Nachname"
person2: "Vorname Nachname"
wochentag: montag
erledigt: false
```

**Erlaubte Wochentage:** `montag`, `dienstag`, `mittwoch`, `donnerstag`, `freitag`

### 2. Betreuer:in hinzufügen

**Datei:** `src/content/betreuer/vorname-nachname.yaml`

```yaml
name: "Vorname Nachname"
telefon: "+49 XXX XXXXXXXX"
wochentag: montag
aktiv: true
```

### 3. Dokumentation bearbeiten

**Dateien:** `src/content/docs/*.md`

```markdown
---
title: "Seitentitel"
sidebar_position: 1
description: "Kurzbeschreibung"
---

# Überschrift

Ihr Markdown-Inhalt hier...
```

**Markdown-Features:**
- Standard Markdown
- Frontmatter für Metadaten
- MDX für React-Komponenten
- Automatische Sidebar-Navigation

### 4. Neue Seite erstellen

**Datei:** `src/pages/meine-seite.astro`

```astro
---
// TypeScript-Code hier (Server-seitig)
import { getCollection } from 'astro:content';

const data = await getCollection('dienstplan');
---

<html lang="de">
<head>
  <title>Meine Seite</title>
</head>
<body>
  <h1>Hallo Welt</h1>
  <p>Anzahl Dienstplan-Einträge: {data.length}</p>
</body>
</html>
```

## Content Collections nutzen

Content Collections bieten Type-Safe Zugriff auf strukturierte Daten:

```astro
---
import { getCollection } from 'astro:content';

// Alle Einträge abrufen
const allDienste = await getCollection('dienstplan');

// Filtern
const montagDienste = allDienste.filter(d => d.data.wochentag === 'montag');

// Sortieren
const sortiert = montagDienste.sort((a, b) =>
  a.data.datum.localeCompare(b.data.datum)
);

// Aktive Betreuer
const betreuer = await getCollection('betreuer');
const aktiv = betreuer.filter(b => b.data.aktiv);
---

<ul>
  {sortiert.map(dienst => (
    <li>
      {dienst.data.datum}: {dienst.data.person1} & {dienst.data.person2}
    </li>
  ))}
</ul>
```

## Styling mit Tailwind CSS

Shipyard nutzt Tailwind CSS + DaisyUI:

```astro
<!-- Utility Classes -->
<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-6">Überschrift</h1>
  <p class="text-gray-600">Text</p>
</div>

<!-- DaisyUI Komponenten -->
<button class="btn btn-primary">Button</button>
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Karte</h2>
    <p>Inhalt</p>
  </div>
</div>
```

## Routing

Astro nutzt dateibasiertes Routing:

| Datei                        | URL                      |
|------------------------------|--------------------------|
| `src/pages/index.astro`      | `/`                      |
| `src/pages/about.astro`      | `/about`                 |
| `src/pages/blog/post.astro`  | `/blog/post`             |
| `src/pages/[id].astro`       | `/123` (dynamisch)       |

Mit i18n (Deutsch als Standard):
- Dokumentation: `/de/docs/...`
- Eigene Seiten: `/meine-seite`

## Shipyard-Features

### Automatische Navigation

Wird in `astro.config.mjs` konfiguriert:

```javascript
shipyard({
  title: 'Wäldchendienst FWS Maschsee',
  navigation: {
    docs: { label: 'Dokumentation', href: '/de/docs' },
  },
})
```

### Docs-Integration

```javascript
shipyardDocs({
  routeBasePath: 'docs',
  editUrl: 'https://github.com/.../edit/main/src/content/docs',
})
```

### Automatische Sidebar

Die Sidebar wird automatisch aus der Ordnerstruktur generiert:
- Sortierung über `sidebar_position` im Frontmatter
- Custom Labels mit `sidebar_label`
- Seiten verstecken mit `sidebar.render: false`

## Debugging

### Type-Checking
```bash
npm run typecheck
```

### Dev-Tools
- Astro Dev Toolbar (im Browser, unten links)
- TypeScript-Fehler im Terminal
- Vite HMR (Hot Module Replacement)

### Logs
```astro
---
console.log('Server-seitig (build time)');
const data = await getCollection('dienstplan');
console.log('Anzahl Einträge:', data.length);
---

<script>
  console.log('Client-seitig (browser)');
</script>
```

## Hilfreiche Links

- [Astro Dokumentation](https://astro.build/docs)
- [Shipyard Dokumentation](https://shipyard.levinkeller.de/en/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI Komponenten](https://daisyui.com/components/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)

## Typische Fehler

### 1. "Cannot find module"
```bash
# Abhängigkeiten neu installieren
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### 2. "Expected a default export"
```javascript
// Falsch
export { myFunction };

// Richtig
export default myFunction;
```

### 3. Build-Fehler bei Content Collections
```bash
# Cache löschen
rm -rf .astro
npm run build
```

### 4. TypeScript-Fehler
```bash
# Types neu generieren
npm run dev  # Startet und generiert .astro/types.d.ts
```

## Unterstützung

- **Technische Fragen:** Levin Keller (post@levinkeller.de)
- **Shipyard Issues:** https://github.com/levino/shipyard/issues
- **Astro Discord:** https://astro.build/chat
