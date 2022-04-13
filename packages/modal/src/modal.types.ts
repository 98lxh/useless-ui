export type ModalPosition = {
  x: number,
  y: number,
}
export interface ModalProps {
  visible: boolean
  originPosition?: ModalPosition,
  targetPosition?: ModalPosition
}
