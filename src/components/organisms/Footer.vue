<template>
  <div class="footer">
    <div class="footer__contents">
      <div @click="goto('/items')">
        借りる
      </div>
      <div @click="goto('/post')">
        貸す
      </div>
      <div @click="goto('/list')">
        リスト
      </div>
      <div @click="goto('/mypage')">
        マイページ
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cookies from 'universal-cookie'

export default Vue.extend({
  data () {
    return {
      windowWidth: 0,
      showDrawer: false
    }
  },

  computed: {
    isCookie (): string {
      const cookies = new Cookies()
      return cookies.get('__session')
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
    },

    goto (to: string) {
      this.$router.push(to)
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
