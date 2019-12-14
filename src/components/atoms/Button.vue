<template>
  <button :class="{ inverted, disabled, spaceM }" :disabled="disabled" @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    inverted: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    spaceM: {
      type: Boolean,
      required: false,
      default: false
    },
    // 内部リンク用
    to: {
      type: String,
      required: false,
      default: null
    },
    // 外部リンク用
    href: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    click () {
      if (this.to) {
        this.$router.push(this.to)
      } else if (this.href) {
        location.href = this.href
      }
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  background-color: #0460ff;
  border: 1px #0460ff solid;
  border-radius: 2px;
  color: #fff;
  font-weight: bold;
  margin: 8px 0;
  padding: 12px 0;
  width: 100%;
}
button.spaceM {
  margin: 0 28px;
  font-size: 20px;
}
button.inverted {
  background-color: #fff;
  color: #000;
}
button.disabled {
  border: none;
  background: rgba(20,21,24,0.5);
}
</style>
