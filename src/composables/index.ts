import {
  reactive,
  toRefs,
  InjectionKey,
  computed
} from "@nuxtjs/composition-api";
// import throttle from "lodash/throttle";

type LoaderKey = "details" | "list";
type NotificationsKey =
  | "dashboard"
  | "project"
  | "recommend"
  | "meeting"
  | "contract";

interface ListState {
  scrollTopPosition: number;
}

interface IsLoaded {
  list: boolean;
  details: boolean;
}

interface Notifications {
  dashboard?: number;
  project?: number;
  recommend?: number;
  meeting?: number;
  contract?: number;
}

type ThemeMode = "light" | "dark" | "fire";

interface GlobalState {
  themeMode: ThemeMode;
  listState: ListState;
  isLoaded: IsLoaded;
  notifications: Notifications;
}

export const GlobalState = () => {
  const globalState = reactive<GlobalState>({
    themeMode: "light",
    listState: {
      scrollTopPosition: 0
    },
    isLoaded: {
      list: false,
      details: false
    },
    notifications: {}
  });

  // 一覧用のLoader状態を変更
  const updateListLoader = (progress: number) => {
    updateLoaderState("list", progress);
  };

  // 詳細用のLoader状態を変更
  const updateDetailsLoader = (progress: number) => {
    updateLoaderState("details", progress);
  };

  // Loader状態を変更
  const updateLoaderState = (key: LoaderKey, progress: number) => {
    if (progress === 100) {
      globalState.isLoaded[key] = true;
      return;
    }
    globalState.isLoaded[key] = false;
  };

  // Loader状態をリセット
  const resetLoaderState = (key: LoaderKey) => {
    globalState.isLoaded[key] = false;
  };

  // Loaderの状態を完了
  const setLoadedState = (key: LoaderKey) => {
    globalState.isLoaded[key] = true;
  };

  // const updateScrollPosition = throttle((event: { target: HTMLElement }) => {
  //   const target = event.target;
  //   globalState.listState.scrollTopPosition = target.scrollTop;
  // }, 500);

  const resetScrollPosition = () => {
    globalState.listState.scrollTopPosition = 0;
  };

  // 通知用のデータをリクエストする
  // const fetchNotification = async () => {
  //   const results = await apiRequest<Notifications>({
  //     url: "/c_api/unanswered_counts/",
  //     params: "",
  //     type: "get"
  //   });

  //   if (results.status === 200) {
  //     globalState.notifications = results.data;
  //   }
  // };

  return {
    ...toRefs(globalState),
    // updateScrollPosition,
    resetScrollPosition,
    updateListLoader,
    updateDetailsLoader,
    resetLoaderState,
    setLoadedState
    // fetchNotification
  };
};

export type GlobalStateType = ReturnType<typeof GlobalState>;
export const GlobalStateKey: InjectionKey<GlobalStateType> = Symbol("GlobalState");
