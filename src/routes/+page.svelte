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
	
    
    let y: number = 0;
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
                }, 1000);
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

<div style="height: {tamTela}; --customGradient: {y}%;" class="grid grid-cols-3 gap-4 mx-auto heading content-center">
    <div class="col-span-3 lg:col-span-2" id="intro">
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
    <h2> Sobre mim </h2>
    <p> Eu sou o Vinícius, um estudante de Ciência da Computação e estagiário trabalhando com PHP, MySQL e FLutter.
        Durante a graduação tive a oportunidade de aprender programação desde de C e C++ a Java e Python.
        Fazendo minha Iniciação Científica em robótica, também passei a conhecer melhor sobre Arduino e alguns 
        dispositivos de IoT.
    </p>
    <p>
        Normalmente passo meu tempo lendo, jogando, ouvindo música e, como todo bom programador, 
        criando algum novo projeto que nunca será finalizado.
    </p> 
</div>

&nbsp 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus magna a lacinia tincidunt. Nunc a libero a turpis convallis imperdiet. Nullam gravida felis nec neque pretium, eget semper metus vulputate. Donec vel maximus dolor. Ut laoreet laoreet lacus, nec ornare erat euismod vel. In sed ligula vel elit ornare molestie. Sed bibendum nisl orci, at cursus augue pretium ut. Cras auctor lacus a turpis imperdiet ullamcorper.
<br>
Nulla tincidunt venenatis finibus. In tristique viverra augue, non fermentum neque auctor sit amet. Aenean consectetur diam nibh, nec dignissim arcu porttitor at. Pellentesque vitae elementum est. Nunc quis posuere nisl, quis pretium magna. Mauris ultrices maximus mauris id tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vel arcu eget nibh suscipit cursus vel ac erat. Duis tincidunt tristique est, vel laoreet nibh auctor sed.
<br>
Donec ac quam ante. Donec facilisis non risus quis iaculis. Vestibulum eget blandit lorem. Nullam ullamcorper rhoncus ante, feugiat semper velit tristique quis. Donec a urna risus. Aliquam libero augue, suscipit vitae bibendum id, tempus non magna. Ut ac odio vel neque tristique bibendum. Nulla et eleifend arcu. Duis finibus ut neque eu accumsan. Aliquam egestas elit a lectus sodales, tempus suscipit turpis posuere.
<br>
Phasellus tincidunt feugiat dolor quis consequat. Vivamus venenatis leo ut consectetur commodo. Quisque varius consequat nisl, sit amet ultrices arcu tincidunt nec. Aliquam posuere interdum arcu. Suspendisse vehicula, elit vel accumsan consectetur, justo neque commodo magna, sit amet ullamcorper quam lacus nec ligula. Cras dignissim malesuada metus eu fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum id scelerisque turpis. Donec vel ornare risus. Maecenas facilisis elementum nulla, id vestibulum eros gravida ut. Sed suscipit nisi odio, et lobortis lacus suscipit et. In at lectus sit amet sem elementum semper. In lacus enim, eleifend id elit eget, feugiat vehicula felis. Nullam interdum fermentum augue. Vestibulum facilisis blandit turpis, non elementum odio eleifend at.
<br>
Suspendisse potenti. Mauris turpis nibh, iaculis in urna ut, imperdiet laoreet lorem. Pellentesque feugiat rutrum risus at convallis. Mauris iaculis, quam et sollicitudin aliquam, lectus urna cursus mi, sit amet eleifend augue risus nec erat. Aenean laoreet est id massa aliquet tempus. Etiam gravida mattis massa et ornare. Aliquam erat volutpat. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus magna a lacinia tincidunt. Nunc a libero a turpis convallis imperdiet. Nullam gravida felis nec neque pretium, eget semper metus vulputate. Donec vel maximus dolor. Ut laoreet laoreet lacus, nec ornare erat euismod vel. In sed ligula vel elit ornare molestie. Sed bibendum nisl orci, at cursus augue pretium ut. Cras auctor lacus a turpis imperdiet ullamcorper.
<br>
Nulla tincidunt venenatis finibus. In tristique viverra augue, non fermentum neque auctor sit amet. Aenean consectetur diam nibh, nec dignissim arcu porttitor at. Pellentesque vitae elementum est. Nunc quis posuere nisl, quis pretium magna. Mauris ultrices maximus mauris id tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vel arcu eget nibh suscipit cursus vel ac erat. Duis tincidunt tristique est, vel laoreet nibh auctor sed.
<br>
Donec ac quam ante. Donec facilisis non risus quis iaculis. Vestibulum eget blandit lorem. Nullam ullamcorper rhoncus ante, feugiat semper velit tristique quis. Donec a urna risus. Aliquam libero augue, suscipit vitae bibendum id, tempus non magna. Ut ac odio vel neque tristique bibendum. Nulla et eleifend arcu. Duis finibus ut neque eu accumsan. Aliquam egestas elit a lectus sodales, tempus suscipit turpis posuere.
<br>
Phasellus tincidunt feugiat dolor quis consequat. Vivamus venenatis leo ut consectetur commodo. Quisque varius consequat nisl, sit amet ultrices arcu tincidunt nec. Aliquam posuere interdum arcu. Suspendisse vehicula, elit vel accumsan consectetur, justo neque commodo magna, sit amet ullamcorper quam lacus nec ligula. Cras dignissim malesuada metus eu fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum id scelerisque turpis. Donec vel ornare risus. Maecenas facilisis elementum nulla, id vestibulum eros gravida ut. Sed suscipit nisi odio, et lobortis lacus suscipit et. In at lectus sit amet sem elementum semper. In lacus enim, eleifend id elit eget, feugiat vehicula felis. Nullam interdum fermentum augue. Vestibulum facilisis blandit turpis, non elementum odio eleifend at.
<br>
Suspendisse potenti. Mauris turpis nibh, iaculis in urna ut, imperdiet laoreet lorem. Pellentesque feugiat rutrum risus at convallis. Mauris iaculis, quam et sollicitudin aliquam, lectus urna cursus mi, sit amet eleifend augue risus nec erat. Aenean laoreet est id massa aliquet tempus. Etiam gravida mattis massa et ornare. Aliquam erat volutpat.  


<style>
    .heading #intro{
        text-align: center;
    }
    .heading h1 {
        /* background: theme('colors.secondary.500'); */
        background: linear-gradient(to bottom right, hsl(var(--s)) var(--customGradient), hsl(var(--p)) 100%);
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