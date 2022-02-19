export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Best Hunter Wine',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' },
      { rel: 'stylesheet', href: 'lib/galaxy-carousel/galaxy-carousel.css' }
    ],
    script: [
      { src: '/script/main.js', type: 'text/javascript', body: true, defer: true },
      { src: '/lib/galaxy-carousel/galaxy-carousel.js', type: 'text/javascript', body: true, defer: true },
      { src: '/lib/graphic/graphic.js', type: 'text/javascript', body: true, defer: true }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/main.scss', '~/assets/style/main.min.css'
  ],

  render: {
    csp: true
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['@/assets/style/main.scss'] // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  publicRuntimeConfig: {
    globaltokenAPI: process.env.TOKEN_API || 'BZIYTMQCY86A1P6OORHFK6SZSZR01PA3',
    NomeApp: process.env.APP_NOME || 'BHW'
  },
  env: {

  }
}
