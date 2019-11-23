import { VuexGetters } from 'vuex'
import { State, Getters } from '~/types/store/user'

const getters: VuexGetters<State, Getters> = {
  currentUser: (state: State) => state.currentUser,
  errorCode: (state: State) => state.errorCode
}

export default getters
