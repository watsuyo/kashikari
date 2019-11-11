<template>
  <div class="header">
    <div class="drawer">
      <input v-if="!showDrawer" id="drawerCheckbox" class="drawer__checkbox" type="checkbox">
      <label class="drawer__icon" for="drawerCheckbox">
        <span class="drawer__icon-parts" />
      </label>
      <label class="drawer__overlay" for="drawerCheckbox" />
      <nav :class="{drawer__menu: !showDrawer}">
        <div class="header__contents">
          <div class="header__content">
            Top
          </div>
          <div class="header__content">
            Abouts
          </div>
          <div class="header__content">
            Skils
          </div>
          <div class="header__content">
            Works
          </div>
          <div class="header__content">
            Contacts
          </div>
        </div>
      </nav>
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
  beforeDestroy () {
    window.removeEventListener('resize', this.calculateWindowWidth)
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
  .header {
    position: absolute;

    &__contents {
      position: fixed;
      height: $header-height;
      width: 100%;
      line-height: $header-height;
      text-align: center;
    }

    &__content {
      color: $main-color;
      font-size: $base-font-size;
      padding: $base-padding;
      display: inline-block;
    }
  }
}

@media (max-width:1180px) {
.header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;

  &__contents {
    padding: $base-padding;
  }

  &__content {
    padding: $base-padding;
    color: #ffffff;
    font-size: $menu-font-size;
    line-height: 50px;
  }
}

.drawer {
  position: relative;
  // inputのcheckboxは非表示
  &__checkbox{
    display: none;
  }
  // ハンバーガーアイコン
  &__icon{
    cursor: pointer;
    display: block;
    width: 56px;
    height: 60px;
    position: fixed;
    right: 0;
    // ハンバーガーアイコンの中の線
    &-parts,
    &-parts:before,
    &-parts:after{
      background-color: #000;
      display: block;
      width: 26px;
      height: 2px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }
    &-parts:before,
    &-parts:after{
      content: " ";
    }
    &-parts:before{
      top: 16px
    }
    &-parts:after{
      top: -16px
    }
  }

  // ドロワーメニュー開いた時のメインエリアを暗く
  &__overlay{
    background: #000;
    opacity: 0;
    pointer-events: none; //ポインタの動作全部無効化
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
  }

  // ドロワーメニュー
  &__menu{
    background: #323648;
    margin-top: $header-height;
    max-width: 100%;
    width: 100%;
    height: 100vh;
    overflow-y: auto; //スクロール
    -webkit-overflow-scrolling: touch; //スクロール（SP）
    position: fixed;
    top: 0;
    text-align: left;
    right: -100%;
  }
  // z-indexの指定（1がメインエリア）
  &__icon{
    z-index: 4;
  }
  &__menu{
    z-index: 3;
  }
  &__overlay{
    z-index: 2;
  }

  // チェックが入ったら（アイコンクリックしたら）
  &__checkbox:checked ~ {
    // ハンバーガーアイコン
    .drawer__icon{
      .drawer__icon-parts{
        background: transparent;
      }
      .drawer__icon-parts:before{
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 0;
      }
      .drawer__icon-parts:after{
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 0;
      }
    }
    // メインエリアを暗くする
    .drawer__overlay {
      opacity: 0.3;
      pointer-events: auto; //ポインタの動作デフォルトに戻す
    }
    // メニューをだす
    .drawer__menu {
      right: 0;
    }
  }
  // 動きをスムーズに
  &__icon-parts,
  &__icon-parts:after,
  &__icon-parts:before,
  &__overlay,
  &__menu{
    -webkit-transition: all .7s ;
    transition: all .7s ;
  }
}

}
</style>
