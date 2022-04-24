<template>
  <nav class="navbar flex">
    <section class="description">
      <h1>{{ $t('nav.title') }}</h1>
      <h3>
        {{ $t('nav.subtitle') }}
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
