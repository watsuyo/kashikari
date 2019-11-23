<template>
  <div>
    <div>
      アイテム一覧 {{ items.length }} 件
    </div>
    <div v-for="(item , key) in items" :key="key">
      <div @click="$router.push(`items/${item.id}`)">
        <img :src="item.mainImageUrl" alt="">
        <div>{{ item.name }}</div>
        <div>{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  computed: {
    items () {
      return this.$store.getters['item/all']
    }
  },
  async asyncData ({ store }) {
    await store.dispatch('item/fetchItems')
    // await store.dispatch('user/fetchByUserId')
  }
})
</script>

<style lang="stylus" scoped>

</style>
