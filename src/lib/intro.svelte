<script lang="ts">
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import { fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

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

	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<div class="grid content-center heading" in:fade>
		<div class="flex flex-row justify-center mt-2">
			<div class="prose md:prose-lg mx-auto" id="intro">
				<h1>Olá, mundo. <br/> Eu sou o Vini.</h1>
				<p>
					<span
						class="intro-txt"
						in:fade={{
							delay: 1200,
							easing: backOut
						}}
					>
						Estudante e desenvolvedor backend
					</span>
					<br />

					<span
						in:fade={{
							delay: 3000,
							easing: backOut
						}}
					>
						que se vira com frontend
					</span>
				</p>
				<!-- Adiciona links das redes sociais na parte inferior -->
				<div class="flex flex-row justify-center md:hidden">
					{#each socials as social}
						<a href={social.link} aria-label={social.label} class="mx-2">
							<div class="icon">
								<svelte:component this={social.src} />
							</div>
						</a>
					{/each}
				</div>
			</div>
			<!-- Adiciona links das redes sociais na lateral -->
			<div class="hidden md:flex flex-col justify-start">
				{#each socials as social}
					<a href={social.link} aria-label={social.label} class="mb-5">
						<div class="icon">
							<svelte:component this={social.src} />
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div style="height: 100vh;" />
{/if}

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
