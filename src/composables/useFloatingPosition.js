import { ref, nextTick } from 'vue'

export const useFloatingPosition = (viewportEdgeOffset = 16) => {
  const anchor = ref(null)
  const floating = ref(null)
  const floatingStyle = ref({})

  const updatePosition = () => {
    const floatEl = floating.value
    const anchorEl = anchor.value

    if (!floatEl || !anchorEl) return

    // Base horizontal centering
    let left = anchorEl.offsetWidth / 2 - floatEl.offsetWidth / 2

    // Anchor position relative to viewport
    const anchorRect = anchorEl.getBoundingClientRect()
    const vw = window.innerWidth || document.documentElement.clientWidth

    let floatLeft = anchorRect.left + left
    let floatRight = floatLeft + floatEl.offsetWidth

    // Prevent left overflow
    if (floatLeft < viewportEdgeOffset) {
      left -= floatRight - (vw - viewportEdgeOffset)
    }

    // Prevent right overflow
    if (floatRight > vw - viewportEdgeOffset) {
      left -= floatRight - (vw - viewportEdgeOffset)
    }

    floatingStyle.value = {
      left: `${left}px`,
    }
  }

  const showAndPosition = async () => {
    await nextTick()
    updatePosition()
  }

  return {
    anchor,
    floating,
    floatingStyle,
    updatePosition,
    showAndPosition,
  }
}
