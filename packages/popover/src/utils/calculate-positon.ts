import { PopoverPlacementType, PopoverNodePositionType, ContentSizeType } from '../popover.types';


export const calculatePosition = (
  triggerRect: DOMRect, 
  contentSize: ContentSizeType,
  placement: PopoverPlacementType,
  showArrow:Boolean
  ): PopoverNodePositionType => {
  const triggerTop = triggerRect.top + document.documentElement.scrollTop
  const triggerLeft = triggerRect.left + document.documentElement.scrollLeft
  const arrowSize = showArrow ? 10 : 5
  const positonMap = {
    bottom: {
      top: triggerTop + triggerRect.height + arrowSize + 'px',
      left: triggerLeft + triggerRect.width / 2 - contentSize.width / 2 + 'px'
    },
    top: {
      top: triggerTop - contentSize.height - arrowSize + 'px',
      left: triggerLeft + triggerRect.width / 2 - contentSize.width / 2 + 'px'
    },
    left: {
      top: triggerTop - contentSize.height / 2 + triggerRect.height / 2 + 'px',
      left: triggerLeft - contentSize.width - arrowSize + 'px'
    },
    right: {
      top: triggerTop - contentSize.height / 2 + triggerRect.height / 2 + 'px',
      left: triggerRect.right + arrowSize + 'px'
    },
    tl: {
      top: triggerTop - contentSize.height - arrowSize + 'px',
      left: triggerLeft + 'px'
    },
    tr: {
      top: triggerTop - contentSize.height - arrowSize + 'px',
      left: triggerRect.right - contentSize.width + 'px'
    },
    lt: {
      top: triggerTop + 'px',
      left: triggerLeft - contentSize.width - arrowSize + 'px'
    },
    lb: {
      top: triggerTop - contentSize.height + triggerRect.height + 'px',
      left: triggerLeft - contentSize.width - arrowSize + 'px'
    },
    bl: {
      top: triggerTop + triggerRect.height + arrowSize + 'px',
      left: triggerLeft + 'px'
    },
    br: {
      top: triggerTop + triggerRect.height + arrowSize + 'px',
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
