<script>
	export let data;

	$: player = data.player;
	$: challengeData = data.challengeData;
	$: console.log(player);
	$: console.log(challengeData);
</script>

{#if player}
	<h1>
		<img
			src="http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/{player.profileIconId}.png"
			alt="{player.name} profile icon"
		/>{player.name}
	</h1>

	<div class="player" />
{:else}
	<p>Player not found!</p>
{/if}

<style>
</style>
