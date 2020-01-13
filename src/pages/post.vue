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
        <Select items="categoryList"></Select>
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
        <textarea placeholder="商品のブランドや色、状態などを書くと伝わりやすいです。"></textarea>
      </div>

      <Divider section />

      <div>
        <div class="itemInfo__attention">
          注意事項(任意)
        </div>
        <textarea placeholder="気をつけて欲しいことや返却時の希望がある場合に記入してください。"></textarea>
      </div>

      <Divider section />
    </div>

    <div class="itemOptionInfo">
      <div>
        <div class="itemOptionInfo__pass">
          渡し方
        </div>
        <input type="radio" name="deliveryMethod" value="手渡し" checked="checked">
        <input type="radio" name="deliveryMethod" value="郵送">
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
import Select from '~/components/atoms/Select.vue'

export default Vue.extend({
  components: {
    Button, Divider, Select
  },
  data () {
    return {
      categoryList: [
        {
          name: 'test',
          value: 'テスト'
        }
      ]
    }
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
