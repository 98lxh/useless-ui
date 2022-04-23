import { defineComponent, PropType, provide, ref } from "vue";
import { injectFormKey } from "./context";
import { FormModal, FieldRule } from "./form.types";

const formProps = {
  modal: {
    type: Object as PropType<FormModal>,
    required: true
  },
  rules: {
    type: Object as PropType<FieldRule>
  },
  labelWidth: {
    type: Number,
  }
}

const Form = defineComponent({
  name: 'UseForm',
  props: formProps,
  setup(props, { slots, expose }) {

    const validateFns = ref<any>([])

    const changeValidateFns = (validateFn: any) => {
      validateFns.value.push(validateFn)
    }

    const validate = (callback: (error: boolean) => void) => {
      const valids = validateFns.value.map(v => v())
      let error = false
      Promise.all(valids).then(result => {
        result.forEach(valid => {
          if (!valid.state) {
            error = true
          }
        })

        callback(error)
      })
    }

    provide(injectFormKey, {
      modal: props.modal,
      rules: props.rules,
      labelWidth: props.labelWidth,
      changeValidateFns
    })

    expose({
      validate
    })

    return () => (<div class='u-form'>
      {slots.default && slots.default()}
    </div>)
  }
})

export default Form
