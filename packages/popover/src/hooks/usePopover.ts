import { onMounted, Ref, VNode, reactive, onUnmounted } from 'vue';
import { PopoverProps, PopoverTriggerType, PopoverPlacementType } from './../popover.types';
import { createPopoverNode } from "./../utils/createPopoverNode"


const useEventMouse = (triggerRef: Ref<any>, content: string | VNode[], placement: PopoverPlacementType, triggerType: PopoverTriggerType) => {
  let listener: any
  const triggerCtx = reactive({
    triggerEventOver: false
  })
  onMounted(() => {
    const el = triggerRef.value.$el
    listener = (isOpen: boolean) => {
      if (isOpen) {
        triggerCtx.triggerEventOver = true
        createPopoverNode(el, content, placement, triggerCtx)
      } else {
        setTimeout(() => {
          triggerCtx.triggerEventOver = false
        }, 50)
      }
    }
    el.addEventListener(triggerType === 'hover' ? 'mouseenter' : 'click', listener.bind(null, true))
    el.addEventListener('mouseleave', listener.bind(null, false))
  })

  onUnmounted(() => {
    const el = triggerRef.value.$el;
    el.removeListener(triggerType === 'hover' ? 'mouseenter' : 'click', listener)
    el.removeListener('mouseleave', listener)
  })
}


const useEventOutSide = (triggerProps: PopoverProps, triggerRef: Ref<any>, content: string | VNode[]) => {
  const { trigger, placement } = triggerProps
  useEventMouse(triggerRef, content, placement, trigger)
}

export const usePopover = (props: PopoverProps, triggerRef: Ref<any>, slots: any) => {
  const content: string | VNode[] = props.content || slots.content()
  useEventOutSide(props, triggerRef, content);
}
