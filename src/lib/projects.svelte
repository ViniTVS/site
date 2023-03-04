<script lang="ts">
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let projects: {
		title: string;
		desc: string;
	}[] = [
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS'
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVShttps://github.com/ViniTVS'
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS'
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS'
		},
		{
			title: 'Github logo',
			desc: 'https://github.com/ViniTVS'
		}
	];

	let show = false;
	let max_show = 3;
	let w: number;
	const options = {};
	$: {
		max_show = w > 944 ? 3 : 2;
	}

	function calcMargins(v: number): string{
		var margins:string = "";
		if (v > 0)
			margins += "md:ml-4 lg:ml-8";

		if (v < (max_show - 1))
			margins += " md:mr-4 lg:mr-8";
		
		return margins;
	}
</script>

<div class="grid heading" in:fade  bind:clientWidth={w} >
	<h2>Projetos</h2>
	<div
		class="grid md:grid-cols-2 lg:grid-cols-3"
		use:inview={options}
		on:enter={(event) => {
			const { inView } = event.detail;
			show = inView;
		}}
	>
		{#if show}
			{#each projects as projeto, i}
				<div
					class="project-showcase bg-{(i%5).toString()} {calcMargins(i%max_show)} mt-8 p-6"
					in:fade={{
						delay: 300 * i
					}}
				>
					<h3>{projeto.title}</h3>
					<p>{projeto.desc}</p>
				</div>
			{/each}
		{:else}
		{#each projects as projeto, i}
			<div class="project-showcase mt-8 p-6 invisible">
				<h3>{projeto.title}</h3>
				<p>{projeto.desc}</p>
			</div>
		{/each}

		{/if}
	</div>
</div>

<style>
	.project-showcase {
		/* height: 400px;
		max-height: 40vh; */
		border-radius: 16px;
	}

	.bg-0 {
		background: linear-gradient(135deg,hsl(var(--p) / 0.3) 10%,hsl(var(--p)));
	}
	.bg-1 {
		background: linear-gradient(135deg,hsl(var(--s) / 0.3) 10%,hsl(var(--s)));
	}
	.bg-2 {
		background: linear-gradient(135deg,hsl(var(--a) / 0.3) 10%,hsl(var(--a)));
	}
	.bg-3 {
		background: linear-gradient(135deg,hsl(var(--in) / 0.3) 10%,hsl(var(--in)));
	}
	.bg-4 {
		background: linear-gradient(135deg,hsl(var(--su) / 0.3) 10%,hsl(var(--su)));
	}

	/* [data-theme="light_theme"] .bg-0 {
		background: linear-gradient(135deg,hsl(var(--p)) 50%,hsl(var(--p) / 0.3));
	}
	[data-theme="light_theme"] .bg-1 {
		background: linear-gradient(135deg,hsl(var(--s)) 10%,hsl(var(--s) / 0.3));
	}
	[data-theme="light_theme"] .bg-2 {
		background: linear-gradient(135deg,hsl(var(--a)) 10%,hsl(var(--a) / 0.3));
	}
	[data-theme="light_theme"] .bg-3 {
		background: linear-gradient(135deg,hsl(var(--in)) 10%,hsl(var(--in) / 0.3));
	}
	[data-theme="light_theme"] .bg-4 {
		background: linear-gradient(135deg,hsl(var(--su)) 10%,hsl(var(--su) / 0.3));
	} */

</style>
