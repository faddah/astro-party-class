import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	console.log("Hello from the middleware! - Middleware executed.");

	const loggedIn = context.cookies.get('logged-in')?.boolean();
	console.log("Logged in status:", loggedIn);

	if (context.url.pathname === '/ideas' && !loggedIn) {
		return context.redirect('/login');
	}

	if (context.url.pathname === '/login' && loggedIn) {
		return context.redirect('/ideas');
	}

	return next();
});