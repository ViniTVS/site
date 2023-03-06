<script lang="ts">
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import SvelteIcon from '../icons/SvelteIcon.svelte';
	import GoLinkExternal from 'svelte-icons/go/GoLinkExternal.svelte';
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
	}

	let projects: Project[] = [
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS <br> \
				teste',
			tech: ['svelte', 'tailwind']
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS',
			tech: ['svelte', 'tailwind']
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS',
			tech: ['svelte', 'tailwind']
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS',
			tech: ['svelte', 'tailwind']
		}
	];

	let show = false;
	let max_show = 3;
	let w: number;
	const options = {};
	$: {
		max_show = w > 944 ? 3 : 2;
	}

</script>

<div class="grid heading" in:fade bind:clientWidth={w}>
	<h2>Projetos</h2>
	<div
		class="grid md:grid-cols-2 lg:grid-cols-3"
		use:inview={options}
		on:enter={(event) => {
			const { inView } = event.detail;
			show = inView;
		}}
	>
		<!-- {#if show} -->
			{#each projects as projeto, i}
				<div
					in:fade={{
						delay: 300 * i
					}}
					class="
						project-showcase bg-{(i % 5).toString()}
						mt-8 p-6 "
					style="width: 90%"
				>
					<!-- texto -->
					<div>
						<h3>{projeto.title}</h3>
						<p>{@html projeto.desc}</p>
					</div>
					<!-- ícones -->
					<div class="flex flex-row justify-between mt-4">
						<div class="flex flex-row justify-start">
							{#each projeto.tech as t}
								<div class="icon pr-2">
									<svelte:component this={tech_dict[t].img} />
								</div>
							{/each}
						</div>
						<div class="icon" style="margin: 0;">
							<GoLinkExternal />
						</div>
					</div>
				</div>
			{/each}
		<!-- {:else}
			{#each projects as projeto, i}
				<div class="project-showcase mt-8 p-6 invisible">
					<h3>{projeto.title}</h3>
					<p>{projeto.desc}</p>
					{#each projeto.tech as t}
						<div class="icon">
							<svelte:component this={tech_dict[t].img} />
						</div>
					{/each}
				</div>
			{/each}
		{/if} -->
	</div>
</div>

<style>
	.project-showcase {
		/* height: 400px;
		max-height: 40vh; */
		border-radius: 12px;

		display: flex;
  flex-direction: column;
  justify-content: space-between;
	}

	.icon {
		/* width: 30px; */
		height: 20px;
		margin: auto;
	}
</style>
