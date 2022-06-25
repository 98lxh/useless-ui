import { defineComponent, PropType, Transition, onUnmounted } from 'vue';
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
    let timer: NodeJS.Timeout | null = null;
    const { state, validate, labelWidth, required, rule } = useFormItem(props)

    const renderContent = () => {
      const VNodes = slots.default && slots.default()
      useBindBlur(VNodes, state, () => {
        rule.value && validate()
      })
      return VNodes
    }

    const renderErrorMessage = ():JSX.Element => {
      return (
        <div
          class="u-form-item--error"
        >
          <Transition name="zoom-fade-error">
            {state.error && <p>{state.errorMessage}</p>}
          </Transition>
        </div>
      )
    }

    const renderLabel= ():JSX.Element  => {
      return (
        <label
          class="u-form-item__label"
          style={{ width: labelWidth.value + 'px' }}
        >
          {required.value && <span>*</span>}
          {props.label}
        </label>
      )
    }


    onUnmounted(() => {
      if (timer) window.clearTimeout(timer)
    })

    return () => {
      return <div class='u-form-item'>
        {renderLabel()}
        <div class="u-form-item__content">
          {renderContent()}
          {renderErrorMessage()}
        </div>
      </div>
    }
  }
})

export default FormItem
