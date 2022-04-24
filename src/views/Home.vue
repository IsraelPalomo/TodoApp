<template>
  <div class="home" :class="useStore().darkMode == true ? 'dark' : 'light'">
    <NavBar />
    <main class="main flex center center-colum">
      <Groups />
    </main>
  </div>
</template>

<script setup lang="ts">
//Components
import NavBar from '../components/NavBar.vue';
import Groups from '../components/Groups.vue';
//Vue

import i18n, { useI18n } from 'vue-i18n';
//Store
import { useStore } from '../store/index';
</script>
