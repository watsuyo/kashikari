import 'vuex'
import * as Auth from '~/types/store/auth'
import * as Item from '~/types/store/item'

declare module 'vuex' {
  type RootState = {
    auth: Auth.State
    item: Item.State
  }

  type RootGetters = Auth.RootGetters &
    Item.RootGetters

  type RootMutations = Auth.RootMutations &
    Item.RootMutations

  type RootActions = Auth.RootActions &
    Item.RootActions
}
