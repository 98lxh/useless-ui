import { PopoverProps, ContentType } from '../popover.types';
import { render } from 'vue';
import { createVNode } from 'vue';
import PopoverNode from '../popover-node'
import { createPositionTarget } from './create-position-target';
export const createPopoverNode = (
  triggerEl: HTMLElement,
  content: ContentType,
  triggerCtx: any,
  triggerProps: PopoverProps,
) => {
  const container = document.createElement('div')
  const positionTarget = createPositionTarget()
  const onClose = () => {
    vnode.el.className += ` zoom-fade-${triggerProps.placement}-leave-active zoom-fade-${triggerProps.placement}-leave-to`
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
