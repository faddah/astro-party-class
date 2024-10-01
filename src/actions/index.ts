import { defineAction } from "astro:actions";
import { db, Idea } from "astro:db";
import { z } from "astro:content";


interface IdeaInput {
	id: number;
	text: string;
	good: boolean;
}

interface Server {
	ideas: {
		save: ReturnType<typeof defineAction>;
	};
	handler: (input: IdeaInput) => Promise<string>;
}

export const server: Server = {
	ideas: {
		save: defineAction({
			accept: "form",
			input: z.object({
				id: z.number(),
				text: z.string(),
				good: z.coerce.boolean(),
			}),
			handler: async (input) => {
				await db.insert(Idea).values([input]);

				return `Success! New ${input.good ? 'good' : 'bad'} idea added!`;
			},
		}),
	},
}