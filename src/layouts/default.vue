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

interface LocalData {
  titleList: string[]
}

export default Vue.extend({
  components: {
    Header,
    Footer
  },

  data () {
    return {
      titleList: [
        '借りる',
        '貸す',
        'リスト',
        'マイページ'
      ]
    }
  },

  computed: {
    title (): string {
      return '借りる'
    }
  }
})
</script>

<style lang="scss" scoped>
div {
  font-family: $base-font;
}
</style>
