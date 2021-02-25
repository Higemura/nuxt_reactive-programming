<template>
  <input
    class="BaseInput"
    @input="onInput"
    :name="name"
    :type="type"
    :value="value"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    onInput: {
      type: Function,
      default: () => {},
    },
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  }
})
</script>

<style lang="scss">
.BaseInput {
  display: block;
  border: 1px solid color(input-border);
  width: 100%;
  min-width: 124px;
  height: 32px;
  border-radius: 4px;
  flex: 1;
  padding: 8px;
  &::placeholder {
    color: color(common, 50%);
  }
}
</style>
