<template>
  <div>
    <h1>Kashikari</h1>
    <template v-if="!isCookie">
      <button @click="googleLogin">
        ログイン
      </button>
    </template>
    <template v-else>
      ログイン中
      <div>
        <button @click="logout">
          ログアウト
        </button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cookies from 'universal-cookie'

export default Vue.extend({
  computed: {
    isCookie (): string {
      const cookies = new Cookies()
      return cookies.get('__session')
    }
  },

  methods: {
    googleLogin () {
      this.$store.dispatch('auth/authUserWithGoogle')
    },

    logout () {
      this.$store.dispatch('auth/signOut')
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
