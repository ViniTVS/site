<script lang="ts">
	import Intro from '$lib/intro.svelte';

	let tech_ic: String[] = ['C++', 'Arduino'];
	let tech_trab: String[] = ['PHP', 'Vue.js', 'MySQL', 'Flutter'];
</script>

<Intro />

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 content-center" id="about">
	<div class="col md:col-span-2  c-prose">
		<h2>Sobre mim</h2>
		<p>
			Eu sou o Vinícius, um estudante de Ciência da Computação e estagiário trabalhando com PHP,
			MySQL e FLutter. Durante a graduação tive a oportunidade de aprender programação desde de C e
			C++ a Java e Python. Fazendo minha Iniciação Científica em robótica também passei a conhecer
			melhor sobre dispositivos IoT e especialmente Arduino.
			<br />
			Normalmente passo meu tempo lendo, jogando, ouvindo música e, como todo bom programador, criando
			algum novo projeto que nunca será finalizado.
		</p>
	</div>
	<div class="m-auto">finge que tem minha foto aqui kkkkkk</div>
</div>

<div class="grid mx-4 mb-10 c-prose" id="estudos">
	<div class=" teste">
		<h2>Formação</h2>
	</div>

	<div class="flex flex-row">
		<div class="mr-4 my-2 transition" />
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
					quanto sua base de transmissão de comandos.
				</div>
			</div>
		</div>
	</div>
</div>

<div class="grid mx-4 mb-10 c-prose" id="experience">
	<div class="" style="width: 100%;">
		<h2>Experiência</h2>
	</div>

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
	.icon {
		width: 30px;
		height: 30px;
		margin: auto;
	}
	#about {
		margin-top: 15vh;
		margin-bottom: 15vh;
	}

	#about h2 {
		color: hsl(var(--s));
	}

	#estudos h2 {
		font-size: 1.6666667em;
	}
	.teste {
		width: 100%;
	}
	.transition {
		background: linear-gradient(180deg, hsl(var(--p)) 60%, transparent 100%);
		/* margin: ; */
		height: inherit;
		min-width: 5px;
		width: 5px;
	}
	.transition-2 {
		background: linear-gradient(180deg, hsl(var(--s)) 60%, transparent 100%);
	}
	.transition-3 {
		background: linear-gradient(180deg, hsl(var(--a)) 60%, transparent 100%);
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
	/* .linha {
		background-color: white;
		background-color: currentColor;
		height: 2px;
	} */
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
