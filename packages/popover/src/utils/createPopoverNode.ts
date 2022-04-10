import { Ref } from 'vue';
import { PopoverPlacementType } from './../popover.types';
import { render, VNode } from 'vue';
import { createVNode } from 'vue';
import PopoverNode from './../popover-node'
export const createPopoverNode = (triggerEl: HTMLElement, content: string | VNode[], placement: PopoverPlacementType, triggerCtx: any) => {
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
    triggerCtx
  })
  render(vnode, container)
  document.body.appendChild(container.firstChild)

  return vnode
}
