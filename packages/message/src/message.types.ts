export type MessageType = 'success' | 'warning' | 'info' | 'error'
export interface IMessageOptions {
  id?: string,
  content?: string,
  type?: MessageType,
  duration?: number,
  center?: boolean,
  offset?: number,
  onClose?: () => void
}

export type IMessageParams = IMessageOptions | string
