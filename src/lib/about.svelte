<script lang="ts">
	import { i } from '@inlang/sdk-js';
</script>

<div class="" id="about">
	<div class="hero-content flex-col md:flex-row-reverse px-0 mx-0">
		<img alt="Headshot" src="eu.png" id="eu" class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h2>{i("about.title")}</h2>
			<p>
				{i("about.text")}
			</p>
		</div>
	</div>
	<a href="/about" class="btn btn-info">{i("about.more")}</a>
</div>

<style>
	#about {
		padding-top: 90px;
		padding-bottom: auto;
		/* height: 100vh; */
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
