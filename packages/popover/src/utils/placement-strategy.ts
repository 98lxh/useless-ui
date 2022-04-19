
import { ContentSizeType, PopoverPlacementType } from '../popover.types';


const placementStrategy = {
  top: {
    origin: ['top', 'tl', 'tr'],
    target: ['bottom', 'bl', 'br']
  },
  bottom: {
    origin: ['bottom', 'bl', 'br'],
    target: ['top', 'tl', 'tr']
  },
  left: {
    origin: ['lt', 'left', 'lb'],
    target: ['rt', 'right', 'rb'],
  },
  right: {
    origin: ['rt', 'right', 'rb'],
    target: ['lt', 'left', 'lb'],
  }
}


export const calculatePlacement = (triggerRect: DOMRect, contentSize: ContentSizeType, placement: PopoverPlacementType) => {
  for (const key in placementStrategy) {
    const strategy = placementStrategy[key]
    const index = strategy.origin.indexOf(placement)
    if (index !== -1) {
      const target = placementStrategy[key].target[index];
      const origin = placementStrategy[key].origin[index];
      switch (key) {
        case 'top':
          return triggerRect.top - contentSize.height > 0 ? origin : target
        case 'left':
          return triggerRect.left - contentSize.width > 0 ? origin : target
        case 'right':
          return document.documentElement.clientWidth - (triggerRect.right + contentSize.width) > 0 ? origin : target
        case 'bottom':
          return document.documentElement.clientHeight - (triggerRect.top + contentSize.height) > 0 ? origin : target
      }
    }
  }

  return 'top'
}
