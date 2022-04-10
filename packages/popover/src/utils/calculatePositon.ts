import { PopoverPlacementType, PopoverNodePositionType } from './../popover.types';
type ContentSizeType = {
  height: number,
  width: number
}
export const calculatePosition = (triggerRect: DOMRect, contentSize: ContentSizeType, placement: PopoverPlacementType): PopoverNodePositionType => {
  const position: PopoverNodePositionType = {}
  switch (placement) {
    case 'top':
      position.top = triggerRect.top - contentSize.height - 10 + 'px'
      position.left = triggerRect.left + 'px'
      break
    case 'left':
      position.top = triggerRect.top + 'px';
      position.left = triggerRect.left - contentSize.width - 10 + 'px'
      break
    case 'right':
      position.top = triggerRect.top + 'px';
      position.left = triggerRect.right + 10 + 'px'
      break
    case 'bottom':
      position.top = triggerRect.top + triggerRect.height + 10 + 'px'
      position.left = triggerRect.left + 'px'
      break
  }
  return position
}
