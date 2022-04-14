import { computed, getCurrentInstance, ref } from "vue";
import { DatePickerProps } from "../date-picker.types";
import { getYearMonthDay } from "../utils/formatDate";

const useModel = (props: DatePickerProps) => {
  const emit = getCurrentInstance().emit;
  return computed<Date>({
    get() {
      return props.value
    },
    set(newValue) {
      emit('update:value', newValue)
    }
  })
}

export const useDatePicker = (props: DatePickerProps) => {
  const currentDate = useModel(props)
  const currentType = ref(props.type)
  const formatDate = computed(() => {
    const { year, month, day } = getYearMonthDay(props.value)
    return `${year}-${month + 1}-${day}`
  })
  return {
    currentDate,
    formatDate,
    currentType
  }
}
