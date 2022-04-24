import { FieldRule, FormLayoutType, FormModal } from './form.types';

import type { InjectionKey } from 'vue'

interface FormProvide {
  model:FormModal,
  rules?:FieldRule,
  labelWidth?:number,
  changeValidateFns:(vFn:any)=>void
}

export const injectFormKey: InjectionKey<FormProvide> = Symbol();
