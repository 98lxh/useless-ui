import { nextTick, onUnmounted, Ref } from "vue"
import { PopoverNodeProps } from "../popover.types"

export function useClick(props: PopoverNodeProps, contentRef: Ref<HTMLDivElement>, visible: Ref<boolean>, calcFn: Function) {
  let clickTimer: NodeJS.Timeout = null

  function closePopover() {
    visible.value = false
    clickTimer = setTimeout(() => {
      props.triggerCtx.instance = null
      props.onClose()
    }, 300)
  }

  function handleClickOutside(e) {
    if (contentRef.value.contains(e.target) || props.triggerEl.contains(e.target) && !props.triggerCtx.triggerEventOver) return
    closePopover()
  }

  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', closePopover)
  window.addEventListener('contextmenu', closePopover)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('resize', closePopover)
    window.removeEventListener('contextmenu', closePopover)
    window.clearTimeout(clickTimer)
  })
}
