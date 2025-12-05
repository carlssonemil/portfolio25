<template>
  <div :class="['mx-auto w-full max-w-3xl', { 'format-text': format }]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  format: { type: Boolean, default: false },
})
</script>
