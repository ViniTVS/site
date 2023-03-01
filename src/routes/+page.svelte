<script lang="ts">
	import About from '$lib/about.svelte';
	import Intro from '$lib/intro.svelte';

	let tech_ic: String[] = ['C++', 'Arduino'];
	let tech_trab: String[] = ['PHP', 'Vue.js', 'MySQL', 'Flutter'];
</script>

<Intro />





<div class="grid mb-10 c-prose" style="margin-top: 10vh;">
	<h2>Sobre mim</h2>

	<div class="flex flex-row" style="height: 100vh;">
		<div class="mr-4 my-2 transition" />
		<div style="width: 100%;">
			<About/>
		</div>
	</div>

	<h2>Formação</h2>

	<div class="flex flex-row">
		<div class="mr-4 my-2 transition transition-2" />
		<div>
			<div class="flex flex-col sm:flex-row justify-between">
				<div><h3>Ciência da Computação</h3></div>
				<div><h3>2018 - Atualmente</h3></div>
			</div>
			<div>
				Estudante do sétimo período de Bacharelado em Ciência da Computação pela Universidade
				Federal do Paraná.
			</div>
			<div class="flex flex-row mt-5">
				<div class="mr-4 my-2 transition transition-2" />
				<div>
					<div
						class="flex flex-col sm:flex-row justify-between"
						style="font-size: 1.25rem; font-weight: 500;"
					>
						<div>Iniciação Científica</div>
						<div>Fev - Nov 2019</div>
					</div>
					<div class="flex flex-row justify-start">
						{#each tech_ic as tech}
							<div class="badge badge-primary mr-2">{tech}</div>
						{/each}
					</div>
					Com o objetivo de desenvolver um novo firmware para o robô de competição da equipe de robótica
					da UFPR, programei juntamente com colegas da matéria de Robótica da universidade tanto o robô
					quanto sua base de transmissão de comandos utilizando dispositivos Arduino, ambiente em Linux e programação em C/C++.

				</div>
			</div>
		</div>
	</div>
	<h2>Experiência</h2>

	<div class="flex flex-row">
		<div class="mr-4 my-2 transition transition-3" />
		<div style="width: 100%;">
			<div class="flex flex-col sm:flex-row justify-between">
				<div><h3>Spro IT Solutions - Estágio</h3></div>
				<div><h3>2021 - Atualmente</h3></div>
			</div>
			<div class="flex flex-row justify-start">
				{#each tech_trab as tech}
					<div class="badge badge-primary mr-2">{tech}</div>
				{/each}
			</div>
			<div>
				Desenvolvimento e manutenção de regras de negócio do sistema interno da empresa, em PHP. <br
				/>
				CRUD utilizando MySQL e Axios. <br />
				Frontend em HTML, CSS, Vue.js e jQuery. <br />
				Desenvolvimento híbrido mobile com Flutter. <br />
			</div>
		</div>
	</div>
</div>

<style>

	#experience h2 {
		padding-top: 15vh;
		font-size: 1.6666667em;
	}

	.transition {
		background: linear-gradient(180deg, white -50%, hsl(var(--p)) 20%, hsl(var(--p)) 80%, white 150%);
		/* margin: ; */
		height: inherit;
		min-width: 3px;
		width: 3px;
		/* box-shadow: 0px 0px 10px white; */
	}
	
	.transition-2 {
		background: linear-gradient(180deg, white -50%, hsl(var(--s)) 20%, hsl(var(--s)) 80%, white 150%);
	}

	.transition-3 {
		background: linear-gradient(180deg, white -50%, hsl(var(--a)) 20%, hsl(var(--a)) 80%, white 150%);
	}

	.c-prose h2 {
		font-size: 1.6666667em;
		line-height: 4/3;
		font-weight: 700;
	}
	.c-prose h3 {
		font-size: 1.25em;
		line-height: 1.6;
		font-weight: 600;
	}
	
	@media (min-width: 768px) {
		.c-prose {
			font-size: 1.125rem;
		}
		.c-prose h3 {
			font-size: 1.3333334em;
			line-height: 1.5;
		}
	}
</style>
