
export type InputType = 'text' | 'password' | 'number'
export type InputValueType = number | string

export interface InputProps {
  type?: InputType,
  placeholder?: string,
  value: number | string,
  error?: any,
  disabled?: boolean,
  showPassword: boolean
}
