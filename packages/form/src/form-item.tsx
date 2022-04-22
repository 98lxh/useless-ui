import { PropType, Transition } from 'vue';
import { defineComponent } from 'vue';
import { FieldRule } from './form.types';
import { useFormItem } from './hooks/use-form-item';
import { useBindBlur } from './hooks/use-bind-blur';

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
    type: Object as PropType<FieldRule>
  },
  labelWidth: {
    type: Number,
  }
}
const FormItem = defineComponent({
  name: 'UseFormItem',
  props: formItemProps,
  setup(props, { slots }) {

    const { formItemValue, state, validate, labelWidth, required,rule } = useFormItem(props)

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
        rule.value && validate(formItemValue.value)
      })
      return VNodes
    }

    const renderErrorMessage = () => {
      return <div
        class="u-form-item--error"
        style={{ paddingLeft: labelWidth.value + 10 + 'px' }}
      >
        <Transition name="zoom-fade-bottom">
          {state.error && <p>{state.errorMessage}</p>}
        </Transition>
      </div>
    }

    return () => {
      return <div class="u-form-item">
        {renderLabel()}
        {renderContent()}
        {renderErrorMessage()}
      </div>
    }
  }
})

export default FormItem
