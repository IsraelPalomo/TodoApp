<template>
  <nav class="navbar flex">
    <section class="description">
      <h1>{{ $t('language') }}</h1>
      <h3>
        Start creating your tasks with <br />
        TodoApp
      </h3>
    </section>
    <section class="actions flex">
      <LangUI />
      <DarkModeUI />
    </section>
  </nav>
</template>

<script setup lang="ts">
import LangUI from './LangUI.vue';
import DarkModeUI from './DarkModeUI.vue';
</script>

<style scoped></style>
