<template>
  <div class="home">
    <h1 class="flex center">{{ $t('language') }}</h1>
    <Groups />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Groups from '../components/Groups.vue';
import i18n, { useI18n } from 'vue-i18n';
import { useCounterStore } from '../store/index';
onMounted(() => {
  useI18n().locale.value = 'es';
});
</script>
<style lang="scss" scoped>
@import '../scss/main.scss';
</style>
