<script>
	import { enhance } from "$app/forms";
    import { supababaseClient } from "$lib/supabase"

    const submitLogout = async ({ cancel }) => {
        const { error } = await supababaseClient.auth.signOut();
        if (error) {
            console.log(error)
        }
        cancel();
    }
</script>

<nav>
    <a href="/">Challenged</a>
    <form action="/logout" method="POST" use:enhance={submitLogout}>
        <button type="submit">Logout</button>
    </form>
</nav>

<style>
    nav {
        display: flex;
        min-height: 10vh;
        align-items: center;
        justify-content: center;
    }

    a {
        font-size: 1rem;
        font-weight: bold;
        font-family: 'Poppins';
        color: black;
        text-decoration: none;
    }
</style>