import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useCheckbox } from "./hooks/useCheckedbox";

const Checkbox = defineComponent({
  name: 'UCheckbox',
  props: {
    indeterminate: Boolean,
    disabled: Boolean,
    label: [String, Number, Boolean],
    value: [String, Number, Boolean],
  },
  emit: ['update:value', 'change'],
  setup(props, { slots }) {
    const { isChecked, handleCheck } = useCheckbox(props)

    const classes = computed(() => ({
      'u-checkbox__input': true,
      'is-checked': isChecked.value,
      'is-indeterminate': props.indeterminate && !isChecked.value
    }))

    const checkboxIcon = computed(() => {
      const { indeterminate } = props;
      if (!isChecked.value && !indeterminate) return ''
      return <i class={isChecked.value ? 'u-icon-success' : 'u-icon-jianhao'} />
    })

    return () => (
      <div class="u-checkbox">
        <span class={classes.value} onClick={handleCheck}>
          {checkboxIcon.value}
        </span>
        <span class="u-checkbox__label">
          {slots.default?.()}
        </span>
      </div>
    )
  }
})

export default Checkbox