<script>
	import ChallengeItem from "./ChallengeItem.svelte";

    export let challenges;
</script>

<h3>Challenges</h3>
<div class="challenges">
    {#each challenges as challenge (challenge.id)}
        <ChallengeItem {challenge} />
    {:else}
        <p>No results!</p>
    {/each}
</div>

<style>
    .challenges {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }

    h3 {
        padding: 1rem 0rem;
    }
</style>