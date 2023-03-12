<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';


	interface Technology {
		link: string;
		img: string;
	}

	let tech_dict: { [id: string]: Technology } = {
		Svelte: {
			link: 'https://svelte.dev/',
			img: 'devicon-svelte-plain'
		},
		Tailwind: {
			link: 'https://tailwindcss.com/',
			img: 'devicon-tailwindcss-plain'
		},
		Go: {
			link: '',
			img: 'devicon-go-original-wordmark'
		},
		C: {
			link: '',
			img: 'devicon-c-plain'
		},
		Haskell: {
			link: '',
			img: 'devicon-haskell-plain'
		},
		Java: {
			link: '',
			img: 'devicon-java-plain'
		},
		Shell: {
			link: '',
			img: 'devicon-bash-plain'
		},
		Assembly: {
			link: '',
			img: 'devicon-aarch64-plain'
		},
		Python: {
			link: '',
			img: 'devicon-python-plain'
		}
	};

	interface Project {
		title: string;
		desc: string;
		tech: string[];
		link: string;
		api: string | null;
	}

	let projects: Project[] = [
		{
			title: 'Site',
			desc: 'O  <br> <br> \
				teste',
			link: 'https://github.com/ViniTVS/site',
			tech: ['Svelte', 'Tailwind'],
			api: null
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS',
			link: 'https://github.com/ViniTVS/codewars',
			tech: [],
			api: 'https://api.github.com/repos/ViniTVS/codewars/languages'
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS/trabalhos',
			link: 'https://github.com/ViniTVS',
			tech: [],
			api: 'https://api.github.com/repos/ViniTVS/trabalhos/languages'
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS',
			link: 'https://github.com/ViniTVS',
			tech: [],
			api: null
		}
	];

	onMount(() => {
		// projetos com o campo api preenchido significa que devem ser obtidas as
		// tecnologias utilizadas dinamicamente 
		for(let i = 0; i < projects.length; i++){
			if(projects[i].api){
				fetch(projects[i].api!, {
				headers: {
					'Accept': 'application/json'
				}})
				.then(response => response.json())
				.then(json => {
					// ordena linguagens mais usadas... https://stackoverflow.com/a/16794116
					let ling = Object.keys(json).sort(function(a,b){return json[b]-json[a]});
					projects[i].tech = ling.slice(0, 5); // limita em 5
				});
			}
		}
	});
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
								<a
									href={tech_dict[t].link}
									target="_blank"
									rel="noreferrer"
									class="icon-svg pr-2 tooltip"
									data-tip={t}
								>
									<i class="{tech_dict[t].img}"></i>
								</a>
							{:else}
								<div class="icon-svg pr-2 tooltip" data-tip={t}>
									<i class="{tech_dict[t].img}"></i>								  
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
	#projects {
		padding-top: 70px;
	}

	.project-showcase {
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
	}

	.icon-svg {
		margin: auto;
		-moz-transition: all 0.1s ease-in;
		-o-transition: all 0.1s ease-in;
		-webkit-transition: all 0.1s ease-in;
		transition: all 0.1s ease-in;
		
		font-size: 24px;
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
