<template>
  <div class="groups grid">
    <Group color="#3E3B3F">
      <Settings class="icon-group" :size="50" color="white" />
    </Group>
    <Group color="#5E57B1">
      <Home class="icon-group" :size="50" color="white" />
    </Group>
    <Group color="#57B181">
      <Bike class="icon-group" :size="50" color="white" />
    </Group>
    <Group color="#A557B1">
      <Pencil class="icon-group" :size="50" color="white" />
    </Group>
    <Group color="#CC5A5A">
      <Lightbulb class="icon-group" :size="50" color="white" />
    </Group>
    <Group color="#57B1B1">
      <BookOpen class="icon-group" :size="50" color="white" />
    </Group>
  </div>
</template>

<script setup lang="ts">
import {
  Settings,
  Home,
  Bike,
  Pencil,
  Lightbulb,
  BookOpen,
} from 'lucide-vue-next';
import Group from '../components/Group.vue';
</script>
