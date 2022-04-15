export type DatePickerRenageValue = [Date, Date] | [Date]
export type DatePickerType = 'month' | 'year' | 'date' | 'range'

export type DatePickerValueType = Date | null | 'string' | DatePickerRenageValue

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
