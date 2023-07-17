<script lang="ts" setup>
const { state } = useStore<string>();
</script>

<template>
  <div>
    Page: foo
    <ul>
      <li v-for="(email, index) in state.emails" :key="index">
        {{ email }}
        <button @click="() => state.emails.splice(index, 1)">remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
