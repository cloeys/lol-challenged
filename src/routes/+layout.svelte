<script>
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import { supabaseClient } from '$lib/supabase';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import '../global.css';

	export let data;

	$: console.log(data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});

	const submitLogout = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<div class="navbar bg-neutral text-neutral-content px-16">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">Challenged</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#if data.session}
				<li><span>{data.session.user.email}</span></li>
                <li>
                    <form action="/logout" method="POST" use:enhance={submitLogout}>
                        <button type="submit" class="btn btn-sm btn-primary">Logout</button>
                    </form>
                </li>
			{/if}
		</ul>
	</div>
</div>

<main class="mx-20 mt-4">
    <slot />
</main>

