<template>
  <div
    class="dark-controller flex center center-colum"
    @click="useStore().darkMode = !useStore().darkMode"
    :class="useStore().darkMode ? 'bg-dark' : 'bg-white'"
  >
    <Moon v-if="useStore().darkMode === false" color="white" />
    <Sun v-else color="black" />
  </div>
</template>

<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';
import { useStore } from '../../store/index';
</script>
