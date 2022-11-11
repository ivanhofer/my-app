/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	cookies.set('+page.server.js', 'cookie')
 }