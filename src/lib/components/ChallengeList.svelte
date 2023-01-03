<script>
	import ChallengeItem from "./ChallengeItem.svelte";

    export let challenges;
</script>

<h3 class="text-3xl font-bold py-4">Challenges</h3>
<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12">
    {#each challenges as challenge (challenge.id)}
        <ChallengeItem {challenge} />
    {:else}
        <p class="font-bold">No results!</p>
    {/each}
</div>