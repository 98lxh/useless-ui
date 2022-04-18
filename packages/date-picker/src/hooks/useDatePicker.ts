import { DatePickerValueType } from './../date-picker.types';
import { getDate } from './../utils/formatDate';
import { computed, getCurrentInstance, Ref, ref, watch } from "vue";
import { DatePickerType } from "../date-picker.types";
import { getYearMonthDay } from "../utils/formatDate";

const genFormatDate = (currentDate: Ref<any>, type: DatePickerType) => {
  const { year, month, day } = getYearMonthDay(
    Array.isArray(currentDate.value) ? currentDate.value[0] : currentDate.value
  )
  let date: any
  switch (type) {
    case 'date':
      date = `${year}-${month + 1}-${day}`
      break;
    case 'month':
      date = `${year}-${month + 1}-1`
      break;
    case 'year':
      date = `${year}-1-1`
      break;
    case 'range':
      const startDate = `${year}-${month + 1}-${day}`
      const { year: eY, month: eM, day: eD } = getYearMonthDay(currentDate.value[1])
      date = [startDate, `${eY}-${eM + 2}-${eD}`]
      break
  }
  return date
}


const useWatchCurrentDate = (currentDate: Ref<any>, type: DatePickerType) => {
  const emit = getCurrentInstance().emit;
  watch(currentDate, (newV) => {
    emit('update:value', genFormatDate(currentDate, type))
  }, {
    deep: true
  })
}

const genCurrentDate = (value: DatePickerValueType, type: DatePickerType) => {
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


export const useDatePicker = (props: any) => {
  const { value, type } = props;
  const currentDate = ref(genCurrentDate(value, type))
  const currentType = ref(type)

  const formatDate = computed(() => genFormatDate(currentDate, type))

  useWatchCurrentDate(currentDate, type)

  return {
    currentDate,
    formatDate,
    currentType
  }
}
