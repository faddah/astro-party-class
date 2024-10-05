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
				text: z.string(),
				good: z.coerce.boolean(),
			}),
			handler: async (input) => {
				await db.insert(Idea).values(input);

				return `Success! New ${input.good ? 'good' : 'bad'} idea added!`;
			},
		}),
	},
	handler: function (input: FormData): Promise<SafeResult<{ id: number; text: string; good: boolean; }, string>> {
		throw new Error("Function not implemented.");
	},
	queryString: "",
	orThrow: function (input: FormData): Promise<SafeResult<{ id: number; text: string; good: boolean; }, string>> {
		throw new Error("Function not implemented.");
	}
}