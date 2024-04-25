import { defineStore } from "pinia";

export const useSToken = defineStore("token", {
  state: () => ({
    token: "",
  }),
  getters: {
    queryToken(state) {
      return state.token;
    },
  },

  actions: {
    updateToken(payload: string) {
      this.token = payload;
    },
  },
});
