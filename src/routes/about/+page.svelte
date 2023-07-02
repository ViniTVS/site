<script lang="ts">
	import { i } from '@inlang/sdk-js';

	function getLangData(type: string, array: String[]) {
		for (let x = 0; ; x++) {
			let title = i('about_page.' + type + '.titles.' + x);
			if (title == '') break;
			array.push(title);
		}
	}

	function calculateAge(birthday: any) { // birthday is a date
		let ageDifMs = Date.now() - birthday;
		let ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear()! - 1970);
	}

	let books: String[] = [];
	let movies: String[] = [];
	let bday: Date = new Date('1999-12-21');
	let age: string = calculateAge(bday).toString();

	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
	getLangData('books', books);
	getLangData('movies', movies);
</script>

<div>
	<p class="my-10 mx-auto" style="max-width: 1600px;">
		{@html i('about_page.text').replace('<years>', age)}
	</p>

	<div class="hero" style="width: 100%;">
		<div class="hero-content flex-col lg:flex-row px-0 mx-0 justify-between" style="width: 100%;">
			<img
				alt="Number Zero"
				src="https://i.guim.co.uk/img/static/sys-images/Books/Pix/pictures/2015/11/25/1448454021482/Illustration-of-man-readi-009.jpg?width=700&quality=85&auto=format&fit=max&s=fbeb98eab29033aa780203cbc6e9ce34"
				class="max-w-sm rounded-lg shadow-2xl"
			/>
			<div>
				<h3>{i('about_page.books.title')}</h3>
				<ul class="list-disc list-inside">
					{#each books as book}
						<li>{book}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="hero" style="width: 100%;">
		<div
			class="hero-content flex-col lg:flex-row-reverse px-0 mx-0 justify-between"
			style="width: 100%;"
		>
			<img
				alt="Cinema Paradiso"
				src="https://sites.usp.br/cdccenglish/wp-content/uploads/sites/512/2020/03/CINEMA-1.jpg"
				class="max-w-sm rounded-lg shadow-2xl"
			/>
			<div>
				<h3>{i('about_page.movies.title')}</h3>
				<ul class="list-disc list-inside">
					{#each movies as movie}
						<li>{movie}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="hero" style="width: 100%;">
		<div class="hero-content flex-col lg:flex-row px-0 mx-0 justify-between" style="width: 100%;">
			<img
				alt="CASIOPEA"
				src="https://i.ytimg.com/vi/us9wkIfBvK0/hqdefault.jpg"
				class="max-w-sm rounded-lg shadow-2xl"
			/>
			<div>
				<h3>{i('about_page.music.title')}</h3>
				<ul class="list-disc list-inside">
					<li>Stg. Pepper's Lonely Hearts Club Band - The Beatles, 1967</li>
					<li>Os Mutantes - Os Mutantes, 1968</li>
					<li>2112 - Rush, 1976</li>
					<li>News of the World - Queen, 1977</li>
					<li>CASIOPEA - CASIOPEA, 1979</li>
					<li>Bad - Michael Jackson, 1987</li>
					<li>Rust in Peace - Megadeth, 1990</li>
					<li>Slipknot - Slipknot, 1999</li>
					<li>Reise, Reise - Rammstein, 2004</li>
					<li>From Mars to Sirius - Gojira, 2005</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="hero" style="width: 100%;">
		<div
			class="hero-content flex-col lg:flex-row-reverse px-0 mx-0 justify-between"
			style="width: 100%;"
		>
			<img
				alt="My Stardew Valley game file."
				src="/StardewValley.jpg"
				class="max-w-sm rounded-lg shadow-2xl"
			/>
			<div>
				<h3>{i('about_page.games.title')}</h3>
				<ul class="list-disc list-inside">
					<li>Need for Speed: Most Wanted (2005)</li>
					<li>Stardew Valley</li>
					<li>The Legend of Zelda: Breath of the Wild</li>
					<li>Elden Ring</li>
					<li>Portal 2</li>
					<li>NieR: Automata</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	h3 {
		background: linear-gradient(to bottom right, hsl(var(--a)), hsl(var(--nc)));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
