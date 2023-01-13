<script lang="ts">
    import {beforeUpdate} from 'svelte';
    import { Highlight } from "svelte-highlight";
    import vbscriptHtml from "svelte-highlight/languages/vbscript-html";
    import 'highlight.js/styles/github-dark.css';

    let code: string = "";
    let fullCode: String = '<div id="curriculum">\n\t<button class="btn btn-primary btn-lg">\n\t\tCurrículo\n\t</button>\n</div>';
    let animationStarted: boolean = false;
    let codeDone: boolean = false;
    let loadingDone: boolean = false;
    let buttonStyle: string = "";
    let screenWidth: number = 0;
    // recursivamente adiciona o char da posição index de fullCode p/ code 
    function updateCode(index: number){
        if (index < fullCode.length){
            code = code + fullCode[index];
            setTimeout(() => {
                updateCode(index+1);
            },20);
        } else {
            setTimeout(() => {
                codeDone = true;
                buttonStyle = "margin:auto;";
                setTimeout(() => {
                    loadingDone = true;
                }, 500);
            }, 1000);
        }
    }

    beforeUpdate(() => {
        // só inicia a animção do código se a tela for grande
        // e também pode ser iniciado se tirar o dispositivo de 
        // horizontal p/ vertical (por isso usar beforeUpdate)
        if (screenWidth >= 1024 && !animationStarted){
            animationStarted = true;
            setTimeout(() => {
                updateCode(0);
            }, 1000);
        }
    });
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<div class="
        grid grid-cols-3 
        gap-4 mx-auto content-center 
        heading"
>

    <div class="
            col-span-3 lg:col-span-2 
            prose md:prose-lg 
            mx-auto" 
        id="intro"
        >

        <h1> Olá, mundo. <br> Eu sou o Vini. </h1>
        <p> Estudante de Ciência da Computação, sou desenvolvedor backend
            com um pouco de conhecimento em desenvolvimento mobile e páginas web. 
        </p>
    </div>
    <!-- Código que vira botão -->
    <div class="col hidden lg:block my-auto" 
        style="border-radius: 16px; {buttonStyle}"
        >
        {#if codeDone}
            {#if loadingDone}
                <div id="curriculum">
                    <a href="newsletter_01.pdf" target="_blank" style="text-decoration:none" >
                        <button class="btn btn-primary btn-lg">
                            Currículo
                        </button>
                    </a>
                </div>
            {/if}
        {:else}
            <div style="border-radius: 16px;" >
                <Highlight language={vbscriptHtml} {code} />
            </div>
        {/if}
    </div>
</div>

<style>
    .heading {
        height: calc(100vh - 64px);
    }

    .heading #intro{
        text-align: center;
    }
    .heading h1 {
        background: linear-gradient(to bottom right, hsl(var(--s)), hsl(var(--p)));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 5em;
        font-weight: 500;
    }
</style>