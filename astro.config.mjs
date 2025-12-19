import tailwind from '@astrojs/tailwind'
import shipyard from '@levino/shipyard-base'
import shipyardDocs from '@levino/shipyard-docs'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://community-scheduler-template.example.com',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		shipyard({
			title: 'Kindergarten Zipfelmütze',
			tagline: 'Kochdienst-Planung',
			brand: 'KiGa Zipfelmütze',
			navigation: {
				docs: { label: 'Info', href: '/docs/intro' },
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
			editUrl:
				'https://github.com/levino/community-scheduler-template/edit/main/src/content/docs',
			showLastUpdateTime: true,
			showLastUpdateAuthor: true,
		}),
	],
})
