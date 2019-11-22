<template>
  <div>
    <Header />
    <nuxt class="nuxt" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'

export default Vue.extend({
  components: {
    Header
  }
})
</script>

<style lang="scss" scoped>
div {
  font-family: $base-font;
}

.nuxt {
  margin-top: $header-height;
}
</style>
