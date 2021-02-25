<template>
  <nuxt-link
    v-if="nuxtLink || !target"
    class="BaseLink"
    :class="[
      modifierClass,
    ]"
    :to="href"
    :prefetch="prefetch"
    :exact="exact"
  >
    <slot />
  </nuxt-link>
  <a
    v-else
    class="BaseLink"
    :class="[
      modifierClass,
    ]"
    :href="href"
    :target="target"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

interface Props {
  onClick: Function,
  href: string,
  nuxtLink: boolean,
  exact: boolean,
  prefetch: boolean,
}

export default defineComponent({
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
    modifierClass: {
      type: String,
      default: '_Default',
    },
    href: {
      type: String,
      default: '',
      required: true,
    },
    nuxtLink: {
      type: Boolean,
      default: false,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    prefetch: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.BaseLink {
  font-size: inherit;
  color: inherit;
  word-break: break-all;

  &._UnderLine {
    transition: decoration 0.3s, opacity 0.3s;
    @include hover() {
      text-decoration: underline;
    }
  }

  &._TextLink {
    transition: color 0.3s;
    text-decoration: underline;
    color: color(link-text);
    @include hover() {
      color: color(link-text, 0.5);
    }
  }
}
</style>
