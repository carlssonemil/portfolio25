import { ref } from 'vue'

export const useClipboard = (timeout = 3000) => {
  const isCopied = ref(false)

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)

      if (timeout) {
        isCopied.value = true
        setTimeout(() => (isCopied.value = false), timeout)
      }

      return true
    } catch (error) {
      console.log('Clipboard copy failed', error)
      return false
    }
  }

  return { isCopied, copy }
}
