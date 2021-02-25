<template>
  <div class="ReactivePage">
    <h1>CHAPTER 05: Practice Reactive Programming</h1>
    <p>リアクティブプログラミングの実践</p>

    <p id="message" v-html="message"></p>

    <input
      id="messageInput"
      placeholder="Enter message"
      @input="handleChangeMessage"
    />
    <p v-for="(error, index) in errors" :key="error+index">{{ error }}</p>

    <LinkButton :href="'/'" :text="'ホームに戻る'" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  reactive,
  inject,
  computed,
} from "@nuxtjs/composition-api";
import { HTMLEvent } from '~/plugins/types/htmlElement'
import { convertMessage } from '~/plugins/utilities/convertText'
import { GlobalStateKey, GlobalStateType } from '~/composables'

interface Data {
  message: string
  errors: Array<string>
}
export default defineComponent({
  components: {
    LinkButton: () => import('~/components/molecules/buttons/LinkButton/index.vue'),
  },
  setup() {
    const { themeMode } = inject(GlobalStateKey) as GlobalStateType
    const data = reactive<Data>({
      message: '',
      errors: [],
    });

    const message = computed(() => convertMessage(data.message))
    const errors = computed(() => data.errors)

    // メッセージ変更の取得関数
    const handleChangeMessage = (event: HTMLEvent<HTMLInputElement>) => {
      event.preventDefault();
      const value = event.target.value;
      data.message = value
    };

    watch(message, (value: string) => {
      // バリデーション
      if (!value) {
        data.errors = [...new Set(['入力項目は必須です。', ...data.errors])]
        return
      }

      data.errors = []
    });

    return {
      themeMode,
      message,
      errors,
      handleChangeMessage,
    };
  },
});
</script>
