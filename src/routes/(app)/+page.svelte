<script>
    import ChallengeList from "$lib/components/ChallengeList.svelte";
    import SearchChallenge from "$lib/components/SearchChallenge.svelte";
    import { fly } from "svelte/transition"; 
	import SearchPlayer from "$lib/components/SearchPlayer.svelte";

    export let data;
    let filter = '';

    $: challenges = data.challenges
    $: filteredChallenges = filter && filter.trim() !== "" ?
        challenges.filter((c) => c.localizedNames['en_GB'].name.toLowerCase().includes(filter.toLowerCase())) :
        challenges

    const filterChallenges = (ev) => {
        filter = ev.detail;
    }
</script>

<section transition:fly={{ y: 50 }}>
    <div class="controls">
        <SearchChallenge on:search={filterChallenges} />
        <SearchPlayer />
    </div>
    <div class="content">
        <ChallengeList challenges={filteredChallenges}/>
    </div>
</section>

<style>
    .controls {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>