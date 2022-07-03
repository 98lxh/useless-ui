import { defineComponent, computed } from "vue";
import { useCheckbox } from "./hooks/use-checkbox";

const Checkbox = defineComponent({
  name: 'UseCheckbox',
  props: {
    indeterminate: Boolean,
    disabled: Boolean,
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { slots }) {
    const { isChecked, handleCheck } = useCheckbox(props)

    const classes = computed(() => ({
      'u-checkbox__input': true,
      'is-checked': isChecked.value,
      'is-indeterminate': props.indeterminate && !isChecked.value,
    }))

    const checkboxIcon = computed(() => {
      const { indeterminate } = props;
      return (
        <i
          v-show={isChecked.value || indeterminate}
          class={isChecked.value ? 'u-icon-success' : 'u-icon-jianhao'}
        />
      )
    })

    return () => (
      <div
        class={['u-checkbox', props.disabled && 'is-disabled']}
      >
        <span class={classes.value} onClick={handleCheck} >
          {checkboxIcon.value}
        </span>
        <span
          class="u-checkbox__label"
        >
          {slots.default?.() || props.label}
        </span>
      </div>
    )
  }
})

export default Checkbox
