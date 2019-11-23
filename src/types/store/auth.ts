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
  // createAnonymousUser,
  // deleteAnonymousUser,
  createUserWithEmailAndPassword: { email: string, password: string }
  authUserWithEmailAndPassword: { email: string, password: string }
  // authUserWithGoogle
  // authUserWithFacebook
  // signOut
  // updateEmail
  // updatePassword
}

export interface RootActions {
  // 'auth/createAnonymousUser': Actions['createAnonymousUser']
  // 'auth/deleteAnonymousUser': Actions['deleteAnonymousUser']
  'auth/createUserWithEmailAndPassword': Actions['createUserWithEmailAndPassword']
  'auth/authUserWithEmailAndPassword': Actions['authUserWithEmailAndPassword']
  // 'auth/authUserWithGoogle': Actions['authUserWithGoogle']
  // 'auth/authUserWithFacebook': Actions['authUserWithFacebook']
  // 'auth/signOut': Actions['signOut']
  // 'auth/updateEmail': Actions['updateEmail']
  // 'auth/updatePassword': Actions['updatePassword']
}

export type AuthStoreContext = ExActionContext<
    State,
    Actions,
    Getters,
    Mutations
  >
