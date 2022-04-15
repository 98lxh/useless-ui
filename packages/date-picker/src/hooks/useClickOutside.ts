
import { onMounted, onUnmounted, Ref, } from "vue"

const whiteClass = ['nav-year',
  'nav-month',
  'year-cell',
  'month-cell',
  'cell',
  'u-icon-arrow-double-right',
  'u-icon-arrow-right',
  'u-icon-arrow-double-left',
  'u-icon-arrow-left',
  'panel__nav',
  'panel__footer',
  'panel__header',
  'panel__content',
  'days',
]

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
