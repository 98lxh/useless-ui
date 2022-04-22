import { onMounted, Ref, VNode, reactive, onUnmounted, toRefs } from 'vue';
import { PopoverProps } from '../popover.types';
import { createPopoverNode } from "../utils/create-popover-node"


const useEventMouse = (triggerRef: Ref<any>, content: string | VNode[], triggerProps: PopoverProps) => {
  let el: any
  const { trigger } = triggerProps
  const triggerCtx = reactive({
    triggerEventOver: false,
    instance: null
  })

  const handleOpenPopover = () => {
    triggerCtx.triggerEventOver = trigger === 'click' ? false : true
    if (triggerCtx.instance && trigger === 'click') {
      triggerCtx.triggerEventOver = false
      triggerCtx.instance.props.onClose()
      return triggerCtx.instance = null
    }
    triggerCtx.instance = createPopoverNode(el, content, triggerCtx, triggerProps)
  }

  const handleClosePopover = () => {
    if(trigger === 'click'){
      return triggerCtx.instance.props.onClose()
    }
    
    setTimeout(()=>{
      triggerCtx.triggerEventOver = false
    },100)
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

  return {
    triggerCtx
  }
}

export const usePopover = (props: PopoverProps, triggerRef: Ref<any>, slots: any) => {
  const content: string | VNode[] = props.content || slots.content()
  const {triggerCtx} = useEventMouse(triggerRef, content, props)

  return {
    triggerCtx
  }
}
