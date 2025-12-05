<template>
  <div
    class="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block"
  >
    <div
      v-for="(blob, i) in blobs"
      :key="i"
      class="absolute rounded-full opacity-5"
      :style="{
        ...blob.style,
        width: blob.size + 'vw',
        height: blob.size + 'vw',
        background: blob.color,
        filter: `blur(${blob.blur}px)`,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const BLOB_COUNT = 4
const blobs = ref([])

const random = (min, max) => Math.random() * (max - min) + min

const noise = (() => {
  const permutation = Array.from({ length: 256 }, (_, i) => i).sort(
    () => Math.random() - 0.5,
  )
  const p = permutation.concat(permutation)

  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10)
  const lerp = (a, b, t) => a + t * (b - a)
  const grad = (hash, x) => (hash & 1 ? x : -x)

  return (x) => {
    const X = Math.floor(x) & 255
    x -= Math.floor(x)
    const u = fade(x)
    return lerp(grad(p[X], x), grad(p[X + 1], x - 1), u)
  }
})()

// Predefined blob zones
const zones = [
  { x: -20, y: -10 }, // Upper-left
  { x: 20, y: -5 }, // Upper-right
  { x: -10, y: 30 }, // Lower-left
  { x: 25, y: 40 }, // Lower-right
]

onMounted(() => {
  blobs.value = Array.from({ length: BLOB_COUNT }).map((_, i) => {
    const zone = zones[i % zones.length]

    return {
      size: random(45, 80),
      blur: random(120, 180),
      color: randomGradient(),

      baseX: zone.x,
      baseY: zone.y,

      offsetX: random(0, 500),
      offsetY: random(0, 500),
      offsetScale: random(0, 500),
      offsetRotate: random(0, 500),
    }
  })

  let frame = 0
  const animate = () => {
    frame += 0.0005

    blobs.value.forEach((blob) => {
      const nx = noise(blob.offsetX + frame)
      const ny = noise(blob.offsetY + frame * 0.7)
      const ns = noise(blob.offsetScale + frame * 0.4)
      const nr = noise(blob.offsetRotate + frame * 0.3)

      blob.style = {
        transform: `
          translate(
            ${blob.baseX + nx * 25}vw,
            ${blob.baseY + ny * 25}vh
          )
          scale(${1 + ns * 0.35})
          rotate(${nr * 50}deg)
        `,
      }
    })

    requestAnimationFrame(animate)
  }

  animate()
})

const randomGradient = () => {
  const h1 = random(0, 360)
  const h2 = (h1 + random(60, 140)) % 360
  const h3 = (h2 + random(60, 140)) % 360

  return `radial-gradient(circle,
    hsla(${h1}, 100%, 75%, 0.45),
    hsla(${h2}, 95%, 70%, 0.38),
    hsla(${h3}, 95%, 68%, 0.32)
  )`
}
</script>
