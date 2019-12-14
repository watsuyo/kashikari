<template>
  <div>
    <img :src="imgUrl" :class="{'icon-xs': iconXs, 'item-l': itemL, 'item-xl': itemXl}">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    imgUrl: {
      default: '',
      type: String,
      require: true
    },

    iconXs: {
      default: false,
      type: Boolean,
      require: true
    },

    itemL: {
      default: false,
      type: Boolean,
      require: true
    },

    itemXl: {
      default: false,
      type: Boolean,
      require: true
    }
  }
})
</script>

<style lang="scss" scoped>
img {
	object-fit: cover;
}

.icon-xs {
  height: 32px;
  width: 32px;
}

.item-l {
  height: 160px;
  width: 160px;
}

.item-xl {
  height: 375px;
  width: 100%;
}
</style>
