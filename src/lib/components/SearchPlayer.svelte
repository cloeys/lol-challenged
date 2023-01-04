<script>
	import { goto } from '$app/navigation';

	let playerName = '';
	let active = false;

	const cancelInactive = () => {
		if (playerName.trim() === '') {
			active = false;
		} else {
			active = true;
		}
	};

	const searchPlayer = (ev) => {
		goto(`/player/${playerName}`);
	};
</script>

<div>
	<form class="relative my-4" on:submit|preventDefault={searchPlayer}>
		<div class="form-control">
			<div class="input-group">
				<input
					type="text"
					placeholder="Player..."
					class="input input-bordered"
					on:focus={() => (active = true)}
					on:blur={cancelInactive}
					bind:value={playerName}
				/>
				<button class="btn">Search</button>
			</div>
		</div>
	</form>
</div>
