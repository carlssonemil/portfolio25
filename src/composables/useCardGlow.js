import { ref } from 'vue'

export function useCardGlow({ borderOffset = 80, drift = 0.08 } = {}) {
  const borderGlow = ref({ x: 0, y: 0 })
  const cursor = ref({ x: 0, y: 0 })
  const smoothGlow = ref({ x: 0, y: 0 })

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    borderGlow.value = {
      x: event.clientX - rect.left - borderOffset,
      y: event.clientY - rect.top - borderOffset,
    }

    cursor.value = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }

  const lerp = (a, b, t) => a + (b - a) * t

  const animate = () => {
    smoothGlow.value.x = lerp(smoothGlow.value.x, cursor.value.x, drift)
    smoothGlow.value.y = lerp(smoothGlow.value.y, cursor.value.y, drift)

    requestAnimationFrame(animate)
  }

  animate()

  return {
    borderGlow,
    smoothGlow,
    onMouseMove,
  }
}
