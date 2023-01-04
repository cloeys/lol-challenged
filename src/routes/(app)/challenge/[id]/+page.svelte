<script>
	import Leaderboard from '$lib/components/Leaderboard.svelte';
	import Thresholds from '$lib/components/Thresholds.svelte';

	export let data;
	let { challenge, percentiles, leaderboard } = data 

	$: console.log(leaderboard);
</script>

<div>
	<div class="card w-full bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">{challenge.localizedNames['en_GB'].name}</h2>
			<p>{challenge.localizedNames['en_GB'].description}</p>
		</div>
	</div>
	<div class="flex justify-between flex-wrap mt-8 gap-2">
		<Leaderboard {leaderboard} />
		<Thresholds thresholds={challenge.thresholds} {percentiles} />
	</div>
</div>
