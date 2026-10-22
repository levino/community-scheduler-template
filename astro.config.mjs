import shipyard from '@levino/shipyard-base'
import shipyardDocs from '@levino/shipyard-docs'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import globalsCss from './src/styles/globals.css?url'

// https://astro.build/config
export default defineConfig({
	site: 'https://community-scheduler-template.example.com',
	// Astro 7 entfernt standardmäßig Leerraum zwischen Inline-Elementen nach JSX-Regeln
	// (compressHTML: 'jsx'). Wir behalten das bisherige Verhalten, damit keine Leerzeichen verloren gehen.
	compressHTML: true,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		shipyard({
			css: globalsCss,
			title: 'Kindergarten Zipfelmütze',
			tagline: 'Kochdienst-Planung',
			brand: 'KiGa Zipfelmütze',
			navigation: {
				software: { label: 'Nutzung der Software', href: '/software/intro' },
				docs: { label: 'Mittagessen-Dienst', href: '/docs/intro' },
				dienstplan: {
					label: 'Dienstplan',
					subEntry: {
						monday: { label: 'Montag', href: '/dienstplan/monday' },
						tuesday: { label: 'Dienstag', href: '/dienstplan/tuesday' },
						wednesday: { label: 'Mittwoch', href: '/dienstplan/wednesday' },
						thursday: { label: 'Donnerstag', href: '/dienstplan/thursday' },
						friday: { label: 'Freitag', href: '/dienstplan/friday' },
						auswertung: { label: 'Statistik', href: '/dienstplan/auswertung' },
					},
				},
				kontakt: { label: 'Kontakte', href: '/docs/ansprechpartnerinnen' },
			},
			github: 'https://github.com/levino/community-scheduler-template',
		}),
		shipyardDocs({
			routeBasePath: 'docs',
			collectionName: 'docs',
			editUrl:
				'https://github.com/levino/community-scheduler-template/edit/main/src/content/docs',
			showLastUpdateTime: true,
			showLastUpdateAuthor: true,
		}),
		shipyardDocs({
			routeBasePath: 'software',
			collectionName: 'software',
			editUrl:
				'https://github.com/levino/community-scheduler-template/edit/main/src/content/software',
			showLastUpdateTime: true,
			showLastUpdateAuthor: true,
		}),
	],
})
