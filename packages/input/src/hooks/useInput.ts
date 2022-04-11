
import { computed } from "@vue/reactivity";
import { getCurrentInstance } from "vue";
import { InputProps } from "../input.types";

const useModel = (props: InputProps) => {
  const emit = getCurrentInstance().emit
  return computed({
    get() {
      return props.value
    },
    set(newValue) {
      if (props.disabled) return
      emit('update:value', newValue)
    }
  })
}

export const useInput = (inputProps: InputProps) => {
  const modelValue = useModel(inputProps)

  return {
    modelValue
  }
}
