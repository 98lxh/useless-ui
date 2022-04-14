export type DatePickerType = 'month' | 'year' | 'date'

export type DatePickerValueType = Date | null | 'string'

export interface DatePickerProps {
  value: DatePickerValueType,
  type: DatePickerType,
  placeholder?: string
  disabled?: boolean
}

export interface PickerPanelProps {
  value: Date,
  visible: boolean
}
