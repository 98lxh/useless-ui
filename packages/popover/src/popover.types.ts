import { VNode } from 'vue';
export type PopoverTriggerType = 'hover' | 'click'
export type PopoverPlacementType = 'top' | 'right' | 'bottom' | 'left'
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
}

export interface PopoverNodeProps {
  title?: string,
  content?: PopoverNodeContent,
  placement: PopoverPlacementType
}
