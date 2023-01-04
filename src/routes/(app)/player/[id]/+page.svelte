<script>
	export let data;

	let { player, challengeData } = data;

	$: console.log(player);
	$: console.log(challengeData);
</script>

{#if player}
	<div class="card md:card-side bg-base-900 shadow-xl">
		<figure>
			<img
				src="http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/{player.profileIconId}.png"
				alt="{player.name} profile icon"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">
				<a
					href="https://www.op.gg/summoners/euw/{player.name}"
					target="_blank"
					rel="noopener noreferrer">{player.name} <span class="badge">{player.summonerLevel}</span></a
				>
			</h2>
			<p>Total Challenge level: {challengeData.totalPoints.level}</p>
			<p>{challengeData.totalPoints.current} out of {challengeData.totalPoints.max} points</p>
			<p>{(challengeData.totalPoints.percentile * 100).toFixed(2)}% percentile</p>
		</div>
	</div>
{:else}
	<p>Player not found!</p>
{/if}
