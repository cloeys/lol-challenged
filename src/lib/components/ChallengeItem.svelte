<script>
    import { fade } from "svelte/transition";

	export let challenge;
</script>

<div class="challenge-item" transition:fade={{ duration: 250 }}>
	<a data-sveltekit-noscroll href="/challenge/{challenge.id}">
		<div class="description">
			<h2>{challenge.localizedNames['en_GB'].name}</h2>
			<p>{@html challenge.localizedNames['en_GB'].shortDescription}</p>
		</div>
	</a>
</div>

<style>

	h2 {
		font-size: 0.9rem;
	}

	.description {
		height: 5vh;
	}

	p {
		font-size: 0.7rem;
	}
</style>
