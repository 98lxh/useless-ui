import { DatePickerValueType } from './../date-picker.types';
import { getDate } from './../utils/formatDate';
import { computed, getCurrentInstance, Ref, ref, watch } from "vue";
import { DatePickerProps, DatePickerType } from "../date-picker.types";
import { getYearMonthDay } from "../utils/formatDate";

const useWatchCurrentDate = (currentDate: Ref<any>, type: DatePickerType) => {
  const emit = getCurrentInstance().emit;
  watch(currentDate, (newV) => {
    const { year, month, day } = getYearMonthDay(newV)
    let date: any;
    switch (type) {
      case 'date':
        date = `${year}-${month + 1}-${day}`
        break;
      case 'month':
        date = `${year}-${month + 1}-1`
        break;
      default:
        date = `${year}-1-1`
        break;
    }
    emit('update:value', date)
  })
}

export const useDatePicker = (props: DatePickerProps) => {
  const { value, type } = props;
  const currentDate = ref(value || new Date())
  const currentType = ref(type)
  const formatDate = computed(() => {
    const { year, month, day } = getYearMonthDay(currentDate.value as any)
    switch (type) {
      case 'date':
        return `${year}-${month + 1}-${day}`
      case 'month':
        return `${year}-${month + 1}`
      default:
        return `${year}`
    }
  })

  useWatchCurrentDate(currentDate, type)
  return {
    currentDate,
    formatDate,
    currentType
  }
}
