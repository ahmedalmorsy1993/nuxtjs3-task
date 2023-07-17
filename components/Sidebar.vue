<script lang="ts" setup>
import { useStore } from "../composables/store";

const { state, actions } = useStore<string>();
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img width="40" height="20" src="~/assets/images/logo.svg" alt="logo" />
    </div>
  </aside>
</template>

<style scoped></style>
