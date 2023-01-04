<script>
    import { fade } from "svelte/transition";

	export let challenge;
</script>

<div class="challenge-item" transition:fade={{ duration: 250 }}>
	<a data-sveltekit-noscroll href="/challenge/{challenge.id}">
		<div class="min-h-min">
			<h2 class="text-sm">{challenge.localizedNames['en_GB'].name}</h2>
			<p class="text-xs">{@html challenge.localizedNames['en_GB'].shortDescription}</p>
		</div>
	</a>
</div>