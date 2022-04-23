
import { Rule } from "async-validator"

export type FormModal = any

export type FieldRule = {
  [PropName:string] : Rule
}

export interface FormProps {
  model:FormModal,
  rules?:FieldRule
}

export interface FormItemProps {
  label:string,
  prop:string,
  rule:FieldRule,
  labelWidth:number
}
