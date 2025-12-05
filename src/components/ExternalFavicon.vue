<template>
  <img :src="faviconUrl" :height="size" :width="size" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  url: { type: String, required: true },
  size: { type: Number, default: 16 },
})

const faviconUrl = computed(() => {
  const cleanUrl = props.url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  return `https://favicon.vemetric.com/${cleanUrl}?size=${props.size}`
})
</script>
