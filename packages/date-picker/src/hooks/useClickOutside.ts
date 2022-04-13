
import { onMounted, onUnmounted, Ref } from "vue"

export const useClickOutSide = (ref: Ref<Element>, handler: any) => {
  const listener = (event) => {
    if (!ref.value || !ref.value.contains(event.target)) {
      handler()
    }
  }

  onMounted(() => {
    document.addEventListener('click', listener)
  })
  onUnmounted(() => {
    document.removeEventListener('click', listener)
  })
}
