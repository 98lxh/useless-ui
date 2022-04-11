
export type InputType = 'text' | 'number' | 'password'
export type InputValueType = 'number' | 'string'

export interface InputProps {
  type?: InputType,
  placeholder?: string,
  value: number | string,
  error?: boolean,
  disabled?: boolean,
}
