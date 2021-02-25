import {
  reactive,
  toRefs,
  InjectionKey,
  computed,
  watch
} from "@nuxtjs/composition-api";
import { HTMLEvent } from '~/plugins/types/htmlElement'
import { convertMessage } from '~/plugins/utilities/convertText'

interface Chapter04State {
  message: string
  errors: Array<string>
}

export const Chapter04State = () => {
  const data = reactive<Chapter04State>({
    message: '',
    errors: [],
  });

  const computedMessage = computed(() => convertMessage(data.message))

  // // メッセージ変更の取得関数
  const handleChangeMessage = (event: HTMLEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    data.message = value
  };

  // const messageWatcher = () => {
    watch(computedMessage, (value: string) => {
      // バリデーション
      if (!value) {
        data.errors = [...new Set(['入力項目は必須です。', ...data.errors])]
        return
      }

      data.errors = []
    });
  // }

  // messageWatcher()

  return {
    ...toRefs(data),
    computedMessage,
    handleChangeMessage,
    // messageWatcher,
  };
};

export type Chapter04StateType = ReturnType<typeof Chapter04State>;
export const Chapter04StateKey: InjectionKey<Chapter04StateType> = Symbol("Chapter04State");
