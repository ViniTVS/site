<script lang="ts">
	import Intro from '$lib/intro.svelte';
</script>

<Intro />

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 content-center" id="about">
	<div class="col md:col-span-2 prose md:prose-lg">
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

<div class="grid mx-4 mb-10" id="estudos">
	<div class="prose md:prose-lg teste">
		<h2>Formação</h2>
	</div>

	<div class="flex flex-row">
		<div class="mr-4 my-2 transition" />
		<div>
			<div class="flex flex-col sm:flex-row justify-between">
				<div class="prose md:prose-lg"><h3>Ciência da Computação</h3></div>
				<div class="prose md:prose-lg"><h3>2018 - Atualmente</h3></div>
			</div>
			<div>
				Estudante do sétimo período de Bacharelado em Ciência da Computação pela Universidade
				Federal do Paraná.
			</div>
			<div class="flex flex-row mt-5">
				<div class="mr-4 my-2 transition transition-2" />
				<div class="">
					<div
						class="flex flex-col sm:flex-row justify-between"
						style="font-size: 1.25rem; font-weight: 500;"
					>
						<div>Iniciação Científica</div>
						<div>Fev - Nov 2019</div>
					</div>
					Com o objetivo de desenvolver um novo firmware para o robô de competição da equipe de robótica
					da UFPR, programei juntamente com colegas da matéria de Robótica da universidade tanto o robô
					quanto sua base de transmissão de comandos.
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#about {
		min-height: 100vh;
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
	/* .linha {
		background-color: white;
		background-color: currentColor;
		height: 2px;
	} */
	.transition-2 {
		background: linear-gradient(180deg, hsl(var(--s)) 60%, hsl(var(--b1) / 0.3) 100%);
	}
</style>
