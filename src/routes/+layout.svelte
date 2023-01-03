<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../theme.postcss'; // <--
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import { slide } from 'svelte/transition';
	import {afterUpdate} from 'svelte';

	let socials: { alt: string, src: string, link: string}[] = [
		{
			alt: "Github logo",
			src: "github.svg",
			link: ""
		},
		{
			alt: "LinkedIn logo",
			src: "linkedin.svg",
			link: ""
		},
		{
			alt: "Twitter logo",
			src: "twitter.svg",
			link: ""
		}
	];
	let menus: {ref: string, option: string}[] = [
		{ref: "#about", option: "Sobre"},
		{ref: "#experience", option: "Experiência"},
		{ref: "#contact", option: "Contato"},
	];

	var screenWidth: number;
	var menuColor: string = "white";
	var showMenu: boolean = false;
	var bgColor: string = "white";
	let tamTela = "calc(100vh - 78px);";

	$: {
		if (screenWidth >= 768)
			showMenu = false;
	}

	function updMenu(){
		showMenu = !showMenu;
		// document.getElementsByClassName('teste').style['background']  = 'red';
	}

	afterUpdate(() => {
		if(showMenu){
			bgColor = getComputedStyle(document.getElementsByTagName("body")[0]).backgroundColor;
			document.getElementsByClassName('teste')[0].style['background'] = bgColor;
			document.getElementById("shell-header").style.zIndex = "1001"; 
		}
	});



</script>

<svelte:window bind:innerWidth={screenWidth}/>

<!-- App Shell -->
<AppShell slotHeader="visible custom-header" slotSidebarLeft="place-content-center">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="transparent" shadow="shadow-lg">
			<svelte:fragment slot="lead">
				<img alt="Íconde site" src="favicon.png" height="36" width="36" />
			</svelte:fragment>

			<svelte:fragment slot="default">
				<div class="hidden md:block">
					<div class="flex flex-row place-content-evenly">
						{#each menus as menuopt }
							<a href={menuopt.ref}> <h3> {menuopt.option} </h3> </a>
						{/each}	
					</div>
				</div>
			</svelte:fragment>
			
			<svelte:fragment slot="trail">
				<button on:click={updMenu} class="md:hidden block btn btn-ghost-primary btn-base">
					<div class="icon">
						<MdMenu/>
					</div>
				</button>
				<div class="hidden md:block">					
					<LightSwitch on:click={()=> menuColor = menuColor == "black" ? "white" : "black" }/>
				</div>
				
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Menu no mobile -->
	{#if showMenu}
		<div transition:slide class="teste" style="height: {tamTela}">
			<div class="container mx-auto px-4" style="height: 100%;">
				<div  style="margin: auto; height: 100%;" class="flex flex-col mx-auto place-content-evenly mx-auto">
					{#each menus as menuopt }
						<a transition:slide href={menuopt.ref}> <h1> {menuopt.option} </h1> </a>
					{/each}
					<LightSwitch on:click={()=> menuColor = menuColor == "black" ? "white" : "black" }/>
				</div>
			</div>
		</div>
	{/if}
	<!-- Conteúdo -->
		<div class="container mx-auto">
			<slot tamTela={tamTela}/>
		</div>
	<!-- {/if} -->
</AppShell>




<style>
	.icon {
		color: var(menuColor);
		width: 24px;
		height: 24px;
	}
	.teste {
		z-index: 1000;
		/* background: fixed; */
		/* background-color: var(bgColor); */
		position: absolute;
		height: 80vh;
		width: 100vw;
	}
</style>