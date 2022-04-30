<template>
  <div class="home" :class="useStore().darkMode == true ? 'dark' : 'light'">
    <header>
      <NavBar />
    </header>
    <main class="main flex center center-colum">
      <Groups />
    </main>
    <footer class="flex center-colum space-b">
      <AddUI />
      <p>©Designed by Israel Palomo Spain 2020</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
//Components
import NavBar from '../components/NavBar.vue';
import Groups from '../components/Groups.vue';
import AddUI from '../components/UI/AddUI.vue';
//Vue

import i18n, { useI18n } from 'vue-i18n';
//Store
import { useStore } from '../store/index';
</script>
