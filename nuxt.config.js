export default {
  ssr: true,
  target: 'static',
  components: true,
  router:{
    prefetchLinks: false
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },
}
