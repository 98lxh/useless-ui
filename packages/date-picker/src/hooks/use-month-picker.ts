import { computed, Ref, ref } from "vue"
import { buildMonth, getYearMonthDay } from "../utils/date-helper"

export function useMonthPicker(currentDate: Ref<any>) {
  const { year } = getYearMonthDay(currentDate.value)
  const currentYear = ref(year)
  const visibleMonth = computed(() => buildMonth())

  return {
    currentYear,
    visibleMonth
  }
}
