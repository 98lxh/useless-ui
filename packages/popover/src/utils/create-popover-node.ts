import { PopoverProps, ContentType, PopoverPlacementType } from '../popover.types';
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
    const { placement } = triggerCtx
    vnode.el.className += ` zoom-fade-${placement}-leave-active zoom-fade-${placement}-leave-to`
    triggerCtx.instance = null;
    setTimeout(() => {
      render(null, container)
    }, 200)
    triggerProps.onClose()
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
