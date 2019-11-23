import Vue from 'vue'
import { app, auth, firestore } from 'firebase'
import { EnvironmentVariables } from '~/plugins/environments'

declare module 'vue/types/vue' {
  interface Vue {
    $firebase: app.App
    $auth: auth.Auth
    $firestore: firestore.Firestore
    $environments: EnvironmentVariables
  }
}
