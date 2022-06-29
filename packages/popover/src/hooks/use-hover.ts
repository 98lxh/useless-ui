import { onMounted, onUnmounted, Ref, watch } from "vue";
import { PopoverNodeProps } from "../popover.types";

export function useHover(props: PopoverNodeProps, contentMouseOver: Ref<boolean>, visible: Ref<boolean>) {
  let timer: NodeJS.Timeout = null

  watch([props.triggerCtx, contentMouseOver], () => {
    if (!props.triggerCtx.triggerEventOver && !contentMouseOver.value && props.trigger === 'hover') {
      visible.value = false
      timer = setTimeout(() => {
        props.onClose()
      }, 300)
    }
  })

  onUnmounted(() => {
    window.clearTimeout(timer)
  })
}
