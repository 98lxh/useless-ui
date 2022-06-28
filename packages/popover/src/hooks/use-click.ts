import { onUnmounted, Ref } from "vue"
import { PopoverNodeProps } from "../popover.types"

export function useClick(props: PopoverNodeProps, contentRef: Ref<HTMLDivElement>, visible: Ref<boolean>) {
  let clickTimer: NodeJS.Timeout = null

  function handleClickOutside(e) {
    if (contentRef.value.contains(e.target) || props.triggerEl.contains(e.target) && !props.triggerCtx.triggerEventOver) return

    visible.value = false
    clickTimer = setTimeout(() => {
      props.triggerCtx.instance = null
      props.onClose()
    }, 300)
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.clearTimeout(clickTimer)
  })
}
