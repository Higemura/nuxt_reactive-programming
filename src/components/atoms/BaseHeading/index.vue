<template>
  <component class="BaseHeading" :is="headingLevel">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
interface Props {
  level: HeadingLevel
}

export default defineComponent({
  props: {
    level: {
      type: Number as PropType<HeadingLevel>,
      default: 1,
    },
  },
  setup(props: Props) {
    const headingLevel = computed(() => {
      return `h${props.level}`;
    })

    return {
      headingLevel,
    }
  },
})
</script>

<style lang="scss" scoped>
.BaseHeading {
  color: color(main-text);
}
</style>
