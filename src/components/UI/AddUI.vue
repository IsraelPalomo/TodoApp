<template>
  <div
    class="add-ui flex center center-colum"
    :class="
      useStore().darkMode == true ? 'dark-mode-active' : 'light-mode-active'
    "
  >
    <Plus :color="useStore().darkMode == true ? 'black' : 'white'" />
  </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import { useStore } from '../../store/index';
</script>
