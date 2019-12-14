<template>
  <div>
    <Img :img-url="item.mainImageUrl" item-xl />
    <div class="item__name">
      {{ item.name }}
    </div>
    <!-- サブ画像の持ち方は検討する -->
    <!-- <div v-for="(imageUrl, key) in item.subImageUrls" :key="key">
      <Img :img-url="imageUrl" itemXl />
    </div> -->
    <div class="item__description">
      {{ item.description }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _find from 'lodash/find'
import { Item } from '~/types/store/item'
import { getItem } from '~/firestore/item'
import Img from '~/components/atoms/Img.vue'

interface AsyncData {
  item: Item
}

export default Vue.extend({
  components: {
    Img
  },

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

<style lang="scss" scoped>
.item {
  &__name {
    font-size: 20px;
    font-weight: bold;
    padding: 26px 70px 26px 24px;
  }

  &__description {
    padding: 26px 24px;
  }
}
</style>
