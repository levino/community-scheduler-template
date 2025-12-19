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
			title: 'Community Scheduler',
			tagline: 'Open Source Template for Community Service Scheduling',
			brand: 'Community Scheduler',
			navigation: {
				docs: { label: 'Documentation', href: '/docs/intro' },
				dienstplan: {
					label: 'Schedule',
					subEntry: {
						monday: { label: 'Monday', href: '/dienstplan/monday' },
						tuesday: { label: 'Tuesday', href: '/dienstplan/tuesday' },
						wednesday: { label: 'Wednesday', href: '/dienstplan/wednesday' },
						thursday: { label: 'Thursday', href: '/dienstplan/thursday' },
						friday: { label: 'Friday', href: '/dienstplan/friday' },
						auswertung: { label: 'Statistics', href: '/dienstplan/auswertung' },
					},
				},
				kontakt: { label: 'Contacts', href: '/docs/ansprechpartnerinnen' },
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
