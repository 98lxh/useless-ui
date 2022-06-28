import { onMounted, Ref, reactive, onUnmounted } from 'vue';
import { PopoverProps, ContentType, TriggerContext } from '../popover.types';
import { createPopoverNode } from "../utils/create-popover-node"

function useEventMouse(
  triggerRef: Ref<any>,
  content: ContentType,
  triggerProps: PopoverProps
) {
  let el: HTMLElement
  let timer: NodeJS.Timeout | null = null
  const { trigger } = triggerProps

  const triggerCtx = reactive<TriggerContext>({
    triggerEventOver: false,
    placement: 'top',
    instance: null
  })

  function handleOpenPopover() {
    triggerCtx.triggerEventOver = (trigger === 'click') ? false : true

    if (triggerCtx.instance && trigger === 'click') {
      triggerCtx.triggerEventOver = true
      return triggerCtx.instance = null
    }

    triggerCtx.instance = createPopoverNode(el, content, triggerCtx, triggerProps)
  }

  function handleClosePopover() {
    if (trigger === 'click') return triggerCtx.instance.props.onClose(triggerCtx.placement)

    timer = setTimeout(() => {
      triggerCtx.triggerEventOver = false
    }, 100)
  }

  onMounted(() => {
    el = triggerRef.value.$el || triggerRef.value
    el.addEventListener(trigger === 'hover' ? 'mouseenter' : 'click', handleOpenPopover)
    trigger === 'hover' && el.addEventListener('mouseleave', handleClosePopover)
  })

  onUnmounted(() => {
    el.removeEventListener(trigger === 'hover' ? 'mouseenter' : 'click', handleOpenPopover)
    trigger === 'hover' && el.removeEventListener('mouseleave', handleClosePopover)
    timer && window.clearTimeout(timer)
  })

  return {
    triggerCtx
  }
}

export function usePopover(props: PopoverProps, triggerRef: Ref<any>, slots: any) {
  const content: ContentType = props.content || slots.content
  const { triggerCtx } = useEventMouse(triggerRef, content, props)

  return {
    triggerCtx
  }
}
