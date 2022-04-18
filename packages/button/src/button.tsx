import { defineComponent, PropType, computed } from "vue";
import { IButtonSize, IButtonStatus, IButtonType } from "./button.types";

const Button = defineComponent({
  name: 'UseButton',
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default: 'secondary',
    },
    status: {
      type: String as PropType<IButtonStatus>,
      default: "normal"
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
      const { type, size, disabled, loading, circle, status } = props;
      return {
        'u-button': true,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-circle': circle,
        [`u-button--${type}`]: type,
        [`u-button--${status}`]: status,
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
