<template>
  <div>{{ store.inboxCount }}</div>
</template>

<script setup lang="ts">
import { useStore } from "~/store";
const store = useStore();
</script>
