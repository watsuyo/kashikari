import { Timestamp } from '../firestore/index'

export interface Item {
  id: string
  name: string
  description: string
  atention: string
  warranty: string
  mainImageUrl: string
  subImageUrls: string[]
  price: number
  lateFee: number
  lendingPeriod: number
  userName: string,
  userIconImageUrl: string,
  deliveryMethods: DeliveryMethod[]
  category: Category
  status: number
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

export interface DeliveryMethod {
  index: number
  method: string
}

export interface Category {
  index: number
  category: string
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
