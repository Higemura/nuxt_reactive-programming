<template>
  <BaseButton
    class="LinkButton"
    :modifierClass="modifierClass"
    :ariaLabel="text"
    :href="href"
    :nuxtLink="nuxtLink"
    :onClick="onClick"
  >
    <BaseLink
      class="LinkButton_Inner"
      :href="href"
      :target="target"
      :nuxtLink="nuxtLink"
      :prefetch="true"
    >
      <BaseIcon
        v-if="!!iconName"
        class="LinkButton_Icon"
        :modifierClass="iconClass"
        :name="iconName"
      />
      <BaseText
        v-if="!!text"
        class="LinkButton_Text"
      >
        {{ text }}
      </BaseText>
    </BaseLink>
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BaseButton from '~/components/atoms/BaseButton/index.vue'
import BaseText from '~/components/atoms/BaseText/index.vue'
import BaseIcon from '~/components/atoms/BaseIcon/index.vue'
import BaseLink from '~/components/atoms/BaseLink/index.vue'

export default defineComponent({
  components: {
    BaseButton,
    BaseText,
    BaseIcon,
    BaseLink,
  },
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
    modifierClass: {
      type: String,
      default: '_NormalBorder',
    },
    iconClass: {
      type: String,
    },
    iconName: {
      type: String,
    },
    href: {
      type: String,
      default: '',
      required: true,
    },
    text: {
      type: String,
      require: true,
    },
    target: {
      type: String,
      default: '',
    },
    nuxtLink: {
      type: Boolean,
      default: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.LinkButton {
  &_Inner {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &_Icon {
    @include square-size(28px);
  }
  &_Text {
    margin: 0 4px;
    color: inherit;
    flex: 1;
  }
}
</style>
