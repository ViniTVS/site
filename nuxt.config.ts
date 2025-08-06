// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	css: ['~/assets/main.css'],
	devtools: { enabled: true },
	ssr: true,
	modules: [
		'@nuxtjs/i18n',
		'@nuxt/content',
		['@nuxtjs/google-fonts', {
			download: true
		}],
		'@nuxt/icon'
	],
	i18n: {
		defaultLocale: 'pt',
		locales: [
			{ code: 'pt', name: 'Português', file: 'pt.json' },
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'de', name: 'Deutsch', file: 'de.json' }
		]
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			htmlAttrs: {
				lang: ''
			},
		},
		buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name
	},
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	compatibilityDate: '2024-09-21',
	nitro: {
		prerender: {
			ignore: [],
		}
	}
}
)