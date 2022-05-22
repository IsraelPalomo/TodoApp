<template>
  <div
    class="labelUI flex center"
    :class="
      useStore().darkMode == true ? 'dark-mode-active' : 'light-mode-active'
    "
  >
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../../store/index';
const props = defineProps({
  title: null,
});
</script>
