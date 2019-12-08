<template>
  <div class="header-wrapper">
    <div class="header">
      <nav>
        <div class="header__contents">
          <div class="header__content">
            {{ title }}
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      windowWidth: 0,
      showDrawer: false
    }
  },
  mounted () {
    this.calculateWindowWidth()
    window.addEventListener('resize', this.calculateWindowWidth)
  },
  methods: {
    calculateWindowWidth () {
      this.windowWidth = window.innerWidth
      this.showDrawer = this.windowWidth > 1180
    }
  }
})
</script>

<style lang="scss" scoped>
.header-wrapper {
  min-height: $header-height;
  display: block;
}

.header {
  position: fixed;
  text-align: center;
  width: 100%;
  height: $header-height;
  top: 0;
  left: 0;
  z-index: 100;

  &__contents {
    position: absolute;
    padding: 30px 0;
    width: 100%;

    &::after{
      clear: both;
      content: '';
      display: block;
    }
  }
}
</style>
