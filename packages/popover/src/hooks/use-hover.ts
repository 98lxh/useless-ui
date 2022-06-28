import { onMounted, onUnmounted, Ref, watch } from "vue";
import { PopoverNodeProps } from "../popover.types";

export function useHover(props: PopoverNodeProps, contentMouseOver: Ref<boolean>, visible: Ref<boolean>, contentRef: Ref<HTMLDivElement>) {
  let timer: NodeJS.Timeout = null

  function handleContentMouseEvent(currentState: boolean) {
    contentMouseOver.value = currentState
  }

  onMounted(() => {
    contentRef.value.addEventListener('mouseleave', handleContentMouseEvent.bind(false))
    contentRef.value.addEventListener('mouseenter', handleContentMouseEvent.bind(true))
  })

  watch([props.triggerCtx, contentMouseOver], () => {
    if (!props.triggerCtx.triggerEventOver && !contentMouseOver.value && props.trigger === 'hover') {
      visible.value = false
      timer = setTimeout(() => {
        props.onClose()
      }, 300)
    }
  })

  onUnmounted(() => {
    contentRef.value.removeEventListener('mouseleave', handleContentMouseEvent.bind(false))
    contentRef.value.removeEventListener('mouseenter', handleContentMouseEvent.bind(true))
    window.clearTimeout(timer)
  })
}
