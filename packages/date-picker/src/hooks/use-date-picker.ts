import { computed, getCurrentInstance, Ref, ref, watch } from "vue";
import { DatePickerValueType } from '../date-picker.types';
import { DatePickerType } from "../date-picker.types";
import { getYearMonthDay, getDate, genFormatDate } from "../utils/date-helper";

function useWatchCurrentDate(currentDate: Ref<DatePickerValueType>, type: DatePickerType) {
  const emit = getCurrentInstance().emit;
  watch(currentDate, () => {
    emit('update:value', genFormatDate(currentDate, type))
  }, {
    deep: true
  })
}

function buildCurrentDate(value: DatePickerValueType, type: DatePickerType) {
  let currentDate: DatePickerValueType
  if (type === 'range') {
    const valueIsArray = Array.isArray(value)
    if (valueIsArray && value.length > 0) {
      const { year: sY, month: sM, day: sD } = getYearMonthDay(value[0])
      currentDate = value.length === 1 ? [value[0], getDate(sY, sM, sD)] : value
    } else {
      const startDate = new Date()
      const { year: sY, month: sM, day: sD } = getYearMonthDay(startDate)
      currentDate = [startDate, getDate(sY, sM, sD)]
    }
  } else {
    currentDate = value || new Date()
  }
  return currentDate
}


export function useDatePicker(props: any) {
  const { value, type } = props;
  const currentDate = ref(buildCurrentDate(value, type))
  const currentType = ref(type)

  const formatDate = computed(() => genFormatDate(currentDate, type))

  useWatchCurrentDate(currentDate, type)

  return {
    currentDate,
    formatDate,
    currentType
  }
}
