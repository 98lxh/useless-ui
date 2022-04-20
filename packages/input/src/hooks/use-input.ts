import { getCurrentInstance, computed, ref, Ref } from "vue";
import { InputProps, InputType } from "../input.types";

const useModel = (props: InputProps) => {
  const emit = getCurrentInstance().emit
  return computed({
    get() {
      return props.value
    },
    set(newValue) {
      if (props.disabled) return
      emit('update:value', props.type === 'number' ? Number(newValue) : newValue)
    }
  })
}

const useInputPassword = (inputProps: InputProps, type: Ref<InputType>) => {
  const handleShowPassword = () => {
    if (!inputProps.showPassword) return
    const newType = type.value === 'password' ? 'text' : 'password'
    type.value = newType
  }
  return {
    handleShowPassword
  }
}

export const useInput = (inputProps: InputProps) => {
  const type = ref(inputProps.type)
  const modelValue = useModel(inputProps)
  const { handleShowPassword } = useInputPassword(inputProps, type)
  return {
    modelValue,
    handleShowPassword,
    type
  }
}
