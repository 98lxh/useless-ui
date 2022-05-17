import { PopoverPlacementType, PopoverNodePositionType, ContentSizeType } from '../popover.types';


export const calculatePosition = (
  triggerRect: DOMRect,
  contentSize: ContentSizeType,
  placement: PopoverPlacementType,
  isShowArrow: boolean
): PopoverNodePositionType => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
  const triggerTop = triggerRect.top + scrollTop
  const triggerLeft = triggerRect.left + scrollLeft
  const arrowHeight = isShowArrow ? 10 : 3;

  const positonMap = {
    bottom: {
      top: triggerTop + triggerRect.height + arrowHeight + 'px',
      left: triggerLeft + triggerRect.width / 2 - contentSize.width / 2 + 'px'
    },
    top: {
      top: triggerTop - contentSize.height - arrowHeight + 'px',
      left: triggerLeft + triggerRect.width / 2 - contentSize.width / 2 + 'px'
    },
    left: {
      top: triggerTop - contentSize.height / 2 + triggerRect.height / 2 + 'px',
      left: triggerLeft - contentSize.width - arrowHeight + 'px'
    },
    right: {
      top: triggerTop - contentSize.height / 2 + triggerRect.height / 2 + 'px',
      left: triggerRect.right + arrowHeight + 'px'
    },
    tl: {
      top: triggerTop - contentSize.height - arrowHeight + 'px',
      left: triggerLeft + 'px'
    },
    tr: {
      top: triggerTop - contentSize.height - arrowHeight + 'px',
      left: triggerRect.right - contentSize.width + 'px'
    },
    lt: {
      top: triggerTop + 'px',
      left: triggerLeft - contentSize.width - arrowHeight + 'px'
    },
    lb: {
      top: triggerTop - contentSize.height + triggerRect.height + 'px',
      left: triggerLeft - contentSize.width - arrowHeight + 'px'
    },
    bl: {
      top: triggerTop + triggerRect.height + arrowHeight + 'px',
      left: triggerLeft + 'px'
    },
    br: {
      top: triggerTop + triggerRect.height + arrowHeight + 'px',
      left: triggerRect.right - contentSize.width + 'px'
    },
    rt: {
      top: triggerTop + 'px',
      left: triggerRect.right + arrowHeight + 'px'
    },
    rb: {
      top: triggerTop - contentSize.height + triggerRect.height + 'px',
      left: triggerRect.right + 10 + 'px'
    }
  }



  return positonMap[placement]
}
