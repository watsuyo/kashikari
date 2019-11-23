import { VuexActions } from 'vuex'
import { State, Getters, Mutations, Actions, Item } from '~/types/store/item'
import { getItems } from '~/firestore/item'

const actions: VuexActions<State, Actions, Getters, Mutations> = {
  async fetchItems (ctx) {
    const items = await getItems()
      .catch((err) => {
        ctx.commit('setErrorCode', { errorCode: err.code })
      }) as Item[]

    const payload = { items }
    ctx.commit('setItems', payload)
  }
}

export default actions
