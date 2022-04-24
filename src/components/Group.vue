<template>
  <div
    class="group flex center center-colum"
    :style="{ background: props.color }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: String,
});
</script>
