import { computed } from "@vue/reactivity";
import { Ref, ref } from "vue";
import { buildYears, getYearMonthDay } from "../utils/formatDate";

const getStartYear = (year: number) => Math.floor(year / 10) * 10 - 1

export const useYearPicker = (currentDate: Ref<Date>) => {
  const { year } = getYearMonthDay(currentDate.value)
  const startYear = ref(getStartYear(year))
  const visibleYears = computed(() => buildYears(startYear.value))

  return {
    visibleYears,
    startYear
  }
}
