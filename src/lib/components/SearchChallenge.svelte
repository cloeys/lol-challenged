<script>
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let search = '';
	let active = false;

	const cancelInactive = () => {
		if (search.trim() === '') {
			active = false;
		} else {
			active = true;
		}
	};

	const searchChallenge = (ev) => {
		dispatch('search', ev.target.value)
	};
</script>

<div class="search">
	{#if !active}
		<label transition:fly={{ y: -10, duration: 300 }} for="search">Filter Challenges</label>
	{/if}
	<input
		class:selected={active}
		on:input={searchChallenge}
		on:focus={() => (active = true)}
		on:blur={cancelInactive}
		name="search"
		type="text"
		bind:value={search}
	/>
</div>

<style>
	.search {
		position: relative;
		margin: 1rem 0rem;
	}

	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: rgb(255, 255, 255);
		padding: 0.5rem 1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-radius: 10px;
	}

	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #fff;
		padding: 0rem 1rem;
	}

	input.selected {
		background: rgb(50, 50, 50);
	}
</style>
