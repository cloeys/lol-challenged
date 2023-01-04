import '$lib/supabase';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);

	event.locals.sb = supabaseClient;
	event.locals.session = session;

	if (event.url.pathname.includes('login') || event.url.pathname.includes('/register')) {
		if (event.locals.session) {
			throw redirect(303, '/');
		}
	} else {
		if (!event.locals.session) {
			throw redirect(303, '/login');
		}
	}

    const response = await resolve(event);

	return response;
};
