// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: ['@nuxt/content','@nuxt/image' ],


  css: ["bootstrap/dist/css/bootstrap.min.css"],
  plugins: ["~/plugins/bootstrap.client.ts"], // Ensure the plugin is included
  
})