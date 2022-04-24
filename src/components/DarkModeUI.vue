<template>
  <div
    class="dark-controller flex center center-colum"
    @click="useStore().darkMode = !useStore().darkMode"
  >
    <Moon color="white" />
  </div>
</template>

<script setup lang="ts">
import { Moon } from 'lucide-vue-next';
import { useStore } from '../store/index';
</script>

<style scoped></style>
