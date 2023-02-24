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
				<div class="mx-4">
					<slot />
				</div>
			</div>
		</div>
		<!-- <footer class="footer p-10 bg-base-200 text-base-content">
			<div>
				<svg
					width="50"
					height="50"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					class="fill-current"
					><path
						d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
					/></svg
				>
				<p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
			</div>
			<div>
				<span class="footer-title">Services</span>
				<a class="link link-hover">Branding</a>
				<a class="link link-hover">Design</a>
				<a class="link link-hover">Marketing</a>
				<a class="link link-hover">Advertisement</a>
			</div>
			<div>
				<span class="footer-title">Company</span>
				<a class="link link-hover">About us</a>
				<a class="link link-hover">Contact</a>
				<a class="link link-hover">Jobs</a>
				<a class="link link-hover">Press kit</a>
			</div>
			<div>
				<span class="footer-title">Legal</span>
				<a class="link link-hover">Terms of use</a>
				<a class="link link-hover">Privacy policy</a>
				<a class="link link-hover">Cookie policy</a>
			</div>
		</footer> -->
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
				<!-- <li> -->
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
				<!-- </li> -->
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
