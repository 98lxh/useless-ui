import { computed, Ref, ref } from "vue"
import { buildMonth, getYearMonthDay } from "../utils/formatDate"

export const useMonthPicker = (currentDate: Ref<Date>) => {
  const { year } = getYearMonthDay(currentDate.value)
  const currentYear = ref(year)
  const visibleMonth = computed(() => buildMonth())

  return {
    currentYear,
    visibleMonth
  }
}
