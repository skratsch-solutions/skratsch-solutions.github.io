import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const nullableString = z.string().nullable().optional()

const legacyServiceSchema = z.object({
  attribution: nullableString,
  date: z.coerce.date().optional(),
  excerpt: z.string().optional(),
  'hero-class': z.string().optional(),
  image: z.string().optional(),
  layout: z.string().optional(),
  'parent-name': z.string().optional(),
  'parent-url': z.string().optional(),
  title: z.string(),
  weight: z.number().optional(),
}).passthrough()

const legacyTeamSchema = z.object({
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  jobtitle: z.string().optional(),
  linkedinurl: z.string().optional(),
  title: z.string(),
  weight: z.number().optional(),
}).passthrough()

const legacyMarkdownCollection = (base: string) => defineCollection({
  loader: glob({ pattern: '**/*.md', base }),
  schema: legacyServiceSchema,
})

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './_team' }),
  schema: legacyTeamSchema,
})

export const collections = {
  consulting: legacyMarkdownCollection('./_consulting'),
  dataServices: legacyMarkdownCollection('./_data-services'),
  itServices: legacyMarkdownCollection('./_it-services'),
  softwareDevelopment: legacyMarkdownCollection('./_software-development'),
  team,
}
