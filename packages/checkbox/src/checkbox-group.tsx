import { defineComponent, provide, computed } from "vue";
const Checkbox = defineComponent({
  name: 'UCheckboxGroup',
  props: {
    modelValue: Array
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(newV) {
        emit('update:modelValue', newV)
      }
    })

    const changeEvent = (value) => {
      emit('change', value)
      emit('update:modelValue', value)
    }

    provide('UCheckboxGroup', {
      modelValue,
      changeEvent,
      name: 'u-checkbox-group'
    })

    return () => (
      <div class="u-checkbox-group">
        {slots?.default()}
      </div>
    )
  }
})

export default Checkbox
