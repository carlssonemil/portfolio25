<template>
  <footer class="z-1 flex w-full items-center justify-center p-6 md:pb-16">
    <div
      class="text-base-soft flex w-full max-w-3xl flex-wrap-reverse items-center justify-between text-sm"
    >
      <p class="select-none">© {{ currentYear }}</p>

      <nav class="-mr-3 flex gap-0.5">
        <TextLink
          class="px-3 py-1.5"
          href="https://github.com/carlssonemil"
          title="GitHub"
          no-external-favicon
        />

        <EmailLink class="px-3 py-1.5" />
      </nav>
    </div>
  </footer>
</template>

<script setup>
import EmailLink from '@/components/EmailLink.vue'
import TextLink from '@/components/TextLink.vue'

const currentYear = new Date().getFullYear()
</script>
