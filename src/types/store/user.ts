import firebase from 'firebase'

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  address: {
    zipcode: string
    region: string
    locality: string
    streetAddress: string
    extendedAddress: string
  } | null
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}

export interface State {
  currentUser: User | null
  errorCode: string
}

export interface Getters {
  currentUser: User | null
  errorCode: string
}

export interface RootGetters {
  'user/currentUser': Getters['currentUser']
  'user/errorCode': Getters['errorCode']
}

export interface Mutations {
  setUser: { user: User }
  setErrorCode: { errorCode: string}
}

export interface RootMutations {
  'user/setUser': Mutations['setUser']
  'user/setErrorCode': Mutations['setErrorCode']
}

export interface Actions {
  fetchByUserId: { userId: string }
}

export interface RootActions {
  'user/fetchByUserId': Actions['fetchByUserId']
}
