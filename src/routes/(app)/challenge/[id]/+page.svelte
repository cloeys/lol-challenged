<script>
	import Leaderboard from '$lib/components/Leaderboard.svelte';
	import Thresholds from '$lib/components/Thresholds.svelte';

	export let data;

	$: challenge = data.challenge;
	$: percentiles = data.percentiles;
	$: leaderboard = data.leaderboard;

	$: console.log(leaderboard);
</script>

<div class="challenge-details">
	<div class="txt-container">
		<h1>{challenge.localizedNames['en_GB'].name}</h1>
		<p class="overview">
			{challenge.localizedNames['en_GB'].description}
		</p>
		<div class="extra-info">
			<Leaderboard {leaderboard} />
			<Thresholds thresholds={challenge.thresholds} {percentiles} />
		</div>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}

	p {
		padding: 1rem 0rem;
	}

	.challenge-details {
		margin: 0rem 5%;
	}

	.extra-info {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
