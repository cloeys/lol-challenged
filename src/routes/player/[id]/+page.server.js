import { riotApiKey } from "../../../lib/server/secrets";

export const load = (async ({ fetch, params }) => {
    const player = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${params.id}?api_key=${riotApiKey}`);
    const playerData = await player.json();

    const challenges = await fetch(`https://euw1.api.riotgames.com/lol/challenges/v1/player-data/${playerData.puuid}?api_key=${riotApiKey}`);
    const challengeData = await challenges.json();

    if (player.ok && challenges.ok) {
        return {
            player: playerData,
            challengeData
        }
    }
})