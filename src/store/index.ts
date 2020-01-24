import { Context } from '@nuxt/types'
import { ExStore } from 'vuex/types/index'

export const strict = false

export const actions = {
  async nuxtClientInit (store: ExStore, { req, app: { $getAuthUserFromCookie } }: Context) {
    if (!req) { return }
    const { cookie } = req.headers
    if (!cookie) { return }
    const user = await $getAuthUserFromCookie(cookie)
    store.commit('auth/setUser', { user })
  }
}
