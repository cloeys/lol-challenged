<script>
	import ChallengeList from '$lib/components/ChallengeList.svelte';
	import SearchChallenge from '$lib/components/SearchChallenge.svelte';
	import { fly } from 'svelte/transition';
	import SearchPlayer from '$lib/components/SearchPlayer.svelte';

	export let data;
	let filter = '';

	$: challenges = data.challenges;
	$: filteredChallenges =
		filter && filter.trim() !== ''
			? challenges.filter((c) =>
					c.localizedNames['en_GB'].name.toLowerCase().includes(filter.toLowerCase())
			  )
			: challenges;

	const filterChallenges = (ev) => {
		filter = ev.detail;
	};
</script>

<section class="mx-20">
	<div class="flex justify-between">
		<SearchChallenge on:search={filterChallenges} />
		<SearchPlayer />
	</div>
	<ChallengeList challenges={filteredChallenges} />
</section>
