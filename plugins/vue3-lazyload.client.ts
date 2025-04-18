import { defineNuxtPlugin } from '#app'
import VueLazyLoad from 'vue3-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyLoad, {
    loading: '/loading-placeholder.png', // Optional: shows while image loads
    error: '/error-placeholder.png',     // Optional: shows on error
    observerOptions: {
      rootMargin: '0px',
      threshold: 0.1,
    },
  })
})
