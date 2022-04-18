import type { InjectionKey, Ref } from 'vue'
import { DatePickerType, DatePickerValueType } from './date-picker.types';
export interface DatePicker {
  currentDate: Ref<DatePickerValueType>,
  panelVisible: Ref<boolean>,
  closeDatePickerPanel: () => void,
  openDatePickerPanel: () => void,
  changeCurrentDate: (newDate: DatePickerValueType) => void,
  changePickerType: (type: DatePickerType) => void,
  originType: DatePickerType,
}

export const injectDatePicker: InjectionKey<DatePicker> = Symbol();
