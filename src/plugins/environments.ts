import { Context } from '~/types/nuxt'

export type EnvironmentVariables = {
  NODE_ENV: string
  browser: boolean
  client: boolean
  mode: 'spa' | 'universal'
  modern: boolean
  server: boolean
  static: boolean
  FIREBASE_API_KEY: string
  FIREBASE_AUTH_DOMAIN: string
  FIREBASE_DATABASE_URL: string
  FIREBASE_PROJECT_ID: string
  FIREBASE_STORAGE_BUCKET: string
  FIREBASE_MESSAGING_SENDER_ID: string
  FIREBASE_APP_ID: string
}

export const environments: EnvironmentVariables = {
  NODE_ENV: process.env.NODE_ENV!,
  browser: process.browser!,
  client: process.client!,
  mode: process.mode!,
  modern: process.modern!,
  server: process.server!,
  static: process.static!,
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY!,
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN!,
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL!,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID!,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET!,
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID!,
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID!
}

// TODO: nuxtアップグレード時に適切なPlugin型に設定する
export default (_: Context, inject: (name: string, v: any) => any) => {
  inject('environments', environments)
}
