import { PopoverPlacementType, PopoverNodePositionType, ContentSizeType } from './../popover.types';


export const calculatePosition = (triggerRect: DOMRect, contentSize: ContentSizeType, placement: PopoverPlacementType): PopoverNodePositionType => {
  const triggerTop = triggerRect.top + document.documentElement.scrollTop
  const triggerLeft = triggerRect.left + document.documentElement.scrollLeft
  const positonMap = {
    bottom: {
      top: triggerTop + triggerRect.height + 10 + 'px',
      left: triggerLeft + triggerRect.width / 2 - contentSize.width / 2 + 'px'
    },
    top: {
      top: triggerTop - contentSize.height - 10 + 'px',
      left: triggerLeft + triggerRect.width / 2 - contentSize.width / 2 + 'px'
    },
    left: {
      top: triggerTop - contentSize.height / 2 + triggerRect.height / 2 + 'px',
      left: triggerLeft - contentSize.width - 10 + 'px'
    },
    right: {
      top: triggerTop - contentSize.height / 2 + triggerRect.height / 2 + 'px',
      left: triggerRect.right + 10 + 'px'
    },
    tl: {
      top: triggerTop - contentSize.height - 10 + 'px',
      left: triggerLeft + 'px'
    },
    tr: {
      top: triggerTop - contentSize.height - 10 + 'px',
      left: triggerRect.right - contentSize.width + 'px'
    },
    lt: {
      top: triggerTop + 'px',
      left: triggerLeft - contentSize.width - 10 + 'px'
    },
    lb: {
      top: triggerTop - contentSize.height + triggerRect.height + 'px',
      left: triggerLeft - contentSize.width - 10 + 'px'
    },
    bl: {
      top: triggerTop + triggerRect.height + 10 + 'px',
      left: triggerLeft + 'px'
    },
    br: {
      top: triggerTop + triggerRect.height + 10 + 'px',
      left: triggerRect.right - contentSize.width + 'px'
    },
    rt: {
      top: triggerTop + 'px',
      left: triggerRect.right + 10 + 'px'
    },
    rb: {
      top: triggerTop - contentSize.height + triggerRect.height + 'px',
      left: triggerRect.right + 10 + 'px'
    }
  }



  return positonMap[placement]
}
