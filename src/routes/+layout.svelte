<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import MdClose from 'svelte-icons/md/MdClose.svelte';
	import MdGTranslate from 'svelte-icons/md/MdGTranslate.svelte';
	import { i, switchLanguage, language, languages } from '@inlang/sdk-js';
	import { fade } from 'svelte/transition';

	let menus: { ref: string; option: string }[] = [
		{ ref: '#about', option: i('layout.about') },
		{ ref: '#experience', option: i('layout.experience') },
		{ ref: '#projects', option: i('layout.projects') },
		{ ref: '#contact', option: i('layout.contact') }
	];

	var isDark: boolean = false;
	var openDrawer: boolean = false;
	var showToast: boolean = true;

	function drawerToggle() {
		openDrawer = !openDrawer;
	}

	function updLang(lang: string) {
		if (language != lang) switchLanguage(lang).then(() => window.location.reload());
	}

	// console.log(Intl.DateTimeFormat().resolvedOptions().locale)

	onMount(() => {
		if (localStorage.getItem('language_selected') != 'true') {
			// get system's language
			let sys_lang: string = Intl.DateTimeFormat().resolvedOptions().locale;
			// check if system's language is defined
			for (const l of languages) {
				if (sys_lang.includes(l)) {
					localStorage.setItem('language_selected', 'true');
					updLang(l);
					return;
				}
			}
			// just use en
			localStorage.setItem('language_selected', 'true');
			updLang('en');
		}
		setTimeout(() => {showToast = false;}, 5000);
		// localStorage.clear();
		themeChange(false);
		let start_theme = document.documentElement.getAttribute('data-theme');
		isDark = start_theme == 'dark_theme';
	});
</script>

<title> {i('personal_page')} - Vinícius Teixeira Vieira dos Santos </title>

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
					class="btn btn-sm btn-square btn-outline hidden md:block mx-2"
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
				<button
					onclick="my_modal_1.showModal()"
					class="btn btn-sm btn-square btn-outline hidden md:block mx-2"
					data-act-class="ACTIVECLASS"
					aria-label="Alterar tema"
				>
					<div class="icon" style="width: 24px; height: 24px;">
						<MdGTranslate />
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
					{isDark ? 'bg-base-200' : 'bg-base-200'}
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
					<br />
					Vinícius Teixeira Vieira dos Santos
				</p>
			</footer>
		</div>
	</div>

	<!-- Sidebar content -->
	<div class="drawer-side md:hidden">
		<label for="my-drawer-3" class="drawer-overlay" />
		<!-- Side bar -->
		<div class="menu px-4 py-2 w-3/4 bg-base-100" style="height: 100vh; overflow: auto">
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
							class="normal-case text-xl my-5 mx-auto btn btn-ghost normal-case text-xl"
							href={menuopt.ref}
							on:click={drawerToggle}
						>
							<h2>{menuopt.option}</h2>
						</a>
					{/each}
				</div>
				<!--  -->
				<button
					onclick="my_modal_1.showModal()"
					class="btn btn-bg btn-square btn-outline mx-auto mb-5"
					data-act-class="ACTIVECLASS"
					aria-label="Alterar tema"
				>
					<div class="icon">
						<MdGTranslate />
					</div>
				</button>
				<button
					on:click={() => (isDark = !isDark)}
					class="btn btn-bg btn-square btn-outline mx-auto mb-5"
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

<!-- Language modal -->
<dialog id="my_modal_1" class="modal modal-bottom sm:modal-middle">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">{i('layout.language')}</h3>
		<p class="">
			{i('layout.select_language')}
			{#if language != 'en'}
				<br />
				<span style="font-size: 0.75rem;"> Select language:</span>
			{/if}
		</p>
		<div class="flex flex-row justify-center">
			<button on:click={() => updLang('pt')}
				><img alt="Português" class="mx-2" src="https://flagsapi.com/BR/flat/48.png" /></button
			>
			<button on:click={() => updLang('en')}
				><img alt="English" class="mx-2" src="https://flagsapi.com/US/flat/48.png" /></button
			>
			<button on:click={() => updLang('de')}
				><img alt="Deutsch" class="mx-2" src="https://flagsapi.com/DE/flat/48.png" /></button
			>
		</div>
		<div class="modal-action">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn">{i('close')}</button>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<!-- Language toast -->
{#if showToast}
	<div out:fade class="toast" style="max-width: 100vw !important;">
		<div class="alert alert-info" style="width: 100% !important;">
			<span style="white-space: normal;" >{i("layout.modal_info")}</span>
		</div>
	</div>
{/if}

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

	dialog {
		color: inherit;
	}

	@media (min-width: 768px) {
		#coracao {
			width: auto;
			height: 20px;
		}
		.aligned {
			min-width: 355px;
		}
	}
</style>
