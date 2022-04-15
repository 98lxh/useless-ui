import { getYearMonthDay, getDate, buildDays, buildWeeks } from '../utils/formatDate';
import { computed, reactive, ref, Ref } from "vue"
import { DatePickerType, DatePickerValueType } from '../date-picker.types';

const getVisibleDays = (value: Date) => {
  const { year, month } = getYearMonthDay(value)
  const currentFirstDay = getDate(year, month) as any;
  const week = currentFirstDay.getDay()
  const startDay = currentFirstDay - week * 60 * 60 * 1000 * 24
  const dates = []
  for (let i = 0; i < 42; i++) {
    dates.push(new Date(startDay + i * 60 * 60 * 1000 * 24))
  }
  return dates
}

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
