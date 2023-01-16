<script lang="ts">
    import Intro from '$lib/intro.svelte';



</script>

<Intro/>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 content-center" id="about">
    <div class="col md:col-span-2 prose md:prose-lg mx-auto">
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
    <div class="m-auto">
        finge que tem minha foto aqui kkkkkk
    </div>
</div>

<div class="grid mx-4">
    <div class="prose md:prose-lg">
        <h2> Estudos </h2>
    </div>
</div>




<style>

    #about {
        min-height: 100vh;
    }

    #about h2 {
        color: hsl(var(--s));
        
    }

</style>