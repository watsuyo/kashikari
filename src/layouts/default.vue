<template>
  <div>
    <Header :title="title" />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer
  },

  computed: {
    title () {
      if (this.$route.name === 'items') {
        return '借りる'
      } else if (this.$route.name === 'post') {
        return '貸す'
      }

      return !this.$route.name && ''
    }
  }
})
</script>

<style lang="scss" scoped>
div {
  font-family: $base-font;
}
</style>
