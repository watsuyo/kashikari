<template>
  <div class="contents">
    <Top />
    <About />
    <Skils />
    <Works />
    <Contacts />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '~/components/Top.vue'
import About from '~/components/About.vue'
import Skils from '~/components/Skils.vue'
import Works from '~/components/Works.vue'
import Contacts from '~/components/Contacts.vue'

export default Vue.extend({
  components: {
    Top,
    About,
    Skils,
    Works,
    Contacts
  }
})
</script>

<style lang="scss" scoped>
.contents{
  padding-top: $header-height;
}
</style>
