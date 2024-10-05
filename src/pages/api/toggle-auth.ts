import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = ({ cookies, redirect }) => {
	// get current status of th cookie for login
	const isLoggedIn = cookies.get('logged-in');

	// toggle it to true/false
	const newState = !isLoggedIn;

	// update the cookie
	cookies.set('logged-in', String(newState), { path: '/' });

	// redirect to the ideas page
	return redirect('/ideas', 302);
}