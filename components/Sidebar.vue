<script lang="ts" setup>
import { useStore } from "../composables/store";

const { state, actions } = useStore<string>();
</script>

<template>
  <aside class="sidebar">
    Component: Sidebar
    <input v-model="state.name" type="text" />
    <button
      @click="
        () => {
          state.emails.push(state.name);
          state.name = '';
        }
      "
    >
      add
    </button>
    <p>
      {{ state.name }}
    </p>
  </aside>
</template>

<style scoped></style>
