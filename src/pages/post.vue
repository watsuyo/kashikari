<template>
  <div>
    <div class="itemInfo">
      <div>
        <div class="itemInfo__name">
          商品名
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />

      <div>
        <div class="itemInfo__category">
          カテゴリ
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />

      <div>
        <div class="itemInfo__size">
          サイズ
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />

      <div>
        <div class="itemInfo__description">
          説明
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />

      <div>
        <div class="itemInfo__attention">
          注意事項(任意)
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />
    </div>

    <div class="itemOptionInfo">
      <div>
        <div class="itemOptionInfo__pass">
          渡し方
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />

      <div>
        <div class="itemOptionInfo__day-limit">
          日数制限
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />

      <div>
        <div class="itemOptionInfo__loan-price">
          貸出金額
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />

      <div>
        <div class="itemOptionInfo__lost">
          紛失・破損時
        </div>
        <input type="text" placeholder="入力してください">
      </div>

      <Divider section />

      <div>
        <div class="itemOptionInfo__arrears-funds">
          延滞料金
        </div>
        <input type="text" placeholder="入力してください">
      </div>
    </div>

    <Button space-m>
      貸し出す
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/atoms/Button.vue'
import Divider from '~/components/atoms/Divider.vue'

export default Vue.extend({
  components: {
    Button, Divider
  }
})
</script>

<style lang="scss" scoped>
.itemInfo, .itemOptionInfo {
  margin-bottom: 24px;

  &__name, &__category, &__size, &__description, &__attention, &__pass, &__day-limit, &__loan-price, &__lost, &__arrears-funds {
    display: inline-block;
  }
}
</style>
