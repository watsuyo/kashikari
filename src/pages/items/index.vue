<template>
  <div>
    <div v-for="(item , key) in items" :key="key" class="items">
      <div class="item" @click="$router.push(`items/${item.id}`)">
        <div class="item__user">
          <img :src="item.user.userIconImageUrl" class="item__user__img">
          <div>{{ item.user.lastName }} {{ item.user.firstName }}</div>
        </div>
        <img :src="item.mainImageUrl">
        <div class="item__name">
          {{ item.name }}
        </div>
        <div class="item__price">
          {{ item.price }}/泊
        </div>
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
  }
})
</script>

<style lang="scss" scoped>
.items {
  width: 50%;
  display: inline-block;
}

.item {
  &__name {
    text-align: left;
  }
  &__price {
    text-align: right;
  }

  &__user {
    display: flex;

    &__img {
      width: 30%;
      object-fit: cover;
    }
  }
}
</style>
