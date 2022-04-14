import { getYearMonthDay, getDate, buildDays, buildWeeks } from '../utils/formatDate';
import { computed, reactive, ref, Ref } from "vue"

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


export const useDayPicker = (currenDate: Ref<Date>, changeCurrentDate: any) => {
  const days = computed(() => buildDays())
  const weeks = computed(() => buildWeeks())
  const calendar = ref(getYearMonthDay(currenDate.value))

  const visibleDays = computed(() => {
    const { year, month, day } = calendar.value
    return getVisibleDays(getDate(year, month, day))
  })

  return {
    visibleDays,
    days,
    weeks,
    calendar
  }
}
