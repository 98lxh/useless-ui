import { FormItemProps } from "../form.types"
import Schema from "async-validator";
import { computed, inject, reactive } from "vue";
import { injectFormKey } from "../context";

const useValidate = (props: FormItemProps, state: any, rule?: any) => {
  return (value: any) => {
    const descriptor = {}
    descriptor[props.prop] = rule
    const validator = new Schema(descriptor)
    let data = {}
    data[props.prop] = value
    validator.validate(data, errors => {
      if (errors) {
        state.error = true
        state.errorMessage = rule.message
      } else {
        state.error = false
        state.errorMessage = ''
      }
    })
  }
}

export const useFormItem = (props: FormItemProps) => {
  const { modal, rules, labelWidth: formLabelWidth } = inject(injectFormKey);
  const state = reactive({
    error: false,
    errorMessage: ''
  })
  const formItemValue = computed(() => modal[props.prop])

  const rule = computed(() => {
    if (props.rule) return props.rule
    return rules[props.prop]
  })

  const labelWidth = computed(() => {
    if (props.labelWidth) return props.labelWidth
    return formLabelWidth
  })

  const validate = useValidate(props, state, rule.value)

  const required = computed(() => {
    return rule.value && rule.value.required
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
