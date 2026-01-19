import { defineCollection, reference, z } from 'astro:content'
import { docsSchema } from '@levino/shipyard-docs'
import { file, glob } from 'astro/loaders'

// Schema für Dienstplan-Einträge
const dienstplanSchema = z.object({
	date: z.coerce.date(),
	parents: z.array(reference('eltern')), // Array of references to parent entries
})

// Schema für Eltern
const elternSchema = z
	.object({
		firstName: z.string(),
		lastName: z.string(),
		phone: z.string(),
		weekday: z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday']),
	})
	.transform((data) => ({
		...data,
		fullName: `${data.firstName} ${data.lastName}`,
	}))

// Content Collections definieren
export const collections = {
	dienstplan: defineCollection({
		loader: file('src/content/service.yaml'),
		schema: dienstplanSchema,
	}),
	eltern: defineCollection({
		loader: file('src/content/parent.yaml'),
		schema: elternSchema,
	}),
	docs: defineCollection({
		schema: docsSchema,
		loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
	}),
	software: defineCollection({
		schema: docsSchema,
		loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
	}),
}
