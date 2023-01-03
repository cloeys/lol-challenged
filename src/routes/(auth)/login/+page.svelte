<script>
    import { supabaseClient } from "$lib/supabase";
    import { enhance } from "$app/forms";

    const signInWithProvider = async (provider) => {
        const { data, error } = await supabaseClient.auth.signInWithOAuth({
            provider
        });
    }

    const submitSocialLogin = async ({ action, cancel }) => {
        switch(action.searchParams.get('provider')) {
            case 'google':
                await signInWithProvider('google');
                break;
            case 'facebook':
                await signInWithProvider('facebook');
                break;
            case 'discord':
                await signInWithProvider('discord');
                break;
        }
        cancel()
    }
</script>

<h1>Login</h1>
<form action="?/login" method="POST">
    <label>
        E-mail
        <input name="email" />
    </label>
    <label>
        Password
        <input type="password" name="password" />
    </label>
    <button type="submit">Login</button>
</form>
<p><a href="/register">No account yet? Register here!</a></p>
<p>Or use one of the supported social providers:</p>
<form method="POST" use:enhance={submitSocialLogin}>
    <button formaction="?/login&provider=facebook">Facebook</button>
    <button formaction="?/login&provider=discord">Discord</button>
    <button formaction="?/login&provider=google">Google</button>
</form>

