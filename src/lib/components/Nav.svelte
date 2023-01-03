<script>
	import { enhance } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import { themeChange } from 'theme-change';
	import Fa from 'svelte-fa';
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';

	let toggleButton;

	onMount(() => {
		const currentTheme = localStorage.getItem('theme');
		console.log(toggleButton);
		if (currentTheme === 'dark') {
			toggleButton.checked = false;
		} else {
			toggleButton.checked = true;
		}
	});

	const submitLogout = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};

	const toggleTheme = () => {
		const html = document.querySelector('html');
		let newTheme;
		if (html.dataset.theme === 'dark') {
			newTheme = 'light';
		} else {
			newTheme = 'dark';
		}

		localStorage.setItem('theme', newTheme);
		html.dataset.theme = newTheme;
	};
</script>

<nav class="flex justify-between items-center mx-20 my-4">
	<a href="/" class="text-black font-bold text-4xl">Challenged</a>
	<div class="flex items-center gap-4">
		<div class="input-group gap-1 items-center">
			<Fa icon={faMoon} />
			<input bind:this={toggleButton} type="checkbox" class="toggle" on:change={toggleTheme} />
			<Fa icon={faSun} />
		</div>
		<form action="/logout" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="btn btn-sm">Logout</button>
		</form>
	</div>
</nav>
