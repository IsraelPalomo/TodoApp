import { defineStore } from 'pinia';

export const useStore = defineStore('counter', {
  state: () => ({ darkMode: false }),
  getters: {},
  actions: {
    setDarkMode(value: boolean) {
      this.darkMode = value;
    },
  },
});
