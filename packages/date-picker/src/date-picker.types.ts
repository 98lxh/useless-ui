export type DatePickerRenageValue = [Date, Date] | [Date]
export type DatePickerType = 'month' | 'year' | 'date' | 'range'

export type DatePickerValueType = Date | null | DatePickerRenageValue

export interface DatePickerProps {
  value: DatePickerValueType,
  type: DatePickerType,
  placeholder?: string | string[],
  disabled?: boolean
}

export interface PickerPanelProps {
  value: Date,
  visible: boolean
}


export interface InputProps<T extends 'range' | 'input' = 'input'> {
  placeholder?: T extends 'range' ? [string, string] : string
  value?: T extends 'range' ? [string, string] : string
  disabled?: boolean
  onFocus: () => void
  error: any
}
