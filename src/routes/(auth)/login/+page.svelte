<script>
    import { supabaseClient } from "$lib/supabase";
    import { enhance } from "$app/forms";
    import Fa from 'svelte-fa';
    import { faFacebook, faGoogle, faDiscord } from '@fortawesome/free-brands-svg-icons'

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

<h1 class="text-2xl font-medium">Login</h1>
<form action="?/login" method="POST">
    <div class="form-control">
        <label class="label" for="email">
            <span class="label-text">E-mail</span>
        </label>
        <input name="email" class="input input-bordered" />
    </div>
    <div class="form-control">
        <label class="label" for="password">
            <span class="label-text">Password</span>
        </label>
        <input name="pasword" type="password" class="input input-bordered" />
    </div>
    <button type="submit" class="btn btn-primary my-2">Login</button>
</form>
<p><a href="/register">No account yet? Register <span class="font-bold">here</span>!</a></p>
<p>Or use one of the supported social providers:</p>
<form method="POST" use:enhance={submitSocialLogin}>
    <button formaction="?/login&provider=discord" class="btn gap-2 bg-[#5865F2] text-white">
        <Fa icon={faDiscord} />
        Discord
    </button>
    <button formaction="?/login&provider=facebook" class="btn gap-2 bg-[#4267B2] text-white">
        <Fa icon={faFacebook} />
        Facebook
    </button>
    <button formaction="?/login&provider=google" class="btn gap-2 bg-[#DB4437] text-white">
        <Fa icon={faGoogle} />
        Google
    </button>
</form>

