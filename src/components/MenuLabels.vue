<template>
  <div class="menu-labels">
    <LabelUI
      v-for="(titles, index) in titlesLabels"
      :key="index"
      :title="titles"
    />
  </div>
</template>

<script setup lang="ts">
import LabelUI from './UI/LabelUI.vue';

const props = defineProps({
  titlesLabels: Array,
});
</script>
