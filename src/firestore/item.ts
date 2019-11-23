import { Firestore } from '~/plugins/firebase'
import { Item } from '~/types/store/item'
import { ItemData, DocumentSnapshot } from '~/types/firestore'

async function buildItemObject (itemDoc: DocumentSnapshot): Promise<Item> {
  const itemData = await itemDoc.data() as ItemData
  return {
    id: itemDoc.id,
    name: itemData.name,
    description: itemData.description,
    mainImageUrl: itemData.mainImageUrl,
    subImageUrls: itemData.subImageUrls,
    price: itemData.price,
    status: itemData.status,
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
  if (querySnapshot) {
    return Promise.all(querySnapshot.docs.map(async (itemDoc) => {
      const item = await buildItemObject(itemDoc)
      return item
    }))
  }

  return []
}

/**
 * Item型に整形してPromiseを返します
 *
 * @param itemId
 */
export async function getItem (itemId: string): Promise<Item> {
  const itemDoc = await Firestore.collection('items').doc(itemId).get()
  return buildItemObject(itemDoc)
}
