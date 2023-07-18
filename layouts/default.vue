<script lang="ts" setup></script>

<template>
  <Dialog />

  <main class="main-layout">
    <Sidebar />
    <div class="main-layout__container">
      <slot />
    </div>
  </main>
</template>
