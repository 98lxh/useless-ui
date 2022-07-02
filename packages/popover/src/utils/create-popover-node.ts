import { render, createVNode } from 'vue';
import PopoverNode from '../popover-node'
import { PopoverProps, ContentType, TriggerContext } from '../popover.types';
import { createPositionTarget } from '@useless-ui/utils';

export function createPopoverNode(
  triggerEl: HTMLElement,
  content: ContentType,
  triggerCtx: TriggerContext,
  triggerProps: PopoverProps,
) {
  const container = document.createElement('div')
  const positionTarget = createPositionTarget()

  function onClose() {
    triggerCtx.instance = null;
    render(null, container)
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
