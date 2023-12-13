// import rteSchema from './rte_schema'
// import axios from 'axios'
import { getRoutes } from './dynamic_routes'
import { defineNuxtConfig } from 'nuxt/config'

// console.log(await getRoutes())

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',
  generate: {
    // Error page for services (such as Netlify)
    // fallback: false,
    // routes: null,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: 'Colabra',
  //   titleTemplate: '%s | Colabra',
  //   htmlAttrs: {
  //     lang: 'en',
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //     { name: 'format-detection', content: 'telephone=no' },
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
  //     // Font family
  //     { rel: 'stylesheet', href: 'https://use.typekit.net/wbu3yen.css' },
  //     { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  //     {
  //       rel: 'preconnect',
  //       href: 'https://fonts.gstatic.com',
  //       crossorigin: true,
  //     },
  //     {
  //       href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap',
  //       rel: 'stylesheet',
  //     },
  //   ],
  //   script: [
  //     // Plausible Analytics tracking setup
  //     {
  //       defer: true,
  //       'data-domain': 'colabra.ai',
  //       'data-api':
  //         'https://kielelezo.colabra4615.workers.dev/kielelezo-s/event',
  //       src: 'https://kielelezo.colabra4615.workers.dev/kielelezo-s/script.js',
  //     },
  //     {
  //       src: 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js',
  //     },
  //     { src: '/lab_redirect.js' },
  //   ],
  //   __dangerouslyDisableSanitizers: ['innerHTML'],
  // },

  // Environment variables
  // env: {
  //   sbVersion: process.env.STORYBLOK_VERSION,
  //   sbToken: process.env.STORYBLOK_ACCESSTOKEN,
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/site-config.js',
    // '~/plugins/mdi-vue.js',
    // '~/plugins/rich-text-renderer.js',
    // '~/plugins/sanity-image-builder.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   // https://go.nuxtjs.dev/eslint
  //   // '@nuxtjs/eslint-module',
  //   // https://go.nuxtjs.dev/tailwindcss
  //   // '@nuxtjs/tailwindcss',
  //   // '@nuxt/image',
  //   // 'vue-plausible',
  //   // '@nuxtjs/sanity/module',
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // [
    // pending-deprecation
    // '@storyblok/nuxt',
    // {
    //   accessToken: process.env.STORYBLOK_ACCESSTOKEN,
    //   cacheProvider: 'memory',
    //   // richTextSchema: rteSchema,
    // },
    // ],
    // '@nuxtjs/gtm',
    // '@nuxtjs/sitemap',
    // ['nuxt-canonical', { baseUrl: process.env.BASE_URL }],
    // '@nuxtjs/markdownit',
    // '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sanity',
  ],
  // sanity: {
  //   globalHelper: true,
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  // Nuxt Image module configuration
  // image: {
  //   storyblok: {
  //     baseURL: 'https://img2.storyblok.com',
  //   },
  // },

  // Vue plausible module configuration
  // plausible: {
  //   domain: process.env.BASE_URL,
  // },
  // publicRuntimeConfig: {
  //   plausible: {
  //     domain: process.env.BASE_URL,
  //   },
  // },

  // Google tag manager configuration
  // gtm: {
  //   id: process.env.GTM_ID,
  // },

  // Sitemap configuration
  // sitemap: {
  //   hostname: process.env.BASE_URL,
  //   trailingSlash: true,
  // },

  // markdownit: {
  //   html: true,
  //   runtime: true, // Support `$md()`
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['mdi-vue'],
  },
})
