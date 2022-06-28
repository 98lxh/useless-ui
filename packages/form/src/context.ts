import { FieldRule, FormModal } from './form.types';

import type { InjectionKey } from 'vue'

interface FormProvide {
  model: FormModal,
  rules?: FieldRule,
  labelWidth?: number,
  changeValidateFns: (vFn: Function) => void
}

export const injectFormKey: InjectionKey<FormProvide> = Symbol();
