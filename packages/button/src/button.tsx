
import { computed } from "@vue/reactivity";
import { defineComponent, PropType } from "vue";

type IButtonType = 'primary' | 'warning' | 'danger' | 'success' | 'info'
type IButtonSize = 'small' | 'default' | 'large'
const Button = defineComponent({
  name: 'UButton',
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default: 'primary',
      vaildator: (val: string) => {
        return ['primary', 'warning', 'danger', 'default', 'success'].includes(val)
      }
    },
    size: {
      type: String as PropType<IButtonSize>,
      default: 'default'
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    circle: {
      type: Boolean
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const classes = computed(() => {
      const { type, size, disabled, loading, circle } = props;
      return {
        'u-button': true,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-circle': circle,
        [`u-button--${type}`]: type,
        [`u-button--${size}`]: size,
      }
    })

    const handleClick = (e) => {
      if (!props.disabled && props.loading) return
      emit('click', e)
    }

    return () => (<button class={classes.value} onClick={handleClick}>
      {props.loading ? <i class={`u-icon-loading`} /> : ''}
      {props.icon && !props.loading ? <i class={`u-icon-${props.icon}`} /> : ''}
      {slots.default ? <span>{slots.default()}</span> : ''}
    </button>)
  }
})

export default Button
