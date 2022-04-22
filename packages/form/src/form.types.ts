export type FormModal = any
export type FieldRule = {
  required?:boolean,
  message?:string
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
