import path from 'path'
import { Configuration } from '@nuxt/types'

const config: Configuration = {
  srcDir: 'src',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  env: {
    FIREBASE_API_KEY: 'AIzaSyBsUyYDJ8KbroNLDCJ9O5szouFkxbBWUWI',
    FIREBASE_AUTH_DOMAIN: 'kashika-dev.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://kashika-dev.firebaseio.com',
    FIREBASE_PROJECT_ID: 'kashika-dev',
    FIREBASE_STORAGE_BUCKET: 'kashika-dev.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '157068636104',
    FIREBASE_APP_ID: '1:157068636104:web:c2210f4f9c2ffeff3adafd'
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],

  webfontloader: {
    google: {
      families: ['Roboto']
    }
  },

  styleResources: {
    scss: [
      '~assets/scss/variable.scss',
      '~assets/scss/common.scss'
    ]
  },

  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: {
            loader: 'css-loader'
          },
          scss: {
            loader: 'sass-loader',
            options: {
              data: '@import "common.scss";',
              includePaths: path.resolve(__dirname, './src/assets/scss/')
            }
          }
        }
      }
    }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend () {
    }
  }
}

export default config
