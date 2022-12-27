<script>
	import { fly } from 'svelte/transition';
    import { goto } from '$app/navigation'

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
		goto(`/player/${playerName}`)
	};
</script>

<div>
    <form class="search" on:submit|preventDefault={searchPlayer}>
        {#if !active}
            <label transition:fly={{ y: -10, duration: 300 }} for="search">Search Player</label>
        {/if}
        <input
            class:selected={active}
            on:focus={() => (active = true)}
            on:blur={cancelInactive}
            name="search"
            type="text"
            bind:value={playerName}
        />
        <button type="submit">Search</button>
    </form>
</div>


<style>
	.search {
		position: relative;
		margin: 1rem 0rem;
	}

	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: rgb(255, 255, 255);
		padding: 0.5rem 1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
	}

	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #fff;
		padding: 0rem 1rem;
	}

	input.selected {
		background: rgb(50, 50, 50);
	}

    button {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 0.7rem;
        padding: 0rem 1rem;
        background: rgb(96, 110, 201);
        color: white;
        font-weight: bold;
        border: none;
        position: absolute;
        bottom: 50%;
        height: 100%;
        cursor: pointer;
        transform: translate(0, 50%);
    }
</style>
