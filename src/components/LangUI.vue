<template>
  <section class="more-langs flex" v-if="moreLangsMenu">
    <div
      class="lang-controller flex center"
      :class="opacityLang('es')"
      @click="(lang = 'es'), (moreLangsMenu = false)"
    >
      <p class="lang-value">ES</p>
    </div>
    <div
      class="lang-controller flex center"
      :class="opacityLang('en')"
      @click="(lang = 'en'), (moreLangsMenu = false)"
    >
      <p class="lang-value">EN</p>
    </div>
    <div
      class="lang-controller flex center"
      :class="opacityLang('fr')"
      @click="(lang = 'fr'), (moreLangsMenu = false)"
    >
      <p class="lang-value">FR</p>
    </div>
  </section>
  <div
    class="lang-controller flex center"
    @click="moreLangsMenu = !moreLangsMenu"
  >
    <p class="lang-value">{{ lang.toUpperCase() }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import i18n, { useI18n } from 'vue-i18n';
const moreLangsMenu: Ref<boolean> = ref(false);
const lang = ref(useI18n().locale);
const opacityLang = (value: string) => {
  if (value == lang.value) return 'enactive';
};
const langLocale = (value: string) => {
  useI18n().locale.value = value;
};
</script>

<style scoped></style>
