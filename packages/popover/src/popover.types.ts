import { VNode } from 'vue';
export type PopoverTriggerType = 'hover' | 'click'
export type PopoverPlacementType = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb'
export type PopoverNodeContent = string | VNode[];
export type PopoverNodePositionType = {
  top?: string,
  left?: string,
  right?: string,
  bottom?: string
}
export interface PopoverProps {
  title?: string,
  trigger?: PopoverTriggerType
  content?: string;
  placement?: PopoverPlacementType,
  color?: string
  bgColor?: string
  showArrow?:boolean
}

export interface PopoverNodeProps {
  title?: string,
  content?: PopoverNodeContent,
  placement: PopoverPlacementType
}

export type ContentSizeType = {
  height: number,
  width: number
}
