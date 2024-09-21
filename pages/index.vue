<script setup lang="ts">
const { t } = useI18n({
	useScope: "local",
});

</script>

<template>
	<div class="max-w-full container px-4 md:px-10">
		<div
			class="grid content-center"
			style="height: calc(100vh - 7rem); padding-bottom: 7rem"
		>
			<p class="text-6xl sm:text-7xl xl:text-8xl break-word font-black">
				{{ t("hello") }} &#128075; <br />
				<span class="text-primary"> {{ t("name") }} </span>
			</p>
			<span class="text-lg md:text-xl font-bold h-14">
				{{ t("text") }}
				<TypeWriter
					:display-text="[t('music'), t('geek'), t('hobby'), t('xkcd')]"
					:typing-speed="75"
					:erasing-speed="60"
					:new-text-delay="4000"
				/>.
			</span>
		</div>
		<div class="divider"></div>
		<Resume />
		<Projects />
	</div>
	<!--  -->
	<footer
		class="footer text-base-content bg-base-300 bg-opacity-50 items-center p-4 grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-5 justify-between"
	>
		<div class="flex flex-row col-span-4 place-self-center sm:place-self-start">
			<span class="copyleft">&copy;</span>Vinícius, 2024 -
			Projetado e desenvolvido com
			<img
				alt="amor"
				src="/full_heart.png"
				class="mx-1"
				style="height: 1rem;"
				:id="'teste'"
			/>
		</div>

		<div class="shrink grid-flow-col md:gap-4 place-self-center justify-self-center sm:justify-self-end">
			<a href="https://twitter.com/vine_tvs">
				<Icon
					name="cib:twitter"
					size="1rem"
				/>
			</a>
			<a href="https://www.linkedin.com/in/vini-tvs">
				<Icon name="bi:linkedin" />
			</a>
			<a href="https://github.com/ViniTVS">
				<Icon name="akar-icons:github-fill" />
			</a>
			<a href="mailto:vinisantos185@gmail.com">
				<Icon name="fa6-solid:envelope" />
			</a>
		</div>
	</footer>
</template>

<i18n lang="json">{
	"pt": {
		"hello": "Olá.",
		"name": "Eu sou Vinícius.",
		"text": "Desenvolvedor, entusiasta e ",
		"hobby": "hobbista",
		"xkcd": "leitor de xkcd",
		"music": "amante de música",
		"geek": "só um pouco nerd"
	},
	"en": {
		"hello": "Hello.",
		"name": "I'm Vinícius.",
		"text": "Developer, web enthusiast and ",
		"hobby": "hobbyist",
		"xkcd": "xkcd reader",
		"music": "music lover",
		"geek": "just a little bit of a geek"
	},
	"de": {
		"hello": "Hallo.",
		"name": "Ich bin Vinícius.",
		"text": "Entwickler, Web-Enthusiast und",
		"hobby": "Bastler",
		"xkcd": "xkcd-Leser",
		"music": "Musikliebhaber",
		"geek": "ein bisschen Geek"
	}
}</i18n>

<style>
#about {
	padding-top: 90px;
	padding-bottom: auto;
	max-height: 800px;
}

#eu {
	height: auto;
	max-width: 200px;
	border-radius: 8px;
	margin: auto;
}

.footer {
	row-gap: 1rem;
}

.copyleft {
	display: inline-block;
	transform: rotate(180deg);
}

.transition {
	background: linear-gradient(180deg,
			transparent -50%,
			oklch(var(--a)) 20%,
			oklch(var(--a)) 80%,
			transparent 150%);
	height: inherit;
	min-width: 4px;
	width: 4px;
}


@media (min-width: 768px) {
	#about {
		margin: auto;
		height: auto;
	}
}
</style>
