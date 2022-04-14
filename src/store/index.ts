import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'israel' }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment(value: number) {
      this.count += value;
    },
  },
});
