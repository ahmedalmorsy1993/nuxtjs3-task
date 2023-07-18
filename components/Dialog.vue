<template>
  <div class="dialog" :class="store.dialog ? 'dialog__show' : ''">
    <div class="dialog__body">dialog</div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "~/store";
const store = useStore();
</script>
