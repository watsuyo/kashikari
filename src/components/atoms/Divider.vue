<template>
  <div :class="{section, delimiter}" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    section: {
      type: Boolean,
      required: false
    },
    delimiter: {
      type: Boolean,
      required: false
    }
  }
})
</script>

<style lang="scss" scoped>
.section {
  border-top: 1px solid rgba(0,0,0,0.08);
  width: 100%;
}
.delimiter {
  border-top: solid #000 2px;
  width: 24px;
  margin: 12px auto 12px auto;
}
</style>
