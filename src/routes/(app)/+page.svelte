<script>
	import ChallengeList from '$lib/components/ChallengeList.svelte';
	import SearchChallenge from '$lib/components/SearchChallenge.svelte';
	import SearchPlayer from '$lib/components/SearchPlayer.svelte';

	export let data;
	let filter = '';

	let { challenges } = data;
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

<section>
	<div class="flex justify-between flex-wrap">
		<SearchChallenge on:search={filterChallenges} />
		<SearchPlayer />
	</div>
	<ChallengeList challenges={filteredChallenges} />
</section>
