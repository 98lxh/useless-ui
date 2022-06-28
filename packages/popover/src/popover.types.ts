import { PropType, VNode } from 'vue';
export type PopoverTriggerType = 'hover' | 'click'
export type PopoverPlacementType = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb'
export type PopoverNodeContent = string | VNode[];
export type ContentType = string | Function
export type PopoverNodePositionType = {
  top?: string,
  left?: string,
  right?: string,
  bottom?: string
}
export interface PopoverProps {
  title?: string,
  trigger?: PopoverTriggerType
  content?: string | Function;
  placement?: PopoverPlacementType
  color?: string
  bgColor?: string
  onClose?: () => void
}

export type ContentSizeType = {
  height: number
  width: number
}

export type TriggerContext = {
  triggerEventOver: boolean
  placement: PopoverPlacementType
  instance: any
}

export interface PopoverNodeProps extends PopoverProps {
  triggerEl: Element,
  triggerCtx: TriggerContext
}


export const basePopoverProps = {
  title: {
    type: String,
    default: ''
  },
  content: {
    type: [
      String,
      Function
    ],
    default: ''
  },
  onClose: {
    type: Function as PropType<() => void>
  },
  trigger: {
    type: String as PropType<PopoverTriggerType>,
    default: 'hover'
  },
  placement: {
    type: String as PropType<PopoverPlacementType>,
    default: 'top'
  },
  color: {
    type: String,
    default: '#000'
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  visible: {
    type: Boolean,
    default: true
  },
  padding: {
    type: String,
    default: '10px'
  }
}
