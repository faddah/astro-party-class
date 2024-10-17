// import { defaultOptions } from './../node_modules/acorn/dist/acorn.d';
import { turso } from '../src/turso';
// import { column, defineDb, defineTable } from 'astro:db';

/* 
// https://astro.build/db/config
export default defineDb({
	tables: {
		Idea: defineTable({
			columns: {
				id: column.number({ primaryKey: true }),
				text: column.text(),
				good: column.boolean(),
			},
		}),
	}
});
 */

// Write and exported turso.execute() function that deinfes a new table called Idea with the three following columns: id, text, and good. The id column should be a primary key, and the text column should be a text column. The good column should be a boolean column.
export async function createIdeaTable() {
	await turso.execute(`
		CREATE TABLE IF NOT EXISTS Idea (
			id integer primary key,
			text varchar(256) not null,
			good BOOLEAN default true,
		)
	`);
	await turso.execute(`
		create unique index idx_idea_id on Idea(id);
	`);
}

