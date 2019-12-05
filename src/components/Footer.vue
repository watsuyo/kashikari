<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="footer__contents">
        <div class="footer__content" @click="$router.push('/items')">
          借りる
        </div>
        <div class="footer__content" @click="$router.push('/post')">
          貸す
        </div>
        <div class="footer__content" @click="$router.push('/items')">
          リスト
        </div>
        <div class="footer__content" @click="$router.push('/items')">
          マイページ
        </div>
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
@media (min-width:1180px) {
  .footer-wrapper {
    min-height: $header-height;
    display: block;
  }

  .footer {
    position: fixed;
    text-align: center;
    width: 100%;
    bottom: 0;
    height: $header-height;

    &__contents {
      position: absolute;
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }
  }
}

@media (max-width:1180px) {
  .footer-wrapper {
    min-height: $header-height;
    display: block;
  }

  .footer {
    position: fixed;
    text-align: center;
    width: 100%;
    height: $header-height;
    bottom: 0;
    left: 0;

    &__contents {
      position: absolute;
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }
  }
}
</style>
