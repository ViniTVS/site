<script lang="ts">
    import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
    
	let socials: { alt: string, src: any, link: string}[] = [
		{ alt: "Github logo", src: FaGithubSquare, link: "" },
		{ alt: "LinkedIn logo", src: FaLinkedin, link: "" },
		{ alt: "Twitter logo", src: FaTwitterSquare, link: "" }
	];
</script>


<div class="grid mx-auto content-center heading">
    <div class="prose md:prose-lg mx-auto" id="intro" style="width: calc(100%-36px);">
        <h1> Olá, mundo. <br> Eu sou o Vini. </h1>
        <p> Estudante de Ciência da Computação, sou desenvolvedor backend
            com um pouco de conhecimento em desenvolvimento mobile e páginas web. 
        </p>
        <div class="flex flex-row">
            {#each socials as social}
                <a href="{social.link}" >
                    <div class="icon">
                        <svelte:component this={social.src}/> 
                    </div>
                </a>
            {/each}
        </div>
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

	.icon {
		width: 40px;
		height: 40px;
		margin: auto;
	}
</style>