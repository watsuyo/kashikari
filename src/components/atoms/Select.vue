<template>
    <select>
      <option disabled="disabled" selected="selected">選択してください</option>
      <option
        v-for="(item, index) in items"
        v-bind:key="index"
        v-bind:value="item.name">{{ item.value }}</option>
    </select>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export type Item = {
    name: String,
    value: String
}

export default Vue.extend({
  name: 'Select',
  props: {
    items: Array as PropType<Item[]>
  }
})
</script>

<style lang="scss" scoped>
</style>
