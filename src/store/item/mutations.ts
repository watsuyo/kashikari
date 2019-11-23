import { VuexMutations } from 'vuex'
import { State, Mutations } from '~/types/store/item'

const mutations: VuexMutations<State, Mutations> = {
  setItems (state, payload) {
    state.all = payload.items
  },

  setErrorCode (state, payload) {
    state.errorCode = payload.errorCode
  }
}

export default mutations
