import { fail, redirect } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

export const actions = {
    register: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        console.log(body)

        const { error: err } = await locals.sb.auth.signUp({
            email: body.email,
            password: body.password
        })

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid email or password'
                })
            }

            return fail(500, {
                error: 'Server error, please try again later.'
            })
        }

        throw redirect(303, "/")
    }
};