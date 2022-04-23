
import { defineComponent, PropType, ref, watch } from "vue";
import Popover from "./../../popover"
import Input from "./../../input"
import Icon from "./../../icon"
import { SelectOption } from "./select.types";

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
  }
}

const Select = defineComponent({
  name: 'UseSelect',
  props: SelectProps,
  emits: ['update:value', 'blur'],
  setup(props, { emit }) {
    const popoverRef = ref()
    const inputRef = ref()

    const selectValue = ref<SelectOption>(
      props.options.filter(opt => opt.value === props.value)[0] ||
      { label: '', value: '' }
    )

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return
      selectValue.value = option
      popoverRef.value.close()
    }

    const renderOptions = () => {
      return props.options.map((option) => {
        const optionClass = {
          'u-select-option': true,
          'is-disabled': option.disabled
        }
        return <div class={optionClass} onClick={() => handleSelect(option)}>
          {option.label}
        </div>
      })
    }

    const handleFocus = () => {
      inputRef.value.focus()
    }

    const handleInputBlur = (e) => {
      emit('blur', e)
    }

    watch(selectValue, (newValue) => {
      emit('update:value', newValue.value)
    })

    return () => (
      <div class="u-select">
        <Popover
          ref={popoverRef}
          trigger="click"
          showArrow={false}
          placement="bl"
          v-slots={{
            content: () => renderOptions()
          }}>
          <span onClick={handleFocus}>
            <Input
              value={selectValue.value.label}
              placeholder={props.placeholder}
              onBlur={handleInputBlur}
              ref={inputRef}
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
