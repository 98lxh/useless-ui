import { onMounted, Ref, VNode, reactive, onUnmounted } from 'vue';
import { PopoverProps, PopoverTriggerType, PopoverPlacementType } from './../popover.types';
import { createPopoverNode } from "./../utils/createPopoverNode"


const useEventMouse = (triggerRef: Ref<any>, content: string | VNode[], triggerProps: PopoverProps) => {
  let listener: any
  const { trigger, placement, color, bgColor } = triggerProps
  const triggerCtx = reactive({
    triggerEventOver: false
  })
  onMounted(() => {
    const el = triggerRef.value.$el
    listener = (isOpen: boolean) => {
      if (isOpen) {
        triggerCtx.triggerEventOver = true
        createPopoverNode(el, content, placement, triggerCtx, color, bgColor)
      } else {
        setTimeout(() => {
          triggerCtx.triggerEventOver = false
        }, 50)
      }
    }
    el.addEventListener(trigger === 'hover' ? 'mouseenter' : 'click', listener.bind(null, true))
    el.addEventListener('mouseleave', listener.bind(null, false))
  })

  onUnmounted(() => {
    const el = triggerRef.value.$el;
    el.removeListener(trigger === 'hover' ? 'mouseenter' : 'click', listener)
    el.removeListener('mouseleave', listener)
  })
}


const useEventOutSide = (triggerProps: PopoverProps, triggerRef: Ref<any>, content: string | VNode[]) => {
  useEventMouse(triggerRef, content, triggerProps)
}

export const usePopover = (props: PopoverProps, triggerRef: Ref<any>, slots: any) => {
  const content: string | VNode[] = props.content || slots.content()
  useEventOutSide(props, triggerRef, content);
}