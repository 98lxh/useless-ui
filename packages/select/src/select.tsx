
import { defineComponent, watch, PropType, ref } from "vue";
import { SelectOption } from "./select.types";
import Popover from "@useless-ui/popover"
import Input from "@useless-ui/input"
import Icon from "@useless-ui/icon"

const SelectProps = {
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => ([])
  },
  placeholder: {
    type: String,
  },
  value: {
    type: String,
    default: ""
  },
  error: {
    type: [
      Boolean,
      Object
    ]
  }
}

const Select = defineComponent({
  name: 'UseSelect',
  props: SelectProps,
  emits: ['update:value', 'blur'],
  setup(props, { emit }) {
    const popoverRef = ref(null)
    const inputRef = ref(null)
    const selectValue = ref<SelectOption>(
      props.options.filter(opt => opt.value === props.value)[0] ||
      { label: '', value: '' }
    )

    function handleFocus () {
      inputRef.value.focus()
    }

    function handleSelect(option: SelectOption){
      if (option.disabled) return
      emit('update:value', option.value)
      selectValue.value = option
      popoverRef.value.close()
      emit('blur')
    }

    function renderOptions():Array<JSX.Element> {
      return (
        props.options.map((option) => {
          const optionClass = {
            'u-select-option': true,
            'is-disabled': option.disabled
          }
          return <div class={optionClass} onClick={() => handleSelect(option)}>
            {option.label}
          </div>
        })
      )
    }

    return () => (
      <div class="u-select">
        <Popover
          ref={popoverRef}
          trigger="click"
          showArrow={false}
          onClose={() => emit('blur')}
          padding="5px 0px"
          placement="bl"
          v-slots={{
            content: () => renderOptions()
          }}>
          <span
            onClick={handleFocus}
          >
            <Input
              value={selectValue.value.label}
              placeholder={props.placeholder}
              ref={inputRef}
              error={props.error}
              v-slots={{
                suffix: () => <Icon name='arrowdown' />
              }}
            />
          </span>
        </Popover>
      </div>
    )
  }
})


export default Select
