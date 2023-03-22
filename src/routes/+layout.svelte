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
		<nav
			class="sticky top-0 z-30 flex h-16 w-full 
				bg-opacity-80 backdrop-blur transition-all duration-100 
				shadow-sm w-full navbar bg-base-100"
		>
			<a href="#intro">
				<div class="flex-none">
					<img alt="Íconde site" src="favicon.png" height="36" width="36" />
				</div>
			</a>
			<div class="flex-1" />
			<!-- menus se página for larga o bastante -->
			<div class="flex-2 hidden md:block" style="overflow: hidden;">
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
		</nav>
		<!-- Conteúdo -->
		<div class="custom-background" id="intro">
			<div class="mx-4 md:mx-10 mb-4 md:mb-10">
				<slot />
			</div>
			<footer
				class="footer footer-center p-4 md:p-10 pt-10
					{isDark ? 'bg-base-300' : 'bg-base-200'} 
					text-base-content"
				id="contact"
			>
				<h2>Entre em contato</h2>
				<p style="font-size: 1rem; max-width: 80%;">
					Caso se interesse em meus serviços ou tenha dúvidas, minha caixa de e-mail está sempre
					aberta:
				</p>
				<a href="mailto:vinisantos185@gmail.com">
					<button
						class="btn {isDark ? 'btn-primary' : 'btn-accent'}"
						style="text-transform: lowercase;"
					>
						vinisantos185@gmail.com
					</button>
				</a>
				<p>
					<span class="aligned">
						<span class="copyleft">&copy;</span> 2023 - Projetado e desenvolvido com
						<img alt="amor" src="full_heart.png" id="coracao" class="mx-1" />por
					</span>
					<br/>
					Vinícius Teixeira Vieira dos Santos
				</p>
			</footer>
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
		<div class="menu px-4 py-2 w-3/4 bg-base-100 " style="max-height: 100vh;">
			<div class="flex flex-col justify-between" style="max-height: 100%;">
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
							<h2>{menuopt.option}</h2>
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

	#coracao {
		width: auto;
		height: 15px;
	}
	.aligned {
		display: flex;
		align-items: center;
		overflow: hidden;
		min-width: 290px;
	}
	.copyleft {
		display: inline-block;
		transform: rotate(180deg);
	}

	@media (min-width: 768px) {
		#coracao {
			width: auto;
			height: 20px;
		}
	}
</style>
