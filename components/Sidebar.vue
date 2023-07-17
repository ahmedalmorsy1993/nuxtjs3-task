<script lang="ts" setup>
import { useStore } from "../composables/store";

const props = useStore();
</script>

<template>
  <aside class="sidebar">
    Component: Sidebar
    <input v-model="props.name" type="text" />
    <p>
      {{ props.name }}
    </p>
  </aside>
</template>

<style scoped></style>
