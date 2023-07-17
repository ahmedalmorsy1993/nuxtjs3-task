<template>
  <label :for="$attrs.id">
    <input
      @change="$emit('onChange')"
      type="checkbox"
      :id="$attrs.id"
      v-bind="attrs"
    />
    <span> <slot /></span>
  </label>
</template>

<script setup>
const attrs = useAttrs();
</script>
