<template>
  <div class="footer">
    <div class="footer__contents">
      <div @click="$router.push('/items')">
        借りる
      </div>
      <div @click="$router.push('/post')">
        貸す
      </div>
      <div @click="$router.push('/items')">
        リスト
      </div>
      <div @click="$router.push('/items')">
        マイページ
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
.footer {
  position: fixed;
  display: flex;
  text-align: center;
  width: 100%;
  height: $header-height;
  bottom: 0;
  left: 0;

  &__contents {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    bottom: 20px;
    width: 100%;
  }
}
</style>
