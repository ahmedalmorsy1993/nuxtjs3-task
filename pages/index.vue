<script lang="ts" setup>
const props = useStore();
</script>

<template>
  <div>
    Page: foo
    {{ props.name }}
    {{ props.age }}
  </div>
</template>

<style scoped></style>
