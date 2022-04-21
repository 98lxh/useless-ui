export type SelectOption = {
  label:string,
  value:string,
  disabled?:boolean
}
export interface SelectProps {
  options:SelectOption[]
}
