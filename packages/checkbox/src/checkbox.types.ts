import { Ref } from "vue"

export interface ICheckboxProps {
  indeterminate?: boolean, //是否半选
  disabled?: boolean, //是否禁用
  label?: string | boolean | number,
  modelValue?: string | number | boolean //绑定checkbox
}

export interface ICheckboxGroupProvide {
  modelValue?: Ref,
  changeEvent?: (value: unknown) => void,
  name?: string
}
