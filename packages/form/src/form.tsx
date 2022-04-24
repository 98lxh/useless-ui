import { computed, defineComponent, PropType, provide, ref } from "vue";
import { injectFormKey } from "./context";
import { FormModal, FieldRule, FormLayoutType } from "./form.types";

const formProps = {
  model: {
    type: Object as PropType<FormModal>,
    required: true
  },
  rules: {
    type: Object as PropType<FieldRule>
  },
  labelWidth: {
    type: Number,
  },
  layout:{
    type:String as PropType<FormLayoutType>,
    default:'horizontal'
  }
}

const Form = defineComponent({
  name: 'UseForm',
  props: formProps,
  setup(props, { slots, expose }) {

    const validateFns = ref<any>([])

    const classes = computed(()=>({
      'u-form':true,
      [`is-${props.layout}`]:props.layout
    }))

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
      model: props.model,
      rules: props.rules,
      labelWidth: props.labelWidth,
      changeValidateFns
    })

    expose({
      validate
    })

    return () => (<div class={classes.value}>
      {slots.default && slots.default()}
    </div>)
  }
})

export default Form
