export type DatePickerType = 'month' | 'year' | 'day'
export interface DatePickerProps {
  value: Date,
  type: DatePickerType
}

export interface PickerPanelProps {
  value: Date,
  visible: boolean
}
