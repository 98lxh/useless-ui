import { getCurrentInstance, computed, ref, Ref } from "vue";
import { InputProps, InputType } from "../input.types";

const useVModel = (props: InputProps) => {
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

function useInputPassword(inputProps: InputProps, type: Ref<InputType>) {
  function handleShowPassword() {
    if (!inputProps.showPassword) return
    const newType = type.value === 'password' ? 'text' : 'password'
    type.value = newType
  }

  return handleShowPassword
}

export function useInput(inputProps: InputProps) {
  const type = ref(inputProps.type)
  const modelValue = useVModel(inputProps)
  const handleShowPassword = useInputPassword(inputProps, type)

  return {
    modelValue,
    handleShowPassword,
    type
  }
}
