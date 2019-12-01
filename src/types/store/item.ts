import firebase from 'firebase'
import { UserData } from '../firestore/index'

export interface Item {
  id: string
  name: string
  description: string
  mainImageUrl: string
  subImageUrls: string[]
  price: number
  user: UserData
  status: number
  createdAt?: firebase.firestore.Timestamp
  updatedAt?: firebase.firestore.Timestamp
}

export interface State {
  all: Item[]
  errorCode: string
}

export interface Getters {
  all: Item[]
  errorCode: string
}

export interface RootGetters {
  'item/all': Getters['all']
  'item/errorCode': Getters['errorCode']
}

export interface Mutations {
  setItems: { items: Item[] }
  setErrorCode: { errorCode: string}
}

export interface RootMutations {
  'item/setItems': Mutations['setItems']
  'item/setErrorCode': Mutations['setErrorCode']
}

export interface Actions {
  fetchItems: { brandId: string}
}

export interface RootActions {
  'item/fetchItems': Actions['fetchItems']
}
