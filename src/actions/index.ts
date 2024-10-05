import { defineAction, type SafeResult } from "astro:actions";
import { db, eq, Idea } from "astro:db";
import { z } from "astro:content";


interface IdeaInput {
	id: number;
	text: string;
	good: boolean;
}

interface Server {
	ideas: {
		save: ReturnType<typeof defineAction>;
		delete: ReturnType<typeof defineAction>;
	};
	handler: (input: FormData) => Promise<SafeResult<{ id: number; text: string; good: boolean; }, string>>;
	queryString: string;
	orThrow: (input: FormData) => Promise<SafeResult<{ id: number; text: string; good: boolean; }, string>>;
}

export const server: Server = {
	ideas: {
		save: defineAction({
			accept: "form",
			input: z.object({
				text: z.string().optional(),
				good: z.coerce.boolean(),
			}),
			handler: async (input) => {
				if (!input.text) {
					throw new Error("Please provide a text for the idea");
				} else if (input.good === undefined || input.good === null) {
					throw new Error("Please choose the Radio Button for if this is a Good or Bad Idea.");
				} else if (input.text.length < 3) {
					throw new Error("Please provide a longer text for the idea");
				}

				await db.insert(Idea).values(input as { text: string; good: boolean });

				return `Success! New ${input.good ? 'good' : 'bad'} idea added!`;
			},
		}),
		delete: defineAction({
			accept: "form",
			input: z.object({
				id: z.number(),
			}),
			handler: async (input) => {
				await db.delete(Idea).where(eq(Idea.id, input.id));
				return `Success! Idea ${input.id} deleted!`;
			},
		}),
	},
	handler: function (input: FormData): Promise<SafeResult<{ id: number; text: string; good: boolean; }, string>> {
		throw new Error("Function not implemented.");
	},
	queryString: "",
	orThrow: function (input: FormData): Promise<SafeResult<{ id: number; text: string; good: boolean; }, string>> {
		throw new Error("Function not implemented.");
	},
}