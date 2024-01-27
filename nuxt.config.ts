// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.scss'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      download: true
    }]
    
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: ''
      }
    }
  }
}
)
