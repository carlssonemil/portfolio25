<template>
  <component
    :is="componentTag"
    :class="[
      'add-focus-text inline-flex cursor-pointer items-center gap-1 underline decoration-current/30 underline-offset-2 transition-[text-decoration-color] sm:hover:decoration-current/70',
      { 'relative top-0.5': showExternalFavicon },
    ]"
    :href="href"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :target="isExternal ? '_blank' : undefined"
    :title="title"
    @click="onClick"
  >
    <ExternalFavicon v-if="showExternalFavicon" :url="href" class="ml-0.5" />

    <slot>{{ title }}</slot>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ExternalFavicon from '@/components/ExternalFavicon.vue'

const props = defineProps({
  href: { type: String, required: false },
  noExternalFavicon: { type: Boolean, default: false },
  title: { type: String, required: true },
  tag: { type: String, default: undefined },
})

const emit = defineEmits(['click'])

const componentTag = computed(() => {
  if (isExternal.value) {
    return 'a'
  } else if (props.tag) {
    return props.tag
  } else {
    return RouterLink
  }
})

const isExternal = computed(() => {
  if (!props.href) return false

  try {
    const url = new URL(props.href, window.location.href)
    return url.origin !== window.location.origin
  } catch {
    return false
  }
})

const showExternalFavicon = computed(() => {
  return isExternal.value && !props.noExternalFavicon
})

const onClick = (event) => {
  emit('click', event)
}
</script>
