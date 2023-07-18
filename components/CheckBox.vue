<template>
  <div class="checkbox-container">
    <div class="checkbox-container__wrapper">
      <input @change="$emit('onChange')" type="checkbox" v-bind="attrs" />
      <span></span>
    </div>
    <label @click="$emit('onClick')">
      <slot />
    </label>
  </div>
</template>

<script setup>
const attrs = useAttrs();
</script>
