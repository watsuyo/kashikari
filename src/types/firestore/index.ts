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
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}

export interface ItemData {
  name: string
  description: string
  mainImageUrl: string
  subImageUrls: string[]
  price: number
  status: number
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}

export type QuerySnapshot = firebase.firestore.QuerySnapshot
export type DocumentSnapshot = firebase.firestore.DocumentSnapshot
export type FirestoreError = firebase.firestore.FirestoreError
