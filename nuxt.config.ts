// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "JAM's Tech Portfolio",
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@nuxt/image',
    'nuxt-marquee',
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode'
  ]
})