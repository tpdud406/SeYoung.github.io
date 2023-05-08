import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '이세영 - 소개 페이지',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '프론트엔드 개발자 이세영입니다.',
      },
    ],
    link: [
      /* How to use Web Font (Spoka Sans) in Nuxt
      ref: https://ichi.pro/ko/vuetify-js-mich-nuxt-jseseo-gibon-geulkkol-byeongyeong-62212184407824
      ref2 (font Official): https://spoqa.github.io/spoqa-han-sans/ko-KR/
      */
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
      },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // ref : https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
    // ref : https://typescript.nuxtjs.org/guide/setup
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.accent3,
          accent: colors.blue.accent4,
          secondary: colors.yellow.lighten1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        dark: {
          primary: colors.blue.accent3,
          accent: colors.blue.accent4,
          secondary: colors.yellow.lighten1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
