export default {
  ssr: false,
  target: 'static',
  components: true,
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
