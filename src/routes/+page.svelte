<script lang="ts">
	import About from '$lib/about.svelte';
	import Intro from '$lib/intro.svelte';
	import Projects from '$lib/projects.svelte';

	let tech_ic: String[] = ['C++', 'Arduino'];
	let tech_trab: String[] = ['PHP', 'Vue.js', 'MySQL', 'Flutter'];
</script>

<Intro />

<About />

<div id="experience">
	<h2>Experiência e formação</h2>
	<div class="md:px-10 xl:px-20">
		<div class="grid grid-cols-3 md:grid-cols-2 mt-5">
			<span>2018 - Atualmente</span>
			<div class="col-span-2 md:col-span-1">
				<h3>Ciência da Computação</h3>
				<p>
					Estudante de Bacharelado em Ciência da Computação pela Universidade
					Federal do Paraná.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-3 md:grid-cols-2 mt-5">
			<span>2019</span>
			<div class="col-span-2 md:col-span-1">
				<h3>Iniciação Científica</h3>
				<p>
					Com o objetivo de desenvolver um novo firmware para o robô de competição da equipe de
					robótica da UFPR, programei juntamente com colegas da matéria de Robótica da universidade
					tanto o robô quanto sua base de transmissão de comandos utilizando dispositivos Arduino,
					ambiente em Linux e programação em C/C++.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-3 md:grid-cols-2 mt-5">
			<span>2021 - 2023</span>
			<div class="col-span-2 md:col-span-1">
				<h3>Spro IT Solutions - Estágio</h3>
				<p>
					Desenvolvimento e manutenção de regras de negócio do sistema interno da empresa, em PHP. <br
					/>
					CRUD utilizando MySQL e Axios. <br />
					Frontend em HTML, CSS, Vue.js e jQuery. <br />
					Desenvolvimento híbrido mobile com Flutter. <br />
				</p>
			</div>
		</div>
		<div class="grid grid-cols-3 md:grid-cols-2 mt-5">
			<span>2023 - Atualmente</span>
			<div class="col-span-2 md:col-span-1">
				<h3>Spro IT Solutions - Desenvolvedor Júnior</h3>
				<h4>Em adição à função anterior:</h4>
				<p>
					Gerenciamento de Banco de Dados. <br />
					Criação de relatórios internos utilizando Python e API requests. <br />
				</p>
			</div>
		</div>
	</div>
</div>

<Projects />

<style>
	#experience {
		padding-top: 90px;
	}
	#experience span {
		padding-top: 0.33rem;
	}
</style>
