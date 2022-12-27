<script>
	export let leaderboard;
</script>

<div>
	<h2>Top Challengers</h2>
	<div class="leaderboard">
		{#each leaderboard as entry, i (entry.puuid)}
			<p>
				{entry.position})
				<a
					href="https://www.op.gg/summoners/euw/{entry.playerData.name}"
					target="_blank"
					rel="noopener noreferrer">{entry.playerData.name}</a
				>
				({entry.value})
			</p>
        {:else}
            No challengers recorded for this challenge!
		{/each}
	</div>
</div>

<style>
    a {
        font-weight: bold;
    }
</style>
