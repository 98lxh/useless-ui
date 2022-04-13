import { getYearMonthDay, getDate, buildDays } from './../utils/formatDate';
import { PickerPanelProps } from './../date-picker.types';
import { computed } from "vue"

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

export const usePickerPanel = (props: PickerPanelProps) => {
  const { value } = props
  const visibleDays = computed(() => getVisibleDays(value))
  const days = computed(() => buildDays())

  return {
    visibleDays,
    days
  }
}
