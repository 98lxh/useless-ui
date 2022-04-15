import { computed, Ref, ref } from "vue"
import { DatePickerValueType } from "../date-picker.types"
import { buildMonth, getYearMonthDay } from "../utils/formatDate"

export const useMonthPicker = (currentDate: Ref<any>) => {
  const { year } = getYearMonthDay(currentDate.value)
  const currentYear = ref(year)
  const visibleMonth = computed(() => buildMonth())

  return {
    currentYear,
    visibleMonth
  }
}
