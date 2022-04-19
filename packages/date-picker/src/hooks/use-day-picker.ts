import { computed, ref, Ref } from "vue"
import { DatePickerType, DatePickerValueType } from '../date-picker.types';
import { getYearMonthDay, getDate, buildDays, buildWeeks, getVisibleDays } from '../utils/date-helper';

const getCurrentDate = (currenDate: Ref<DatePickerValueType>, isTarget: Boolean, type: DatePickerType) => {
  if (type === 'range') {
    if (isTarget) return currenDate.value[1]
    if (!isTarget) return currenDate.value[0]
  }
  return currenDate.value
}


export const useDayPicker = (currenDate: Ref<DatePickerValueType>, isTarget: Boolean, type: DatePickerType) => {
  const days = computed(() => buildDays())
  const weeks = computed(() => buildWeeks())
  const originCalendar = getYearMonthDay(getCurrentDate(currenDate, isTarget, type))
  const calendar = ref({
    ...originCalendar,
    month: isTarget ? originCalendar.month + 1 : originCalendar.month
  })

  const visibleDays = computed(() => {
    const { year, month, day } = calendar.value
    return getVisibleDays(getDate(year, month, day))
  })

  return {
    visibleDays,
    getCurrentDate,
    days,
    weeks,
    calendar
  }
}
