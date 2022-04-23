import { computed, inject, reactive } from "vue";
import Schema from "async-validator";
import { FormItemProps } from "../form.types"
import { injectFormKey } from "../context";

const useValidate = (props: FormItemProps, state: any, rule: any, modal: any) => {
  return () => {
    return new Promise((resolve) => {
      const descriptor = {}
      descriptor[props.prop] = rule
      const validator = new Schema(descriptor)
      let data = {}
      data[props.prop] = modal[props.prop]
      validator.validate({ [props.prop]: modal[props.prop] }, errors => {
        if (errors) {
          state.error = true
          state.errorMessage = errors[0].message
          resolve({ state: false, errors })
        } else {
          state.error = false
          state.errorMessage = ''
          resolve({ state: true })
        }
      })
    })
  }
}

export const useFormItem = (props: FormItemProps) => {
  const { modal, rules, labelWidth: formLabelWidth, changeValidateFns } = inject(injectFormKey);

  const state = reactive({
    error: false,
    errorMessage: ''
  })

  const rule = computed(() => {
    if (props.rule) return props.rule
    return rules && rules[props.prop] || {}
  })

  const validate = useValidate(props, state, rule.value, modal)

  if (props.prop) changeValidateFns(validate)

  const formItemValue = computed(() => modal[props.prop])


  const labelWidth = computed(() => {
    if (props.labelWidth) return props.labelWidth
    return formLabelWidth
  })


  const required = computed(() => {
    if (!Array.isArray(rule.value)) {
      return rule.value.required
    }

    for (let i in rule.value) {
      if (rule.value[i].required) return rule.value[i].required
    }
  })

  return {
    modal,
    state,
    formItemValue,
    validate,
    labelWidth,
    required,
    rule
  }
}
