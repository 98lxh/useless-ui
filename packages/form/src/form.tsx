import { defineComponent, PropType, provide, watch } from "vue";
import { injectFormKey } from "./context";
import { FormModal,FieldRule } from "./form.types";
const formProps = {
  modal:{
    type:Object as PropType<FormModal>,
    required:true
  },
  rules:{
    type:Object as PropType<FieldRule>
  },
  labelWidth:{
    type:Number,
  }
}
const Form = defineComponent({
  name: 'UseForm',
  props: formProps,
   setup(props,{slots}){

    provide(injectFormKey,{
      modal:props.modal,
      rules:props.rules,
      labelWidth:props.labelWidth
    })

    return () => (<div class='u-form'>
      {slots.default && slots.default()}
    </div>)
   }
})

export default Form
