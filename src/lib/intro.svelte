<script lang="ts">
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';

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
</script>

<div class="grid content-center heading">
	<div class="flex flex-row justify-center mt-2">
		<div class="flex flex-col justify-center mt-2 hidden md:invisible">
			{#each socials as social}
				<a href={social.link} aria-label={social.label} class="mx-2">
					<div class="icon">
						<svelte:component this={social.src} />
					</div>
				</a>
			{/each}
		</div>
		<div class="prose md:prose-lg mx-auto" id="intro">
			<h1>Olá, mundo. <br /> Eu sou o Vini.</h1>
			<p>
				Estudante de Ciência da Computação, sou desenvolvedor backend com um pouco de conhecimento
				em desenvolvimento mobile e páginas web.
			</p>
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
		background: linear-gradient(to bottom right, hsl(var(--s)), hsl(var(--p)));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 5em;
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
			margin-bottom: 0px;
		}
	}
</style>
