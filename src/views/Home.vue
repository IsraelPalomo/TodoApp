<template>
  <div class="home" :class="useStore().darkMode == true ? 'dark' : 'light'">
    <header>
      <NavBar />
    </header>
    <MenuSide v-if="useStore().menuBurger" />
    <main class="main flex center center-colum">
      <Groups />
    </main>
    <footer class="flex center-colum space-b">
      <MenuLabels v-if="activeMenuAddTask" :titlesLabels="menuLabelsTitles" />
      <AddUI @click="activeMenuAddTask = !activeMenuAddTask" />
      <p class="copy__right">©Designed by Israel Palomo Spain 2020</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
//Components
import NavBar from '../components/NavBar.vue';
import Groups from '../components/Groups.vue';
import AddUI from '../components/UI/AddUI.vue';
import MenuLabels from '../components/MenuLabels.vue';
import MenuSide from '../components/MenuSide.vue';
//Vue

import i18n, { useI18n } from 'vue-i18n';
//Store
import { useStore } from '../store/index';
import MenuLabels1 from '../components/MenuLabels.vue';
import { ref } from 'vue';

const menuLabelsTitles = ref(['New Task', 'New Group']);
const activeMenuAddTask = ref(false);
console.log(activeMenuAddTask);
</script>
