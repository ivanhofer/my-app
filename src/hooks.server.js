/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.url.pathname === '/custom') {
		// oops, this function call gets ignored
		event.cookies.set('custom', 'cookie')

		return new Response('<html><body><h1>Hello</h1></body></html>', {
			headers: {
				'Content-type': 'text/html'
			}
		})
	}

	event.cookies.set('hooks.js', 'cookie')

	const response = await resolve(event);

	if (event.url.pathname === '/test') {
		// this will throw an error
		event.cookies.set('test', 'cookie')
	}

	return response
}