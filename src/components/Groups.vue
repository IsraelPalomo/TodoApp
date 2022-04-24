<template>
  <div class="groups grid">
    <Group color="#3E3B3F">
      <Settings :size="50" color="white" />
    </Group>
    <Group color="#5E57B1">
      <Home :size="50" color="white" />
    </Group>
    <Group color="#57B181">
      <Bike :size="50" color="white" />
    </Group>
    <Group color="#A557B1">
      <Pencil :size="50" color="white" />
    </Group>
    <Group color="#CC5A5A">
      <Lightbulb :size="50" color="white" />
    </Group>
    <Group color="#57B1B1">
      <BookOpen :size="50" color="white" />
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
