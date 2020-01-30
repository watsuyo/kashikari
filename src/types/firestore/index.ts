import firebase from 'firebase'

export interface UserData {
  firstName: string
  lastName: string
  email: string
  tell: string
  address: {
    zipcode: string
    region: string
    locality: string
    streetAddress: string
    extendedAddress: string
  }
  follows: DocumentReference[]
  itemFavorites: DocumentReference[]
  userIconImageUrl: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface ItemData {
  name: string
  description: string
  atention: string
  warranty: string
  mainImageUrl: string
  subImageUrls: string[]
  price: number
  lateFee: number
  lendingPeriod: number
  status: number
  userRef: DocumentReference
  deliveryMethodRefs: DocumentReference[]
  categoryRef: DocumentReference
  createdAt: Timestamp
  updatedAt: Timestamp
}

export type QuerySnapshot = firebase.firestore.QuerySnapshot
export type DocumentSnapshot = firebase.firestore.DocumentSnapshot
export type DocumentReference = firebase.firestore.DocumentReference
export type FirestoreError = firebase.firestore.FirestoreError
export type Timestamp = firebase.firestore.Timestamp
