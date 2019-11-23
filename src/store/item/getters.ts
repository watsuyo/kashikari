import { VuexGetters } from 'vuex'
import { State, Getters } from '~/types/store/item'

const getters: VuexGetters<State, Getters> = {
  all: (state: State) => state.all,
  errorCode: (state: State) => state.errorCode
}

export default getters
