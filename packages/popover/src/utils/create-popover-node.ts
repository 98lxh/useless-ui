import { PopoverPlacementType, PopoverProps, PopoverTriggerType } from '../popover.types';
import { render, VNode } from 'vue';
import { createVNode } from 'vue';
import PopoverNode from '../popover-node'
import { createPositionTarget } from './create-position-target';
export const createPopoverNode = (
  triggerEl: Element,
  content: string | VNode[],
  triggerCtx: any,
  triggerProps:PopoverProps
) => {
  const container = document.createElement('div')
  const positionTarget = createPositionTarget()

  const onClose = () => {
    vnode.el.className += ' zoom-fade-popover-leave-active zoom-fade-popover-leave-to'
    triggerCtx.instance = null;
    setTimeout(() => {
      render(null, container)
    }, 100)
  }
  const vnode = createVNode(PopoverNode, {
    ...triggerProps,
    onClose,
    content,
    triggerCtx,
    triggerEl,
  })

  render(vnode, container)
  
  positionTarget.appendChild(container.firstChild)
  
  return vnode
}
