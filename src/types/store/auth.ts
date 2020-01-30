import { ExActionContext } from 'vuex'
import { User } from 'firebase'

export interface State {
  // 実際にはJWTの拡張された型が入っている
  user?: Object | null
  errorCode: string
}

export interface Getters {
  currentUser: User | null
  isGuest: boolean
  errorCode: string
}

export interface RootGetters {
  'auth/currentUser': Getters['currentUser']
  'auth/errorCode': Getters['errorCode']
}

export interface Mutations {
  setUser: { user: Object | null }
  setErrorCode: { errorCode: string}
}

export interface RootMutations {
  'auth/setUser': Mutations['setUser']
  'auth/setErrorCode': Mutations['setErrorCode']
}

export interface Actions {
  authUserWithGoogle: any
  signOut: any
}

export interface RootActions {
  'auth/authUserWithGoogle': Actions['authUserWithGoogle']
  'auth/signOut': Actions['signOut']
}

export type AuthStoreContext = ExActionContext<
    State,
    Actions,
    Getters,
    Mutations
  >
