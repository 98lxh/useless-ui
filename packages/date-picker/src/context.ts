import type { InjectionKey, Ref } from 'vue'
import { DatePickerType } from './date-picker.types';
export interface DatePicker {
  currentDate: Ref<Date>,
  panelVisible: Ref<boolean>,
  closeDatePickerPanel: () => void,
  openDatePickerPanel: () => void,
  changeCurrentDate: (newDate: Date) => void,
  changePickerType: (type: DatePickerType) => void,
  originType: DatePickerType
}

export const injectDatePicker: InjectionKey<DatePicker> = Symbol();
