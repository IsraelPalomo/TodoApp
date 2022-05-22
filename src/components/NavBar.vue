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
    <section class="navbar__menu">
      <X
        v-if="useStore().menuBurger"
        @click.native="useStore().setMenuBurger()"
        :style="useStore().menuBurger ? 'color:#fff;' : 'color:#111'"
      />
      <Menu
        v-else
        :style="useStore().menuBurger ? 'color:#fff;' : 'color:#111'"
        @click.native="useStore().setMenuBurger()"
      />
    </section>
  </nav>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next';
import LangUI from './UI/LangUI.vue';
import DarkModeUI from './UI/DarkModeUI.vue';
import { useStore } from '../store/index';
</script>
