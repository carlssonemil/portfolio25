<template>
  <li class="appear flex translate-y-4 opacity-0">
    <a
      class="group border-base-200 bg-base-bg/50 items-startgap-4 relative flex w-full gap-4 overflow-hidden rounded-lg border p-4 transition-colors duration-200 md:p-6"
      :href="project.url"
      target="_blank"
      @mousemove="onMouseMove"
    >
      <!-- Border glow -->
      <div
        class="pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style="
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
        "
      >
        <img
          :src="logoPath"
          class="absolute h-50 w-50 blur-2xl brightness-120 saturate-120"
          :style="{
            transform: `translate(${borderGlow.x}px, ${borderGlow.y}px)`,
          }"
        />
      </div>

      <!-- Internal drifting glow -->
      <div
        class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <img
          :src="logoPath"
          class="absolute h-60 w-60 opacity-20 blur-3xl"
          :style="{
            transform: `translate(${smoothGlow.x - 120}px, ${smoothGlow.y - 120}px)`,
          }"
        />
      </div>

      <!-- Content -->
      <div
        class="relative z-10 flex-none items-center justify-center rounded-lg select-none"
      >
        <img
          :src="logoPath"
          :alt="`${project.title} icon`"
          class="h-8 w-8 md:h-10 md:w-10"
        />
      </div>

      <div class="relative z-10">
        <h3 class="text-base-strong font-medium">
          {{ project.title }}
        </h3>
        <p class="text-base-soft mt-1! text-sm leading-5 text-pretty">
          {{ project.description }}
        </p>
      </div>
    </a>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useCardGlow } from '@/composables/useCardGlow'
import { toKebabCase } from '@/utils/string'

const props = defineProps({
  project: { type: Object, required: true },
})

const logoPath = computed(
  () => `/assets/icons/${toKebabCase(props.project.title)}.svg`,
)

const { borderGlow, smoothGlow, onMouseMove } = useCardGlow({
  borderOffset: 80,
  drift: 0.08,
})
</script>
