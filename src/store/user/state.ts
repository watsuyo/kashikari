import { State } from '~/types/store/user'

const state = (): State => ({
  currentUser: null,
  errorCode: ''
})

export default state
