import { Plugin } from '@nuxt/types'
import admin from 'firebase-admin'
import Cookie from 'universal-cookie'
import { environments } from '~/plugins/environments'
import { AuthUser } from '~/types/auth'

function getAdminApp (): admin.app.App {
  if (admin.apps.length) { return admin.app() }
  return admin.initializeApp({ projectId: environments.FIREBASE_PROJECT_ID })
}

async function getAuthUserFromCookie (cookieStr: string): Promise<AuthUser | null> {
  if (!cookieStr) { return null }
  const cookie = new Cookie(cookieStr)
  const sessionCookieStr = cookie.get('__session')
  const res = await getAdminApp().auth().verifyIdToken(sessionCookieStr).catch(() => null)
  if (!res) { return null }
  return {
    uid: res.uid
  }
}

const plugin: Plugin = (_, inject) => {
  inject('getAuthUserFromCookie', getAuthUserFromCookie)
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $getAuthUserFromCookie: typeof getAuthUserFromCookie
  }
}

export default plugin
