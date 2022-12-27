<script>
	export let thresholds;
	export let percentiles;

	const tiers = [
		'Challenger',
		'Grandmaster',
		'Master',
		'Diamond',
		'Platinum',
		'Gold',
		'Silver',
		'Bronze',
		'Iron'
	];
</script>

<div>
	<h2>Tresholds</h2>
	<div class="tresholds">
		{#each tiers as tier}
			<span class="treshold">{tier}: </span>
			<span
				>{thresholds[tier.toUpperCase()] ?? 0} ({(percentiles[tier.toUpperCase()] * 100).toFixed(
					2
				)}%)</span
			>
		{/each}
	</div>
</div>

<style>
	.tresholds {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1rem;
	}

	.treshold {
		font-weight: bold;
	}
</style>
