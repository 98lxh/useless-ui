import { PopoverPlacementType, PopoverTriggerType } from '../popover.types';
import { render, VNode } from 'vue';
import { createVNode } from 'vue';
import PopoverNode from '../popover-node'
import { createPositionTarget } from './create-position-target';
export const createPopoverNode = (triggerEl: HTMLElement,
  content: string | VNode[],
  placement: PopoverPlacementType,
  triggerCtx: any,
  color: string,
  bgColor: string,
  trigger: PopoverTriggerType,
) => {
  const container = document.createElement('div')
  const positionTarget = createPositionTarget()
  const onClose = () => {
    vnode.el.className += ' zoom-fade-popover-leave-active zoom-fade-popover-leave-to'
    setTimeout(() => {
      render(null, container)
    }, 100)
  }

  const vnode = createVNode(PopoverNode, {
    onClose,
    content,
    placement,
    triggerCtx,
    color,
    bgColor,
    trigger,
    triggerEl,
  })
  render(vnode, container)
  positionTarget.appendChild(container.firstChild)
  return vnode
}
