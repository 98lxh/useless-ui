import { FieldRule, FormModal } from './form.types';

import type { InjectionKey } from 'vue'

interface FormProvide {
  modal:FormModal,
  rules?:FieldRule,
  labelWidth?:number
}

export const injectFormKey: InjectionKey<FormProvide> = Symbol();
