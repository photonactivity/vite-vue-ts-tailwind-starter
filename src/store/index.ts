import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      test: "vuex ok",
    };
  },
});
