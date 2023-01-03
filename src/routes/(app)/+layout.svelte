<script>
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { supabaseClient } from "$lib/supabase"
	import '../../global.css';
	import { invalidateAll } from '$app/navigation';

	onMount(() => {
		const { data: {subscription }} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll()
		});

		return () => {
			subscription.unsubscribe();
		}
	})
</script>

<svelte:head>
	<title>Challenged</title>
</svelte:head>

<Nav />

<slot />
