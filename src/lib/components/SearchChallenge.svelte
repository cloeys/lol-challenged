<script>
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

<div class="relative my-4">
	<input
		placeholder="Filter Challenges..."
		class="input input-bordered"
		on:input={searchChallenge}
		on:focus={() => (active = true)}
		on:blur={cancelInactive}
		name="search"
		type="text"
		bind:value={search}
	/>
</div>

<style>
</style>
