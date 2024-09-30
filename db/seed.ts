import { db, Idea } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Idea).values([
		{ id: 1, text: 'Set up a dinner for friends', good: true, created_at: new Date() },
		{ id: 2, text: 'Eat an entire blocki of cheese', good: false, created_at: new Date() },
	]);
}
