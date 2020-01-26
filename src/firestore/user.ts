import { Firestore } from '~/plugins/firebase'
import { User } from '~/types/store/user'
import { UserData } from '~/types/firestore'
import { Item } from '~/types/store/item'

/**
 * ユーザー取得
 *
 * @param userId
 */
export async function getUser (userId: string): Promise<User> {
  const userDoc = await Firestore.collection('users').doc(userId).get()
  const userData = userDoc.data() as UserData

  const address = userData.address !== undefined ? {
    zipcode: (userData.address.zipcode !== undefined) ? userData.address.zipcode : '',
    region: (userData.address.region !== undefined) ? userData.address.region : '',
    locality: (userData.address.locality !== undefined) ? userData.address.locality : '',
    streetAddress: (userData.address.streetAddress !== undefined) ? userData.address.streetAddress : '',
    extendedAddress: (userData.address.extendedAddress !== undefined) ? userData.address.extendedAddress : ''
  } : null

  const followRefs = userData.follows
  const follows = await Promise.all(followRefs.map(async (followRef) => {
    const followDoc = await followRef.get()
    const deliveryMethodData = followDoc.data() as User
    return deliveryMethodData
  }))

  const itemFavoriteRefs = userData.itemFavorites
  const itemFavorites = await Promise.all(itemFavoriteRefs.map(async (itemFavoriteRef) => {
    const itemFavoriteDoc = await itemFavoriteRef.get()
    const itemFavoriteData = itemFavoriteDoc.data() as Item
    return itemFavoriteData
  }))

  return {
    id: userDoc.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    address,
    follows,
    itemFavorites,
    userIconImageUrl: userData.userIconImageUrl,
    createdAt: userData.createdAt,
    updatedAt: userData.updatedAt
  }
}
