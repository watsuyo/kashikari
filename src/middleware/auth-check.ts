import { Middleware } from '@nuxt/types'
import { Route } from 'vue-router'
import { Auth } from '~/plugins/firebase'

const middleware: Middleware = ({ route, redirect }) => {
  Auth.onAuthStateChanged((user) => {
    return !user && !isPublic(route) ? redirect('/login') : ''
  })
}

/**
 * 認証なしで閲覧可能なpathかチェックします
 *
 * @param {*} route
 */
function isPublic (route: Route) {
  if (
    route.path === '/' ||
    route.path.match(/login/) ||
    route.path.match(/items*/) ||
    route.path.match(/list/)
  ) {
    return true
  } else {
    return false
  }
}
export default middleware
