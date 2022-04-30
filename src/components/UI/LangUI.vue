<template>
  <section class="more-langs flex" v-if="moreLangsMenu">
    <div
      class="lang-controller flex center"
      :class="opacityLang('es')"
      @click="(langCountry = 'es'), (moreLangsMenu = false)"
    >
      <p class="lang-value">ES</p>
    </div>
    <div
      class="lang-controller flex center"
      :class="opacityLang('en')"
      @click="(langCountry = 'en'), (moreLangsMenu = false)"
    >
      <p class="lang-value">EN</p>
    </div>
    <div
      class="lang-controller flex center"
      :class="opacityLang('fr')"
      @click="(langCountry = 'fr'), (moreLangsMenu = false)"
    >
      <p class="lang-value">FR</p>
    </div>
  </section>
  <div
    class="lang-controller flex center"
    @click="moreLangsMenu = !moreLangsMenu"
  >
    <p class="lang-value">
      {{
        langCountry.length > 2
          ? langCountry.slice(0, -3).toUpperCase()
          : langCountry.toUpperCase()
      }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import i18n, { useI18n } from 'vue-i18n';
const moreLangsMenu: Ref<boolean> = ref(false);
const langCountry = ref(useI18n().locale);

const opacityLang = (value: string) => {
  if (value == langCountry.value) return 'enactive';
};
const langLocale = (value: string) => {
  useI18n().locale.value = value;
};
</script>
