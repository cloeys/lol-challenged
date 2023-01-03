import { riotApiKey } from '$lib/server/secrets.js';

export const load = async ({ fetch }) => {
	const fetchChallenges = async () => {
		const resp = await fetch(
			`https://euw1.api.riotgames.com/lol/challenges/v1/challenges/config?api_key=${riotApiKey}`
		);

		const data = await resp.json();
		return data.filter((item) => item.state === 'ENABLED' && item.leaderboard && item.id > 0);
	};

	return {
		challenges: fetchChallenges()
	};
};
