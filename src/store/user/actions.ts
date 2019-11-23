import { VuexActions } from 'vuex'
import { State, Getters, Mutations, Actions, User } from '~/types/store/user'
import { getUser } from '~/firestore/user'

const actions: VuexActions<State, Actions, Getters, Mutations> = {
  async fetchByUserId (ctx, { userId }) {
    const user = await getUser(userId)
      .catch((err) => {
        ctx.commit('setErrorCode', { errorCode: err.code })
      }) as User

    const payload = { user }
    ctx.commit('setUser', payload)
  }
}

export default actions
