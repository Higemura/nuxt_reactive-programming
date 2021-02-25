<template>
  <component class="BaseText" :is="tagName"><slot /></component>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    modifierClass: {
      type: String,
      default: '_Default',
    },
    tagName: {
      type: String,
      default: 'p',
    },
  },
})
</script>

<style lang="scss">
.BaseText {
  color: inherit;
  word-break: break-all;
}
</style>
