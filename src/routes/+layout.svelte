<script>
	import { onMount } from "svelte";
    import { supabaseClient } from "$lib/supabase"
    import { invalidateAll } from "$app/navigation"
    import '../global.css'
    import Nav from "$lib/components/Nav.svelte";

    onMount(() => {
        const { data: { subscription }} = supabaseClient.auth.onAuthStateChange(() => {
            invalidateAll()
        })

        const theme = localStorage.getItem('theme');
        console.log(theme)
        const html = document.querySelector("html");

        html.dataset.theme = theme;

        return () => {
            subscription.unsubscribe();
        }
    })
</script>

<Nav />

<slot />