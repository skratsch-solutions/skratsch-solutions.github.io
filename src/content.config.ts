import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const nullableString = z.string().nullable().optional()

const legacyServiceSchema = z.looseObject({
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
})

const legacyTeamSchema = z.looseObject({
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  jobtitle: z.string().optional(),
  linkedinurl: z.string().optional(),
  title: z.string(),
  weight: z.number().optional(),
})

const legacyPageSchema = z.looseObject({
  attribution: nullableString,
  bodyClass: z.string().optional(),
  date: z.coerce.date().optional(),
  description: z.string().optional(),
  excerpt: nullableString,
  'hero-class': z.string().optional(),
  image: z.string().optional(),
  intro_image_absolute: z.boolean().optional(),
  intro_image_hide_on_mobile: z.boolean().optional(),
  layout: z.string().optional(),
  permalink: z.string().optional(),
  show_contact_info: z.boolean().optional(),
  title: z.string(),
})

const legacyMarkdownCollection = (base: string) => defineCollection({
  loader: glob({ pattern: '**/*.md', base }),
  schema: legacyServiceSchema,
})

const legacyPages = defineCollection({
  loader: glob({
    pattern: [
      'about.md',
      'consultation.md',
      'contact.md',
      'cookie-policy.md',
      'faq.md',
      'privacy-policy.md',
      'team.md',
      'terms-conditions.md',
    ],
    base: '.',
  }),
  schema: legacyPageSchema,
})

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './_team' }),
  schema: legacyTeamSchema,
})

export const collections = {
  consulting: legacyMarkdownCollection('./_consulting'),
  dataServices: legacyMarkdownCollection('./_data-services'),
  itServices: legacyMarkdownCollection('./_it-services'),
  legacyPages,
  softwareDevelopment: legacyMarkdownCollection('./_software-development'),
  team,
}
