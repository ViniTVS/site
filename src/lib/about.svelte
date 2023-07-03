<script lang="ts">
	import { i } from '@inlang/sdk-js';

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<div class="" id="about">
	<div class="hero-content flex-col md:flex-row-reverse px-0 mx-0">
		<img alt="Headshot" src="eu.png" id="eu" class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h2>{i('about.title')}</h2>
			<p>
				{i('about.text')}
			</p>
			<a href="/about" class="btn btn-accent {width > 768 ? 'btn-sm' : ''}  mt-2">
				{i('about.more')}
			</a>
		</div>
	</div>
</div>

<style>
	#about {
		padding-top: 90px;
		padding-bottom: auto;
		max-height: 800px;
	}

	#eu {
		/* width: 100%; */
		height: auto;
		max-width: 200px;
		border-radius: 8px;
		margin: auto;
	}

	@media (min-width: 768px) {
		#about {
			margin: auto;
			height: auto;
		}
	}
</style>
