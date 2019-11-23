import { VuexMutations } from 'vuex'
import { State, Mutations } from '~/types/store/user'

const mutations: VuexMutations<State, Mutations> = {
  setUser (state, payload) {
    state.currentUser = payload.user
  },

  setErrorCode (state, payload) {
    state.errorCode = payload.errorCode
  }
}

export default mutations
