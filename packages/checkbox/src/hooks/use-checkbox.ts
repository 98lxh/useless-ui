import { ICheckboxGroupProvide } from '../checkbox.types';

import { computed, getCurrentInstance, inject, Ref, unref } from "vue";
import { ICheckboxProps } from "../checkbox.types";


const useCheckboxGroup = () => {
  const checkboxGroup = inject<ICheckboxGroupProvide>('UCheckboxGroup', {});
  const isGroup = checkboxGroup.name === 'u-checkbox-group';

  return {
    isGroup,
    checkboxGroup
  }
}

export const useModel = <T>(props: any): Ref<T> => {
  const emit = getCurrentInstance().emit
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const store = computed(() => checkboxGroup ? checkboxGroup.modelValue.value : props.modelValue)
  return computed({
    get() {
      return isGroup ? store.value : props.modelValue
    },
    set(newValue: T) {
      emit(`update:modelValue`, newValue)
    }
  })
}

const useCheckboxStatus = (props: ICheckboxProps, model: Ref<boolean>) => {
  const isChecked = computed(() => {
    const value = model.value
    if (Array.isArray(value)) {
      return value.includes(props.label)
    } else {
      return value
    }
  })

  return isChecked
}

const useEvent = (props: ICheckboxProps, model: Ref<boolean>) => {
  if (props.disabled) return
  const emit = getCurrentInstance().emit;
  const { checkboxGroup } = useCheckboxGroup()
  const value = model.value
  const handleCheck = () => {
    if (Array.isArray(value)) {
      //触发组的更新
      const groupValue = unref(checkboxGroup.modelValue)
      const index = groupValue.findIndex(m => m === props.label)
      if (index < 0) {
        groupValue.push(props.label)
      } else {
        groupValue.splice(index, 1)
      }
      checkboxGroup.changeEvent(groupValue)
    } else {
      model.value = !model.value
      emit('update:modelValue', !model.value)
      emit('change', !model.value)
    }
  }

  return handleCheck
}

export const useCheckbox = (props: ICheckboxProps) => {
  const model = useModel<boolean>(props)
  const isChecked = useCheckboxStatus(props, model)
  const handleCheck = useEvent(props, model)


  return {
    isChecked,
    handleCheck
  }
}
