<template>
  <div class="home">
    <h1 class="flex center">{{ $t('language') }}</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import i18n, { useI18n } from 'vue-i18n';
import { useCounterStore } from '../store/index';
onMounted(() => {
  useI18n().locale.value = 'es';
});
const counterStore = useCounterStore();
</script>
<style lang="scss" scoped>
@import '../scss/main.scss';
</style>
