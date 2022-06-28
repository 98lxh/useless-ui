import { computed, inject, onUnmounted, reactive } from "vue";
import { FormItemProps } from "../form.types"
import { injectFormKey } from "../context";
import Schema from "async-validator";

function useValidate(props: FormItemProps, state: any, rule: any, model: any) {
  return () => {
    return new Promise((resolve) => {
      const descriptor = {}
      descriptor[props.prop] = rule
      const validator = new Schema(descriptor)
      let data = {}
      data[props.prop] = model[props.prop]
      validator.validate({ [props.prop]: model[props.prop] }, errors => {
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

export function useFormItem(props: FormItemProps) {
  const { model, rules, labelWidth: formLabelWidth, changeValidateFns } = inject(injectFormKey);

  const state = reactive({
    error: false,
    errorMessage: ''
  })

  const rule = computed(() => {
    if (props.rule) return props.rule
    return rules && rules[props.prop] || {}
  })

  const validate = useValidate(props, state, rule.value, model)

  if (props.prop) changeValidateFns(validate)


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
    model,
    state,
    validate,
    labelWidth,
    required,
    rule,
  }
}
