import { Firestore, Timestamp } from '~/plugins/firebase'
import { User } from '~/types/store/user'
import { UserData } from '~/types/firestore'

/**
 * ユーザー追加
 *
 * @param userId
 * @param address
 */
export async function addUser (userId: string, email?: string | null) {
  const docRef = Firestore.collection('users').doc(userId)
  const doc = await docRef.get()
  if (!doc.exists) {
    // guestの場合userId以外は全てnullableであるため
    return docRef.set({
      email: email || '',
      // name: name || '',
      termVersion: 1,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    })
  }
}

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
