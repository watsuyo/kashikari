<template>
    <select v-bind:name="object.name">
      <option disabled="disabled" selected="selected">選択してください</option>
      <option
        v-for="(item, index) in object.items"
        v-bind:key="index"
        v-bind:value="item.name">{{ item.value }}</option>
    </select>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export type Item = {
  inlineName: String,
  value: String
};

export type Select = {
  name: String,
  items: Array<Item[]>
}

export default Vue.extend({
  name: 'Select',
  props: {
    object: Object as PropType<Select>
  }
})
</script>

<style lang="scss" scoped>
</style>
