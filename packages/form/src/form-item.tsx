import { defineComponent, PropType, Transition,nextTick, onUnmounted } from 'vue';
import { useFormItem } from './hooks/use-form-item';
import { useBindBlur } from './hooks/use-bind-blur';
import { Rule } from 'async-validator';

const formItemProps = {
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  },
  rule: {
    type: Object as PropType<Rule>
  },
  labelWidth: {
    type: Number,
  }
}

const FormItem = defineComponent({
  name: 'UseFormItem',
  props: formItemProps,
  setup(props, { slots }) {
    const { state, validate, labelWidth, required, rule,model } = useFormItem(props)
    let timer:any = 0;

    const renderLabel = () => {
      return (<label
        class="u-form-item__label"
        style={{ width: labelWidth.value + 'px' }}
      >
        {required.value && <span>*</span>}
        {props.label}
      </label>)
    }

    const renderContent = () => {
      const VNodes = slots.default && slots.default()
      useBindBlur(VNodes, state, () => {
        timer = setTimeout(()=>{
          rule.value && validate()
        },200)
      })
      return VNodes
    }

    const renderErrorMessage = () => {
      return <div
        class="u-form-item--error"
      >
        <Transition name="zoom-fade-bottom">
          {state.error && <p>{state.errorMessage}</p>}
        </Transition>
      </div>
    }


    onUnmounted(()=>{
      if(timer){
        window.clearTimeout(timer)
      }
    })

    return () => {
      return <div class='u-form-item'>
        {renderLabel()}
        <div class="u-form-item--content">
          {renderContent()}
          {renderErrorMessage()}
        </div>
      </div>
    }
  }
})

export default FormItem
