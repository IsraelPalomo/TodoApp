import { defineStore } from 'pinia';

export const useStore = defineStore('counter', {
  state: () => ({ darkMode: false, menuBurger: false }),
  getters: {},
  actions: {
    setDarkMode(value: boolean) {
      this.darkMode = value;
    },
    setMenuBurger() {
      this.menuBurger = !this.menuBurger;
    },
  },
});
