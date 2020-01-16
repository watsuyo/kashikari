import { Route } from 'vue-router'
import { Context } from '@nuxt/types'

export default ({ redirect, route }: Context) => {
  console.log('ssssssssss', route,!isPublic(route))
  return !isPublic(route) ? redirect('/login') : ''
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
