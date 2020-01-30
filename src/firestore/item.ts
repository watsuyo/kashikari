import { Category, Item, DeliveryMethod } from '~/types/store/item'
import { Firestore } from '~/plugins/firebase'

import { ItemData, DocumentSnapshot } from '~/types/firestore'
import { UserData } from '~/types/firestore/index'

async function buildItemObject (itemDoc: DocumentSnapshot): Promise<Item> {
  const itemData = await itemDoc.data() as ItemData
  const userDoc = await itemData.userRef.get()
  const userData = userDoc.data() as UserData

  const deliveryMethods = await Promise.all(itemData.deliveryMethodRefs.map(async (deliveryMethodRef) => {
    const deliveryMethodDoc = await deliveryMethodRef.get()
    const deliveryMethodData = deliveryMethodDoc.data() as DeliveryMethod
    return deliveryMethodData
  }))

  const categoryDoc = await itemData.categoryRef.get()
  const categoryData = categoryDoc.data() as Category

  const userName = userData.lastName + ' ' + userData.firstName
  const userIconImageUrl = userData.userIconImageUrl

  return {
    id: itemDoc.id,
    name: itemData.name,
    description: itemData.description,
    atention: itemData.atention,
    warranty: itemData.warranty,
    mainImageUrl: itemData.mainImageUrl,
    subImageUrls: itemData.subImageUrls,
    price: itemData.price,
    lateFee: itemData.lateFee,
    lendingPeriod: itemData.lendingPeriod,
    userName,
    userIconImageUrl,
    deliveryMethods,
    category: categoryData,
    isPublic: itemData.isPublic,
    createdAt: itemData.createdAt,
    updatedAt: itemData.updatedAt
  }
}

/**
 * Item型に整形してPromiseを返します
 *
 * @param itemId
 */
export async function getItems (): Promise<Item[]> {
  const querySnapshot = await Firestore.collection(`items`).get()
  return Promise.all(querySnapshot!.docs.map(async (itemDoc) => {
    const item = await buildItemObject(itemDoc)
    return item
  })) || []
}

/**
 * Item型に整形してPromiseを返します
 *
 * @param itemId
 */
export async function getItem (itemId: string) {
  const itemDoc = await Firestore.collection('items').doc(itemId).get()
  return buildItemObject(itemDoc)
}
