export type UserCredential = firebase.auth.UserCredential
export type AuthCredential = firebase.auth.AuthCredential
export type AuthError = firebase.auth.Error

export interface AuthUser {
  uid: string
}

export function createAuthUserFromUser (user: firebase.User): AuthUser {
  return {
    uid: user.uid
  }
}
