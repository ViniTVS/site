<script lang="ts">
	import SvelteIcon from '../icons/SvelteIcon.svelte';
	import TailwindIcon from '../icons/TailwindIcon.svelte';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	interface Technology {
		link: string;
		img: ConstructorOfATypedSvelteComponent;
	}

	let tech_dict: { [id: string]: Technology } = {
		svelte: {
			link: 'https://svelte.dev/',
			img: SvelteIcon
		},
		tailwind: {
			link: 'https://tailwindcss.com/',
			img: TailwindIcon
		}
	};

	interface Project {
		title: string;
		desc: string;
		tech: string[];
		link: string;
	}

	let projects: Project[] = [
		{
			title: 'Site',
			desc: 'O  <br> <br> \
				teste',
			link: 'https://github.com/ViniTVS/site',
			tech: ['svelte', 'tailwind']
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS',
			link: 'https://github.com/ViniTVS',
			tech: ['svelte', 'tailwind']
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS',
			link: 'https://github.com/ViniTVS',
			tech: ['svelte', 'tailwind']
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS',
			link: 'https://github.com/ViniTVS',
			tech: ['svelte', 'tailwind']
		}
	];
</script>

<div class="grid heading" id="projects" style="padding-top: 68px;">
	<h2>Projetos</h2>
	<div class="flex flex-row justify-between flex-wrap">
		{#each projects as projeto, i}
			<a
				href={projeto.link}
				target="_blank"
				rel="noreferrer"
				class="project-showcase bg-{(i % 5).toString()}
						mt-8 p-6"
			>
				<!-- texto -->
				<div>
					<h3>{projeto.title}</h3>
					<p>{@html projeto.desc}</p>
				</div>
				<!-- ícones -->
				<div class="flex mt-4">
					<div class="flex flex-row justify-start">
						{#each projeto.tech as t}
							{#if tech_dict[t].link != ''}
								<a href={tech_dict[t].link} target="_blank" rel="noreferrer" class="icon pr-2">
									<svelte:component this={tech_dict[t].img} />
								</a>
							{:else}
								<div class="icon pr-2">
									<svelte:component this={tech_dict[t].img} />
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.project-showcase {
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
	}

	.icon {
		height: 20px;
		margin: auto;
	}

	.icon:hover {
		color: hsl(var(--nf));
	}

	@media (min-width: 600px) {
		.project-showcase {
			width: 48%;
		}
	}

	@media (min-width: 1024px) {
		.project-showcase {
			width: 31%;
		}
	}
</style>
