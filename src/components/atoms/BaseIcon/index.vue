<template>
  <div
    class="BaseIcon"
    :class="[
      modifierClass,
    ]"
  >
    <svg-icon
      class="BaseIcon_Svg"
      :name="pathName"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
} from '@vue/composition-api'

export default defineComponent({
  props: {
    modifierClass: {
      type: String,
      default: '_Default',
    },
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { name } = props
    const pathName = !name ? '' : `sprites/${name}`
    return {
      pathName,
    }
  }
})
</script>

<style lang="scss">
.BaseIcon {
  $this: &;

  position: relative;
  background-color: transparent;
  @include square-size(8px, min);
  @include square-size(100%);

  &_Svg {
    transition: 0.3s;
    fill: inherit;
    @include square-size(100%);
    @include position-center();
  }

  &._Circle {
    background-color: color(icon-bg);
    border-radius: 100px;
    overflow: hidden;
    @include square-size(32px, min);

    #{$this}_Svg {
      fill: color(on-bg-fill);
      @include square-size(12px, min);
      @include square-size(40%);
    }
  }
}
</style>
