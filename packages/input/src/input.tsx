import { computed, defineComponent, PropType, ref } from "vue"
import { InputValueType, InputType } from "./input.types"
import { useInput } from './hooks/use-input'
import Icon from "@useless-ui/icon"

const inputProps = {
  type: {
    type: String as PropType<InputType>,
    defalt: 'text'
  },
  placeholder: {
    type: String
  },
  value: {
    type: String as PropType<InputValueType>
  },
  disabled: {
    type: Boolean
  },
  error: {
    type: [
      Boolean,
      Object
    ]
  },
  showPassword: {
    type: Boolean
  }
}

const Input = defineComponent({
  name: 'UseInput',
  props: inputProps,
  components: {
    Icon
  },
  emits: ['focus', 'blur', 'input', 'update:value'],
  setup(props, { slots, emit, expose }) {
    const { modelValue, type, handleShowPassword } = useInput(props)
    const inputRef = ref<HTMLInputElement>()
    const classes = computed(() => ({
      'u-input__input': true,
      'is-disabled': props.disabled,
      'is-error':typeof props.error === 'object' ? props.error.error : props.error,
      'is-prefix': slots.prefix,
      'is-suffix': slots.suffix
    }))

    const handleFocus = (event) => {
      emit('focus', event)
    }

    const handleBlur = (event) => {
      emit('blur', event)
    }

    const handleInput = (event) => {
      emit('update:value', event.target.value)
      emit('input', event)
    }

    const focus = () => {
      inputRef.value && inputRef.value.focus()
    }

    const blur = () => {
      inputRef.value && inputRef.value.blur()
    }

    const renderSuffix = () => {
      if (props.type === 'password') {
        return <Icon
          class={props.showPassword && 'is-showpassword'}
          name={type.value === 'password' ? 'eye-close' : 'eye'}
          onClick={handleShowPassword} />
      }
      return slots.suffix && slots.suffix()
    }

    expose({
      focus,
      blur
    })

    return () => (
      <div class={['u-input', props.disabled && 'is-disabled']}>
        <span class="u-input--prefix" v-show={slots.prefix}>
          {slots.prefix && slots.prefix()}
        </span>
        <input
          class={classes.value}
          ref={inputRef}
          placeholder={props.placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          type={type.value}
          value={modelValue.value} />
        <span class="u-input--suffix" v-show={slots.suffix || props.type === 'password'}>
          {renderSuffix()}
        </span>
      </div>
    )
  }
})

export default Input
