import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['work', 'create', 'workflow']),
    label: z.string(),
    order: z.number().default(50),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    summary: z.array(z.string()).length(3),
    related: z.array(z.object({ href: z.string(), title: z.string(), why: z.string() })).min(2),
  }),
});

export const collections = { guides };
