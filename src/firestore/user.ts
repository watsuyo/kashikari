import { Firestore } from '~/plugins/firebase'
import { User } from '~/types/store/user'
import { UserData } from '~/types/firestore'

/**
 * ユーザー取得
 *
 * @param userId
 */
export async function getUser (userId: string): Promise<User> {
  const userDoc = await Firestore.collection('users').doc(userId).get()
  const user = userDoc.data() as UserData

  const address = user.address !== undefined ? {
    zipcode: (user.address.zipcode !== undefined) ? user.address.zipcode : '',
    region: (user.address.region !== undefined) ? user.address.region : '',
    locality: (user.address.locality !== undefined) ? user.address.locality : '',
    streetAddress: (user.address.streetAddress !== undefined) ? user.address.streetAddress : '',
    extendedAddress: (user.address.extendedAddress !== undefined) ? user.address.extendedAddress : ''
  } : null

  return {
    id: userDoc.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  }
}
