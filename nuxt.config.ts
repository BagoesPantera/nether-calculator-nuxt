// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    compatibilityDate: '2026-02-17',
  },
  app: {
    baseURL: '/nether-calculator-nuxt',
    buildAssetsDir: 'assets',
    head: {
      title: 'Nether Calculator',
      link: [
        { 
          rel: 'icon', 
          href: 'https://cdn.discordapp.com/attachments/940834033825349653/1144841218107375646/logo.png' 
        },
        { 
          rel: "stylesheet", 
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css", 
          integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65", 
          crossorigin: "anonymous"
        },
      ],
      meta: [
        { 
          charset: 'utf-8' 
        },
        { 
          name: 'viewport', 
          content: 'width=device-width, initial-scale=1' 
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          integrity: "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",
          crossorigin: "anonymous"
        },
      ],
    },
  },
})
