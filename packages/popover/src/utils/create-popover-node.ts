import { PopoverProps, ContentType, TriggerContext } from '../popover.types';
import { render } from 'vue';
import { createVNode } from 'vue';
import PopoverNode from '../popover-node'
import { createPositionTarget } from './create-position-target';

export function createPopoverNode(
  triggerEl: HTMLElement,
  content: ContentType,
  triggerCtx: TriggerContext,
  triggerProps: PopoverProps,
) {
  const container = document.createElement('div')
  const positionTarget = createPositionTarget()

  function onClose() {
    const { placement } = triggerCtx
    vnode.el.className += ` zoom-fade-${placement}-leave-active zoom-fade-${placement}-leave-to`
    triggerCtx.instance = null;

    setTimeout(() => {
      render(null, container)
    }, 200)

    triggerProps.onClose && triggerProps.onClose()
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
