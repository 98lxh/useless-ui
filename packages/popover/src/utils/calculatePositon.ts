import { PopoverPlacementType, PopoverNodePositionType } from './../popover.types';
type ContentSizeType = {
  height: number,
  width: number
}
export const calculatePosition = (triggerRect: DOMRect, contentSize: ContentSizeType, placement: PopoverPlacementType): PopoverNodePositionType => {
  const positonMap = {
    bottom: {
      top: triggerRect.top + triggerRect.height + 10 + 'px',
      left: triggerRect.left - contentSize.width / 4 + 'px'
    },
    top: {
      top: triggerRect.top - contentSize.height - 10 + 'px',
      left: triggerRect.left - contentSize.width / 4 + 'px'
    },
    left: {
      top: triggerRect.top - contentSize.height / 4 - 15 + 'px',
      left: triggerRect.left - contentSize.width - 10 + 'px'
    },
    right: {
      top: triggerRect.top - contentSize.height / 4 - 15 + 'px',
      right: triggerRect.right - 10 + 'px'
    },
    tl: {
      top: triggerRect.top - contentSize.height - 10 + 'px',
      left: triggerRect.left + 'px'
    },
    tr: {
      top: triggerRect.top - contentSize.height - 10 + 'px',
      left: triggerRect.left - contentSize.width / 2 + 'px'
    },
    lt: {
      top: triggerRect.top + 'px',
      left: triggerRect.left - contentSize.width - 10 + 'px'
    },
    lb: {
      top: triggerRect.bottom - contentSize.height + 'px',
      left: triggerRect.left - contentSize.width - 10 + 'px'
    },
    bl: {
      top: triggerRect.top + triggerRect.height + 10 + 'px',
      left: triggerRect.left + 'px'
    },
    br: {
      top: triggerRect.top + triggerRect.height + 10 + 'px',
      left: triggerRect.left - contentSize.width / 2 + 'px'
    },
    rt: {
      top: triggerRect.top + 'px',
      right: triggerRect.right - 10 + 'px'
    },
    rb: {
      top: triggerRect.bottom - contentSize.height + 'px',
      right: triggerRect.right - 10 + 'px'
    }
  }

  return positonMap[placement]
}
