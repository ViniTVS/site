<script lang="ts">
	import '../app.postcss';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import { slide } from 'svelte/transition';
	import {onMount, afterUpdate} from 'svelte';
    import { themeChange } from 'theme-change';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';

	let menus: {ref: string, option: string}[] = [
		{ref: "#about", option: "Sobre mim"},
		{ref: "#experience", option: "Experiência"},
		{ref: "#contact", option: "Contato"},
	];

	var isDark: boolean = false;

    onMount(() => {
        themeChange(false);
		let start_theme = document.documentElement.getAttribute("data-theme");
		isDark = start_theme == "dark_theme";
    })


</script>

<div class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
	<div class="drawer-content flex flex-col">
	  <!-- Navbar -->
		<div class="w-full navbar bg-base-200">
			<div class="flex-none">
				<a href="/#"> <img alt="Íconde site" src="favicon.png" height="36" width="36"/> </a>
			</div> 
			<div class="flex-1 px-2 mx-2"></div>
			<div class="flex-2 hidden md:block">
				{#each menus as menuopt }
					<a class="btn btn-ghost normal-case text-xl" href={menuopt.ref}> <h3> {menuopt.option} </h3> </a>
				{/each}	
			</div>
			<div class="flex-1 px-2 mx-2 flex-row-reverse">
				<label for="my-drawer-3" class="btn btn-square btn-ghost md:hidden">
					<div class="icon">
						<MdMenu/>
					</div>
				</label>
				<button on:click={() => isDark = !isDark} class="btn btn-primary btn-sm btn-square hidden btn-ghost btn-active md:block" data-toggle-theme="dark_theme,light_theme" data-act-class="ACTIVECLASS">
					<div class="icon" style="width: 24px; height: 24px;">
						{#if isDark}
							<FaSun/>
						{:else}
							<FaMoon/>
						{/if}
					</div>
				</button>
			</div>
		</div>
	<!-- Conteúdo -->
	<div class="container mx-auto">
		<slot/>
	</div>

	</div> 
	<!-- Sidebar content here -->
	<div class="drawer-side md:hidden">
		<label for="my-drawer-3" class="drawer-overlay"></label> 
		<ul class="menu p-4 w-3/4 bg-base-100 flex justify-center">
			{#each menus as menuopt }
				<li>	
					<a class="normal-case text-xl my-10 mx-auto" href={menuopt.ref}> <h3> {menuopt.option} </h3> </a>
				</li>
			{/each}	
			<li>
				<button on:click={() => isDark = !isDark} class="btn btn-primary btn-square mx-auto" data-toggle-theme="dark_theme,light_theme" data-act-class="ACTIVECLASS">
					<div>
						{#if isDark}
							<FaSun/>
						{:else}
							<FaMoon/>
						{/if}
					</div>
				</button>
			</li>
		</ul>
	  
	</div>
</div>


<style>
	.icon {
		width: 30px;
		height: 30px;
		margin: auto;
	}

	.btn-sm {
		height: 2.5rem; 
		width: 2.5rem;
	}
    @media (max-width: 768px) {
		.container {
			padding-left: 10vw;
			padding-right: 10vw;
		}
    }
</style>