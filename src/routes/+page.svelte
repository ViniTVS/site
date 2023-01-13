<script lang="ts">
    import {beforeUpdate} from 'svelte';
    import { Highlight } from "svelte-highlight";
    import vbscriptHtml from "svelte-highlight/languages/vbscript-html";
    import 'highlight.js/styles/github-dark.css';

	let socials: { alt: string, src: string, link: string}[] = [
		{ alt: "Github logo", src: "github.svg", link: "" },
		{ alt: "LinkedIn logo", src: "linkedin.svg", link: "" },
		{ alt: "Twitter logo", src: "twitter.svg", link: "" }
	];

    let tamTela: String = "calc(100vh - 64px)";
    let code: string = "";
    let animationStarted: boolean = false;
    let codeDone: boolean = false;
    let loadingDone: boolean = false;
    let buttonStyle: string = "";
    let screenWidth: number = 0;
    let fullCode: String = `
<div id="curriculum">
    <button class="btn btn-primary btn-lg">
        Currículo
    </button>
</div>`;
    
    function updateCode(i: number){
        if (i >= fullCode.length){
            setTimeout(() => {
                codeDone = true;
                setTimeout(() => {
                    buttonStyle = "margin:auto;";
                    loadingDone = true;
                }, 500);
            }, 1000);
            return;
        }
        code = code + fullCode[i];
        setTimeout(() => {
            updateCode(i+1);
        },30);
    }


    beforeUpdate(() => {
        if (screenWidth >= 1024 && !animationStarted){
            animationStarted = true;
            setTimeout(() => {
                updateCode(0);
            }, 1000);
        }
    });
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<div style="height: {tamTela};" class="grid grid-cols-2 gap-4 mx-auto heading content-center">
    <div class="col-span-2 lg:col-span-1 prose md:prose-lg mx-auto" id="intro">
        <h1> Olá, mundo. <br> Eu sou o Vini. </h1>
        <p> Estudante de Ciência da Computação, sou desenvolvedor backend
            com um pouco de conhecimento em desenvolvimento mobile e páginas web. </p>
    </div>
    <div class="col hidden lg:block" style="border-radius: 16px; {buttonStyle}">
        <a href="newsletter_01.pdf" target="_blank" style="text-decoration:none" >
        {#if codeDone}
            {#if loadingDone}
                <div id="curriculum">
                    <button class="btn btn-primary btn-lg">
                        Currículo
                    </button>
                </div>
            {:else}
                <div style="width: 20vh; margin: auto;">
                    <!-- <ProgressRadial stroke={50}></ProgressRadial> -->
                </div>
            {/if}
        {:else}
        <div style="border-radius: 16px;" >
            <Highlight language={vbscriptHtml} {code} />
        </div>
        {/if}
        </a>
    </div>
</div>

<div class="grid content-center" id="about">
    <article class="prose md:prose-lg mx-auto">
        <h2> Sobre mim </h2>
        <p> Eu sou o Vinícius, um estudante de Ciência da Computação e estagiário trabalhando com PHP, MySQL e FLutter.
            Durante a graduação tive a oportunidade de aprender programação desde de C e C++ a Java e Python.
            Fazendo minha Iniciação Científica em robótica também passei a conhecer melhor sobre dispositivos IoT e
            especialmente Arduino.
        </p>
        <p>
            Normalmente passo meu tempo lendo, jogando, ouvindo música e, como todo bom programador, 
            criando algum novo projeto que nunca será finalizado.
        </p>
    </article>
</div>


<style>
    .heading #intro{
        text-align: center;
    }
    .heading h1 {
        /* background: theme('colors.secondary.500'); */
        background: linear-gradient(to bottom right, hsl(var(--s)), hsl(var(--p)));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20vw;
        font-weight: bolder;
        line-height: 1;
    }

    #about {
        height: 100vh;
    }

    @media (min-width: 600px) {
        .heading h1 {
            font-size: 5rem;
        }
    }
</style>