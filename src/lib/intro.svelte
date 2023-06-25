<script lang="ts">
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import { fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { i } from '@inlang/sdk-js';

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
			label: i("intro.github")
		},
		{
			alt: 'LinkedIn logo',
			src: FaLinkedin,
			link: 'https://www.linkedin.com/in/vin%C3%ADcius-teixiera-vieira-dos-santos-6494201b6',
			label: i("intro.linkedin")
		},
		{
			alt: 'Twitter logo',
			src: FaTwitterSquare,
			link: 'https://twitter.com/vine_tvs',
			label: i("intro.twitter")
		}
	];

	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<div class="grid heading" in:fade>
		<div class="flex flex-row justify-center mt-2">
			<div class="flex flex-col mx-auto justify-center" id="intro">
				<h1 style=" line-height: 1.1111111;">{@html i('intro.hello')}</h1>
				<!-- <p> -->
				<div class="my-8 md:my-10">
					<h2
						style="font-size: 2rem;"
						in:fade={{
							delay: 1200,
							easing: backOut
						}}
					>
						{i('intro.sub_title1')}
					</h2>

					<p
						in:fade={{
							delay: 2400,
							easing: backOut
						}}
					>
						{i('intro.sub_title2')}
					</p>
				</div>
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
			<div
				class="hidden md:flex flex-col justify-start"
				style="margin-top: auto; margin-bottom: auto;"
			>
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

	@media (max-width: 700px) {
		.heading h1 {
			/* font-size: 4em; */
			font-size: 5rem;
			margin-bottom: 0px;
		}
		.heading {
			min-height: calc(100vh - 100px);
		}
	}
</style>
