import { defineCollection, z } from "astro:content";

export const collections = {
	hollidays: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			image: z.object({
				src: z.string().url(),
				alt: z.string(),
				credit: z.string().optional(),
			}),
			date: z.date(),
			tags: z.array(z.string()),
		}),
	}),
};