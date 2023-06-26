<script lang="ts">
	import { onMount } from 'svelte';
	import { i } from '@inlang/sdk-js';

	interface Technology {
		link: string;
		img: string;
	}
	// Dicionário contendo as tecnologias utilizadas e o nome de seus ícones
	// no https://devicon.dev/
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
		Rust: {
			link: '',
			img: 'devicon-rust-plain'
		},
		C: {
			link: '',
			img: 'devicon-c-plain'
		},
		'C++': {
			link: '',
			img: 'devicon-cplusplus-plain'
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
		Bash: {
			link: '',
			img: 'devicon-bash-plain'
		},
		Python: {
			link: '',
			img: 'devicon-python-plain'
		},
		TypeScript: {
			link: '',
			img: 'devicon-typescript-plain'
		},
		JavaScript: {
			link: '',
			img: 'devicon-javascript-plain'
		},
		Devicon: {
			link: 'https://devicon.dev/',
			img: 'devicon-devicon-plain'
		},
		Ruby: {
			link: '',
			img: 'devicon-ruby-plain'
		}
	};

	interface Project {
		title: string;
		desc: string;
		tech: string[];
		link: string;
		api: string;
	}

	let projects: Project[] = [];

	for (let x = 0; ; x++) {
		if (i('projects.' + x + '.title') == '') break;

		let t = [];
		for (let y = 0; ; y++) {
			let l = i('projects.' + x + '.tech.' + y);
			if (l == '') break;
			t.push(l);
		}
		let p: Project = {
			title: i('projects.' + x + '.title'),
			desc: i('projects.' + x + '.desc'),
			tech: t,
			link: i('projects.' + x + '.link'),
			api: i('projects.' + x + '.api')
		};
		projects = [...projects, p];
	}

	onMount(() => {
		// projetos com o campo api preenchido significa que devem ser obtidas as
		// tecnologias utilizadas dinamicamente
		for (let j = 0; j < projects.length; j++) {
			if (projects[j].api != '') {
				fetch(projects[j].api, {
					headers: {
						Accept: 'application/json'
					}
				})
					.then((response) => response.json())
					.then((json) => {
						// ordena linguagens mais usadas... https://stackoverflow.com/a/16794116
						let ling = Object.keys(json).sort(function (a, b) {
							return json[b] - json[a];
						});
						projects[j].tech = ling.slice(0, 5); // limita em 5
					});
			}
		}
		projects = projects;
	});
</script>

<div class="grid heading" id="projects">
	<h2>Projetos</h2>
	<div class="flex flex-row justify-between flex-wrap">
		{#each projects as projeto, index}
			<a
				href={projeto.link}
				target="_blank"
				rel="noreferrer"
				class="project-showcase bg-{(index % 5).toString()}
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
							{#if tech_dict[t]}
								{#if tech_dict[t].link != ''}
									<a
										href={tech_dict[t].link}
										target="_blank"
										rel="noreferrer"
										class="icon-svg pr-2 tooltip"
										data-tip={t}
									>
										<i class={tech_dict[t].img} />
									</a>
								{:else}
									<div class="icon-svg pr-2 tooltip" data-tip={t}>
										<i class={tech_dict[t].img} />
									</div>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
			</a>
		{/each}

		<div class="project-showcase mt-8 p-6 pt-3 grow">
			<div class="flex flex-row">
				<div class="mr-4 my-2 transition transition-2" />
				<h2>
					<blockquote>
						Do what you think is interesting, do something that you think is fun and worthwhile,
						because otherwise you won't do it well anyway.
					</blockquote>
				</h2>
			</div>
			<span>Brian W. Kernighan</span>
		</div>
	</div>
</div>

<style>
	#projects {
		padding-top: 90px;
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
	.transition {
		background: linear-gradient(
			180deg,
			white -50%,
			hsl(var(--p)) 20%,
			hsl(var(--p)) 80%,
			white 150%
		);
		height: inherit;
		min-width: 4px;
		width: 4px;
	}

	.transition-2 {
		background: linear-gradient(
			180deg,
			white -50%,
			hsl(var(--s)) 20%,
			hsl(var(--s)) 80%,
			white 150%
		);
	}

	.transition-3 {
		background: linear-gradient(
			180deg,
			white -50%,
			hsl(var(--a)) 20%,
			hsl(var(--a)) 80%,
			white 150%
		);
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
