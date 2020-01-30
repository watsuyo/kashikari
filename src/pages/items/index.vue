<template>
  <div>
    <div class="items-wrapper">
      <div v-for="(item , key) in items" :key="key" class="items">
        <div class="item" @click="$router.push(`items/${item.id}`)">
          <div class="item__user">
            <Img :img-url="item.userIconImageUrl" icon-xs />
            <div class="item__user__name">
              {{ item.userName }}
            </div>
          </div>
          <Img :img-url="item.mainImageUrl" item-l />
          <div class="item__name">
            {{ item.name | truncate }}
          </div>
          <div class="item__price">
            {{ item.price | notation }}/泊
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Img from '~/components/atoms/Img.vue'

export default Vue.extend({
  components: {
    Img
  },

  computed: {
    items () {
      return this.$store.getters['item/all']
    }
  },

  async asyncData ({ store }) {
    await store.dispatch('item/fetchItems')
  }
})
</script>

<style lang="scss" scoped>
.item__user {
  top: 50%;

  &__name{
    padding: 4px;
  }
}

.items {
  width: 50%;
  display: inline-block;
}

.item {
  padding: 0 8px;
  margin-bottom: 16px;
  width: 160px;
  &__name {
    text-align: left;
  }
  &__price {
    text-align: right;
  }

  &__user {
    display: flex;
  }
}
</style>
