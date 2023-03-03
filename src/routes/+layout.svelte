<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import MdClose from 'svelte-icons/md/MdClose.svelte';

	let menus: { ref: string; option: string }[] = [
		{ ref: '#about', option: 'Sobre mim' },
		{ ref: '#experience', option: 'Experiência' },
		{ ref: '#projects', option: 'Projetos' },
		{ ref: '#contact', option: 'Contato' }
	];

	var isDark: boolean = false;
	var openDrawer: boolean = false;

	function drawerToggle() {
		openDrawer = !openDrawer;
	}

	onMount(() => {
		themeChange(false);
		let start_theme = document.documentElement.getAttribute('data-theme');
		isDark = start_theme == 'dark_theme';
	});
</script>

<div class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked={openDrawer} />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div
			class="sticky top-0 z-30 flex h-16 w-full 
				bg-opacity-80 backdrop-blur transition-all duration-100 
				shadow-sm w-full navbar bg-base-100"
		>
			<a href="#intro">
				<div class="flex-none">
					<img alt="Íconde site" src="favicon.png" height="36" width="36" />
				</div>
			</a>
			<div class="flex-1 px-2 mx-2" />
			<!-- menus se página for larga o bastante -->
			<div class="flex-2 hidden md:block">
				{#each menus as menuopt}
					<a class="btn btn-ghost normal-case text-xl" href={menuopt.ref}>
						<h3>{menuopt.option}</h3>
					</a>
				{/each}
			</div>
			<div class="flex-1 px-2 mx-2 flex-row-reverse">
				<label for="my-drawer-3" class="btn btn-square btn-ghost md:hidden">
					<div class="icon">
						<MdMenu />
					</div>
				</label>
				<!-- Muda tema -->
				<button
					on:click={() => (isDark = !isDark)}
					class="btn btn-sm btn-square btn-outline hidden md:block"
					data-toggle-theme="dark_theme,light_theme"
					data-act-class="ACTIVECLASS"
					aria-label="Alterar tema"
				>
					<div class="icon" style="width: 24px; height: 24px;">
						{#if isDark}
							<FaSun />
						{:else}
							<FaMoon />
						{/if}
					</div>
				</button>
			</div>
		</div>
		<!-- Conteúdo -->
		<div class="custom-background" id="intro">
			<div class="container mx-auto">
				<slot />
			</div>
		</div>
	</div>

	<!-- Sidebar content -->
	<div class="drawer-side md:hidden">
		<label
			for="my-drawer-3"
			class="drawer-overlay"
			style="background-color: black; opacity: 0.4;"
		/>
		<!-- Barra lateral em si -->
		<div class="menu px-4 py-2 w-3/4 bg-base-100 ">
			<div class="flex flex-col justify-between" style="height: 100%;">
				<!-- Close button -->
				<div class="flex flex-row justify-end">
					<label
						for="my-drawer-3"
						class="btn btn-square btn-ghost md:hidden"
						style="margin-right: 8px;"
					>
						<div class="icon">
							<MdClose />
						</div>
					</label>
				</div>
				<div class="flex flex-col justify-between">
					{#each menus as menuopt}
						<a
							class="normal-case text-xl my-10 mx-auto btn btn-ghost normal-case text-xl"
							href={menuopt.ref}
							on:click={drawerToggle}
						>
							<h1>{menuopt.option}</h1>
						</a>
					{/each}
				</div>
				
				<button
					on:click={() => (isDark = !isDark)}
					class="btn btn-bg btn-square btn-outline mx-auto mb-20"
					data-toggle-theme="dark_theme,light_theme"
					data-act-class="ACTIVECLASS"
					aria-label="Alterar tema"
				>
					<div class="icon">
						{#if isDark}
							<FaSun />
						{:else}
							<FaMoon />
						{/if}
					</div>
				</button>
				
			</div>
		</div>
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

	.custom-background {
		background: radial-gradient(at 100% 0vh, hsl(var(--p) / 0.3) 0px, transparent 30%),
			radial-gradient(ellipse at 0 180vh, hsl(var(--s) / 0.2) 0px, transparent 30%);
	}

	@media (max-width: 768px) {
		.container {
			padding-left: 10vw;
			padding-right: 10vw;
		}
	}
</style>
