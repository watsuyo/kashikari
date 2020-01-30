import { VuexActions } from 'vuex'
import Cookies from 'universal-cookie'
import {
  State,
  Getters,
  Mutations,
  Actions,
  AuthStoreContext
} from '~/types/store/auth'
import {
  Auth,
  GoogleAuthProvider
} from '~/plugins/firebase'
import { UserCredential, createAuthUserFromUser } from '~/types/auth'
import { addUser } from '~/firestore/user'

async function createSession (
  ctx: AuthStoreContext,
  userCredential: UserCredential
) {
  const { user } = userCredential
  if (!user) {
    return
  }
  const authUser = createAuthUserFromUser(user)
  const cookies = new Cookies()
  const idToken = await user.getIdToken()
  cookies.set('__session', idToken)
  await addUser(user.uid, user.email)
    .catch(async () => {
      await actions.signOut(ctx, null)
    })
  ctx.commit('setUser', { user: authUser })
}

const actions: VuexActions<State, Actions, Getters, Mutations> = {
  async authUserWithGoogle (ctx) {
    const userCredential = await Auth.signInWithPopup(
      GoogleAuthProvider
    )
    if (!userCredential) { return }
    await createSession(ctx, userCredential)
  },

  async signOut (ctx) {
    await Auth.signOut()
    ctx.commit('setUser', { user: null })
    const cookies = new Cookies()
    cookies.remove('__session')
  }
}

export default actions
