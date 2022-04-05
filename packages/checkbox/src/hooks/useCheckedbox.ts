
import { computed, getCurrentInstance, Ref } from "vue";
import { ICheckboxProps } from "../checkbox.types";

const useVModel = <T>(props: any, modelName: string): Ref<T> => {
  const emit = getCurrentInstance().emit
  return computed({
    get() {
      return props[modelName]
    },
    set(newValue: T) {
      emit(`update:${modelName}`, newValue)
    }
  })
}

const useCheckboxStatus = (props: ICheckboxProps, model: Ref<boolean>) => {
  const isChecked = computed(() => {
    const value = model.value
    return value
  })

  return isChecked
}

export const useCheckbox = (props: ICheckboxProps) => {
  const model = useVModel<boolean>(props, 'value')
  const isChecked = useCheckboxStatus(props, model)
  const emit = getCurrentInstance().emit


  const handleCheck = () => {
    model.value = !model.value
    emit('change', !model.value)
  }

  return {
    isChecked,
    handleCheck
  }
}
