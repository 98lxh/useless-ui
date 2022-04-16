import { PopoverPlacementType, PopoverTriggerType } from './../popover.types';
import { render, VNode } from 'vue';
import { createVNode } from 'vue';
import PopoverNode from './../popover-node'
export const createPopoverNode = (triggerEl: HTMLElement,
  content: string | VNode[],
  placement: PopoverPlacementType,
  triggerCtx: any,
  color: string,
  bgColor: string,
  trigger: PopoverTriggerType,
) => {
  const triggerRect = triggerEl.getBoundingClientRect()
  const container = document.createElement('div')
  const onClose = () => {
    render(null, container)
  }

  const vnode = createVNode(PopoverNode, {
    onClose,
    content,
    placement,
    triggerRect,
    triggerCtx,
    color,
    bgColor,
    trigger,
    triggerEl
  })
  render(vnode, container)
  document.body.appendChild(container.firstChild)

  return vnode
}
