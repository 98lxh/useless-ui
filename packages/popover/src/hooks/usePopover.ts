import { onMounted, Ref, VNode, reactive, onUnmounted } from 'vue';
import { PopoverProps } from './../popover.types';
import { createPopoverNode } from "./../utils/createPopoverNode"


const useEventMouse = (triggerRef: Ref<any>, content: string | VNode[], triggerProps: PopoverProps) => {
  let el: any
  let instance;
  const { trigger, placement, color, bgColor } = triggerProps
  const triggerCtx = reactive({
    triggerEventOver: false
  })

  const handleOpenPopover = () => {
    triggerCtx.triggerEventOver = trigger === 'click' ? false : true
    if (instance) {
      instance.props.onClose()
    }
    instance = createPopoverNode(el, content, placement, triggerCtx, color, bgColor, trigger)
  }

  const handleClosePopover = () => {
    setTimeout(() => {
      triggerCtx.triggerEventOver = false
      instance = null
    }, 100)
  }

  onMounted(() => {
    el = triggerRef.value.$el || triggerRef.value
    el.addEventListener(trigger === 'hover' ? 'mouseenter' : 'click', handleOpenPopover)
    if (trigger === 'hover') el.addEventListener('mouseleave', handleClosePopover)
  })

  onUnmounted(() => {
    el.removeEventListener(trigger === 'hover' ? 'mouseenter' : 'click', handleOpenPopover)
    if (trigger === 'hover') el.removeEventListener('mouseleave', handleClosePopover)
  })
}

export const usePopover = (props: PopoverProps, triggerRef: Ref<any>, slots: any) => {
  const content: string | VNode[] = props.content || slots.content()
  useEventMouse(triggerRef, content, props)
}
