<template>
  <div>
    <img :src="item.mainImageUrl" alt="">
    <div>{{ item.name }}</div>
    <div v-for="(imageUrl, key) in item.subImageUrls" :key="key">
      <img :src="imageUrl" alt="">
    </div>
    <div>{{ item.description }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _find from 'lodash/find'
import { Item } from '~/types/store/item'
import { getItem } from '~/firestore/item'

interface AsyncData {
  item: Item
}

export default Vue.extend({

  computed: {
    items () {
      return this.$store.getters['item/all']
    }
  },
  async asyncData ({ store, route }): Promise<AsyncData> {
    await store.dispatch('item/fetchItems')

    let item = _find(store.getters['item/all'], (item) => {
      return item.id === route.params.itemId
    })
    if (!item) {
      item = await getItem(route.params.itemId)
    }

    return { item }
  }
})
</script>

<style lang="stylus" scoped>

</style>
