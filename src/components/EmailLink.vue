<template>
  <div ref="anchor" class="relative inline-block">
    <div
      v-if="isCopied"
      ref="floating"
      :style="floatingStyle"
      class="appear bg-base-bg-depth text-base-strong border-base-border absolute -top-9 flex w-max shrink-0 items-center gap-1.5 rounded-lg border py-1.5 pr-3 pl-2.5 shadow-xs"
    >
      <ClipboardIcon class="h-4 w-4 shrink-0 text-green-500" />
      <span class="text-sm">Email copied to clipboard</span>
    </div>

    <TextLink tag="button" title="Email" @click="handleCopy" />
  </div>
</template>

<script setup>
import { useFloatingPosition } from '@/composables/useFloatingPosition.js'
import { useClipboard } from '@/composables/useClipboard.js'
import ClipboardIcon from '@/components/icons/ClipboardIcon.vue'
import TextLink from '@/components/TextLink.vue'

const { anchor, floating, floatingStyle, showAndPosition } =
  useFloatingPosition()
const { isCopied, copy } = useClipboard()

const handleCopy = async () => {
  const ok = await copy('hello@emilcarlsson.se')

  if (ok) {
    showAndPosition()
    playPopSound()
  }
}

const playPopSound = () => {
  const audio = new Audio('/assets/audio/pop.mp3')
  audio.volume = 0.3
  audio.play()
}
</script>
