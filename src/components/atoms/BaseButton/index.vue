<template>
  <button
    class="BaseButton"
    :class="[
      modifierClass,
    ]"
    :type="type"
    @click="onClick"
    :aria-label="ariaLabel"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

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
    type: {
      type: String,
      default: 'button',
    },
    ariaLabel: {
      type: String,
      default: 'Base Button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss">
.BaseButton {
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  font-size: 12px;
  text-align: center;
  min-width: 20px;
  min-height: 20px;
  color: color(main-text);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:disabled {
    pointer-events: none;
    background-color: color(inactive) !important;
    opacity: 0.5;
    @include box-shadow();
  }

  &._Default {
    color: color(on-bg-text);
    background-color: transparent;
    @include hover() {
      background-color: color(common-hover, 0.5);
    }
  }

  &._Normal {
    color: color(main-text);
    background-color: color(normal);
    @include box-shadow();
    @include hover() {
      background-color: color(normal-hover);
    }
  }

  &._NormalBorder {
    color: color(main-text);
    background-color: color(normal);
    border: solid 2px color(inactive);
    @include box-shadow();
    @include hover() {
      color: color(normal-hover);
      border-color: color(normal-hover);
    }
  }

  &._Common {
    color: color(on-bg-text);
    background-color: color(common);
    @include box-shadow();
    @include hover() {
      background-color: color(common-hover);
    }
  }

  &._CommonBorder {
    color: color(common);
    background-color: color(light);
    border: solid 2px color(common);
    @include box-shadow();
    @include hover() {
      color: color(common-hover);
      border-color: color(common-hover);
    }
  }

  &._Inactive {
    color: color(on-bg-text);
    background-color: color(inactive);
    @include box-shadow();
    @include hover() {
      background-color: color(inactive-hover);
    }
  }

  &._InactiveBorder {
    color: color(inactive);
    background-color: color(light);
    border: solid 2px color(inactive);
    @include box-shadow();
    @include hover() {
      color: color(inactive-hover);
      border-color: color(inactive-hover);
    }
  }

  &._Primary {
    color: color(on-bg-text);
    background-color: color(primary);
    fill: color(on-bg-fill);
    @include box-shadow();
    @include hover() {
      background-color: color(primary-hover);
    }
  }

  &._PrimaryBorder {
    color: color(primary);
    background-color: color(light);
    border: solid 2px color(primary);
    @include box-shadow();
    @include hover() {
      color: color(primary-hover);
      border-color: color(primary-hover);
    }
  }

  @include mq(sm) {
    font-size: 14px;
  }
}
</style>
