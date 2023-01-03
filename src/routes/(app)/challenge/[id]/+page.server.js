import { riotApiKey } from '$lib/server/secrets';

export const load = async ({ fetch, params }) => {
	const fetchChallenges = async () => {
		const challenge = await fetch(
			`https://euw1.api.riotgames.com/lol/challenges/v1/challenges/${params.id}/config?api_key=${riotApiKey}`
		);

		return challenge.json();
	};

	const fetchPercentiles = async () => {
		const percentiles = await fetch(
			`https://euw1.api.riotgames.com/lol/challenges/v1/challenges/${params.id}/percentiles?api_key=${riotApiKey}`
		);

		return percentiles.json();
	};

	const leaderboard = await fetch(
		`https://euw1.api.riotgames.com/lol/challenges/v1/challenges/${params.id}/leaderboards/by-level/CHALLENGER?api_key=${riotApiKey}`
	);

	let leaderboardData = await leaderboard.json();

	leaderboardData = leaderboardData.filter((x) => x.position <= 10);
	const leaderboardReturn = [];

	for (const l of leaderboardData) {
		const player = await fetch(
			`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${l.puuid}?api_key=${riotApiKey}`
		);
		const playerData = await player.json();

		if (player.ok) leaderboardReturn.push({ ...l, playerData });
	}

	return {
		challenge: fetchChallenges(),
		percentiles: fetchPercentiles(),
		leaderboard: leaderboardReturn
	};
};
