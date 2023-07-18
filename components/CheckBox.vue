<template>
  <div class="checkbox-container">
    <div @click.stop class="checkbox-container__wrapper">
      <input
        @click.stop
        @change="$emit('onChange')"
        type="checkbox"
        v-bind="attrs"
      />
      <span></span>
    </div>
    <label>
      <slot />
    </label>
  </div>
</template>

<script setup>
const attrs = useAttrs();
</script>
