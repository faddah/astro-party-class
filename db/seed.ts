import { turso } from '../src/turso';

export default async function seed() {
	await turso.execute(`
		INSERT INTO Idea IF NOT EXISTS (id, text, good) values
		(1, 'Set up a dinner for friends', true),
	`);
	await turso.execute(`
		INSERT INTO Idea IF NOT EXISTS (id, text, good) values
		(2, 'Eat an entire block of cheese', false)
		`);
}

// import { db, Idea } from 'astro:db';

/* 
// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Idea).values([
		{ id: 1, text: 'Set up a dinner for friends', good: true, },
		{ id: 2, text: 'Eat an entire blocki of cheese', good: false, },
		]);
		}
		*/