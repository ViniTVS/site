<script lang="ts">
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let socials: {
		alt: string;
		src: ConstructorOfATypedSvelteComponent;
		link: string;
		label: string;
	}[] = [
		{
			alt: 'Github logo',
			src: FaGithubSquare,
			link: 'https://github.com/ViniTVS',
			label: 'Visite meu perfil do Github'
		},
		{
			alt: 'LinkedIn logo',
			src: FaLinkedin,
			link: 'https://www.linkedin.com/in/vin%C3%ADcius-teixiera-vieira-dos-santos-6494201b6',
			label: 'Visite meu perfil do LinkedIn'
		},
		{
			alt: 'Twitter logo',
			src: FaTwitterSquare,
			link: 'https://twitter.com/vine_tvs',
			label: 'Visite meu perfil do Twitter'
		}
	];

	let v_testes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

	let show = false;
	const options = {};
</script>

<div class="grid content-center heading" in:fade>
	<h2>Teste</h2>
	<div
		use:inview={options}
		on:enter={(event) => {
			const { inView } = event.detail;
			show = inView;
		}}
	>
		{#if show}
			{#each v_testes as teste, i}
				<span in:fade={{
                    delay: 300 * i
                }}> {teste} </span>
			{/each}
		{/if}
	</div>
</div>

<style>
	.heading {
		min-height: calc(100vh - 64px);
		/* margin-left: 20px;
        margin-right: 20px; */
	}

	.heading #intro {
		text-align: center;
	}

	.heading h1 {
		background: linear-gradient(to bottom right, hsl(var(--p)), hsl(var(--s)));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 6rem;
		font-weight: 500;
	}

	.icon {
		width: 40px;
		height: 40px;
		margin: auto;
	}

	.intro-txt {
		font-size: 2rem;
		font-weight: 600;
	}

	@media (max-width: 700px) {
		.heading h1 {
			/* font-size: 4em; */
			font-size: 5rem;
			margin-bottom: 0px;
		}
	}
</style>
