<script lang="ts">
    import Intro from '$lib/intro.svelte';

	let socials: { alt: string, src: string, link: string}[] = [
		{ alt: "Github logo", src: "github.svg", link: "" },
		{ alt: "LinkedIn logo", src: "linkedin.svg", link: "" },
		{ alt: "Twitter logo", src: "twitter.svg", link: "" }
	];


</script>

<Intro/>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto content-center" id="about">
    <div class="col col-span-2 prose md:prose-lg mx-auto">
        <h2> Sobre mim </h2>
        <p> Eu sou o Vinícius, um estudante de Ciência da Computação e estagiário trabalhando com PHP, MySQL e FLutter.
            Durante a graduação tive a oportunidade de aprender programação desde de C e C++ a Java e Python.
            Fazendo minha Iniciação Científica em robótica também passei a conhecer melhor sobre dispositivos IoT e
            especialmente Arduino.
        <br>
            Normalmente passo meu tempo lendo, jogando, ouvindo música e, como todo bom programador, 
            criando algum novo projeto que nunca será finalizado.
        </p>
    </div>
    <div class="aspect-square m-auto" id="photo">
        <div class="stack">
            <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
                <img class="stacked" alt="Íconde site" src="favicon.png"/>
                
            </div>
            <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div> 
            <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> 
        </div>
    </div>
</div>


<style>

    #about {
        height: 100vh;
    }

    #about h2 {
        color: hsl(var(--s));
        
    }

    #photo div {
        width: 100%;
        height: 100%;
		border-radius: 8px;
    }

    #photo {
        width: 50vw;
        max-width: 250px;

    }
    /* .stacked {
        width: 50vw;
        max-width: 250px;
        background: hsl(var(--a));
    } */

</style>