import { PopoverPlacementType, PopoverTriggerType } from './../popover.types';
import { render, VNode } from 'vue';
import { createVNode } from 'vue';
import PopoverNode from './../popover-node'

const positionContainer = document.createElement('div')
positionContainer.style.position = 'absolute';
positionContainer.style.top = '0px'
positionContainer.style.left = '0px'
positionContainer.style.width = '100%'
document.body.appendChild(positionContainer)

export const createPopoverNode = (triggerEl: HTMLElement,
  content: string | VNode[],
  placement: PopoverPlacementType,
  triggerCtx: any,
  color: string,
  bgColor: string,
  trigger: PopoverTriggerType,
) => {
  const container = document.createElement('div')
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
  positionContainer.appendChild(container.firstChild)

  return vnode
}
