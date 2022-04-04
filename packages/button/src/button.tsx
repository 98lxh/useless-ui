
import { computed } from "@vue/reactivity";
import { defineComponent, PropType } from "vue";

type IButtonType = 'primary' | 'warning' | 'danger' | 'default' | 'success'
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
    round: {
      type: Boolean
    }
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      const { type, icon, disabled, loading, round } = props;
      return {
        'u-button': true,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': round,
        [`u-button--${type}`]: type,
      }
    })



    return () => (<button class={classes.value}>{slots.default && slots.default()}</button>)
  }
})

export default Button
