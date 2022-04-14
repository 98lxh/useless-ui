
import { onMounted, onUnmounted, Ref, } from "vue"

const whiteClass = ['nav-year', 'nav-month', 'year-cell', 'month-cell']

const isWhite = (classList: any) => {
  if (!classList.length) return whiteClass.includes(classList)
  return [...classList].some(c => whiteClass.includes(c))
}

export const useClickOutSide = (ref: Ref<Element>, handler: any) => {
  const listener = (event) => {
    if (!ref.value || !ref.value.contains(event.target) && !isWhite(event.target.classList)) {
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
