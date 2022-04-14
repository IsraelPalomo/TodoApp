import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import EN from './locales/en.json';
import ES from './locales/es.json';
import FR from './locales/fr.json';
const i18n = createI18n({
  messages: { en: EN, es: ES, fr: FR },
});

createApp(App).use(createPinia()).use(router).use(i18n).mount('#app');
