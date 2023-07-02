<script lang="ts">
	import About from '$lib/about.svelte';
	import Intro from '$lib/intro.svelte';
	import Projects from '$lib/projects.svelte';
	import { i } from '@inlang/sdk-js';

	interface Experience {
		title: string;
		date: string;
		text: string;
	}

	// let tech_ic: String[] = ['C++', 'Arduino'];
	// let tech_trab: String[] = ['PHP', 'Vue.js', 'MySQL', 'Flutter'];
	let xp_list: Experience[] = [];

	for (let x = 0; ; x++) {
		if (i('experience.' + x + '.date') == '') break;

		xp_list.push({
			title: i('experience.' + x + '.title'),
			date: i('experience.' + x + '.date'),
			text: i('experience.' + x + '.text')
		});
	}
</script>

<Intro />

<About />

<div id="experience">
	<h2>{i('layout.experience')}</h2>
	<div class="md:px-10 xl:px-20">
		{#each xp_list as xp_item}
			<div class="grid grid-cols-3 md:grid-cols-2 mt-5">
				<span>{xp_item.date}</span>
				<div class="col-span-2 md:col-span-1">
					<h3>{xp_item.title}</h3>
					<p>
						{@html xp_item.text}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<Projects />

<style>
	#experience {
		padding-top: 90px;
	}
	#experience span {
		padding-top: 0.33rem;
	}
</style>
