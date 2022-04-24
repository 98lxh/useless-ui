
import { Rule } from "async-validator"

export type FormModal = any
export type FormLayoutType = 'horizontal' | 'vertical' | 'inline'

export type FieldRule = {
  [PropName:string] : Rule
}

export interface FormProps {
  model:FormModal,
  rules?:FieldRule,
  layout?:FormLayoutType
}

export interface FormItemProps {
  label:string,
  prop:string,
  rule:Rule,
  labelWidth:number
}
