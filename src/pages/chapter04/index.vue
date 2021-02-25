<template>
  <div class="container">
    <div>
      <h1>CHAPTER 04: Composables Reactive with Vue/Nuxt</h1>
      <p>Composables Vue/Nuxt版 リアクティブプログラム</p>

      <p id="message" v-html="computedMessage"></p>

      <BaseInput
        id="messageInput"
        placeholder="メッセージを入力してください"
        :onInput="handleChangeMessage"
      />

      <p class="ErrorText" v-for="(error, index) in errors" :key="error+index">{{ error }}</p>

      <div class="LinkGroup">
        <LinkButton :href="'/'" :text="'ホームに戻る'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, inject } from "@nuxtjs/composition-api";
import { Chapter04State, Chapter04StateKey, Chapter04StateType } from '~/composables/pages/capter04'

export default defineComponent({
  components: {
    BaseInput: () => import('~/components/atoms/BaseInput/index.vue'),
    LinkButton: () => import('~/components/molecules/buttons/LinkButton/index.vue'),
  },
  setup() {
    provide(Chapter04StateKey, Chapter04State())
    const {
      computedMessage,
      errors,
      handleChangeMessage,
    } = inject(Chapter04StateKey) as Chapter04StateType

    return {
      computedMessage,
      errors,
      handleChangeMessage,
    };
  },
});
</script>

<style lang="scss" scoped>
.ErrorText {
  color: red;
}
</style>
