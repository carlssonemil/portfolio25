<template>
  <ul class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </ul>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
  {
    title: 'JSON Viewer',
    description:
      'A minimal tool that formats JSON into a readable tree structure.',
    url: 'https://json.emca.app/',
  },
  {
    title: 'Nebula',
    description: 'A camouflage tracker for Call of Duty: Black Ops 6.',
    url: 'https://nebula.emca.app/',
  },
  {
    title: 'Interstellar',
    description: 'A camouflage tracker for Call of Duty: Modern Warfare 3.',
    url: 'https://interstellar.emca.app/',
  },
  {
    title: 'Blabber',
    description: 'Anonymous real-time chat app.',
    url: 'https://blabber.vercel.app/',
  },
  {
    title: 'Quotes New Tab',
    description: 'A new tab extension that shows inspirational quotes.',
    url: 'https://quotesnewtab.com/',
  },
  {
    title: 'Quotes API',
    description: 'A free API for inspirational quotes.',
    url: 'https://quotesnewtab.com/api/docs',
  },
]

onMounted(async () => {
  await nextTick()

  const cards = Array.from(document.querySelectorAll('.appear'))

  if (!cards.length) return

  const first = cards[0]
  const cardWidth = first.offsetWidth
  const gridWidth = first.parentElement.offsetWidth
  const cardsPerRow = Math.max(1, Math.floor(gridWidth / cardWidth))

  cards.forEach((card, index) => {
    const row = Math.floor(index / cardsPerRow)
    const col = index % cardsPerRow
    const horizontalStagger = 50 // ms
    const verticalStagger = 200 // ms
    const delay = col * horizontalStagger + row * verticalStagger
    card.style.animationDelay = `${delay}ms`
  })
})
</script>
