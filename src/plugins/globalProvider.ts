import { provide } from "@nuxtjs/composition-api";
import { Plugin } from "@nuxt/types";
import { GlobalState, GlobalStateKey } from "~/composables";

const globalProvider: Plugin = ({ app }) => {
  app.setup = () => {
    provide(GlobalStateKey, GlobalState());
  };
};

export default globalProvider;
