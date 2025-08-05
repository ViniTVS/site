// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	css: ['~/assets/main.css'],
	devtools: { enabled: true },

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
			}
		},
	},
	vite: {
		plugins: [
			tailwindcss(),
		],

	},
	compatibilityDate: '2024-09-21',
	nitro: {
		prerender: {
			ignore: ['/__nuxt_content/content/sql_dump'],
		}
	}
}
)