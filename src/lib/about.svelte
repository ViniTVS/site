<div class=" mt-20 md:mt-0 md:content-center" id="about">
<h2>Sobre mim</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4" style="height: 100%;">
	<div class="col md:col-span-2 c-prose" style="height: fit-content;">
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
	<div class="col content-center" >
		<img alt="Headshot" src="eu.png" id="eu" />
	</div>
</div>
</div>
<style>
	#about {
		padding-top: auto;
		padding-bottom: auto;
		height: 100vh;
		max-height: 800px;
	}

	#eu {
		width: 100%;
		height: auto;
		max-width: 200px;
		border-radius: 8px;
		margin: auto;
	}

	#about h2 {
		font-size: 1.6666667em;
		line-height: 4/3;
		font-weight: 700;
	}
	
	@media (min-width: 768px) {
		.c-prose {
			font-size: 1.125rem;
		}
		#about {
			margin: auto;
			/* padding-bottom: auto; */
			height: auto;
		}
	}
</style>
