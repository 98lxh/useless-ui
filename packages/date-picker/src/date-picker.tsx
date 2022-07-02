import { defineComponent, provide, ref, PropType, Teleport, Transition, watch, Component } from "vue"
import { injectDatePicker } from "./context"
import { DatePickerType, InputProps } from "./date-picker.types"
import { useDatePicker } from "./hooks/use-date-picker"
import { useClickOutSide } from "./hooks/use-click-outside"
import { createPositionTarget } from "./utils/create-position-target"
import DayPicker from "./pickers/day-picker"
import YearPicker from "./pickers/year-pickers"
import MonthPicker from './pickers/month-picker'
import RangerPicker from "./pickers/range-picker"
import Input from "@useless-ui/input"
import Icon from "@useless-ui/icon"

const datePickerProps = {
  type: {
    type: String as PropType<DatePickerType>,
    default: "date"
  },
  placeholder: {
    type: [
      String,
      Array,
    ],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: [
      Date,
      Array,
      String
    ],
  },
  error: {
    type: [
      Boolean,
      Object
    ]
  }
}

const Datepicker = defineComponent({
  name: "UseDatePicker",
  props: datePickerProps,
  components: {
    Input,
    DayPicker,
    MonthPicker,
    YearPicker,
    RangerPicker
  },
  emits: ['update:value', 'blur'],
  setup(props, { emit }) {
    const { currentDate, currentType, formatDate } = useDatePicker(props)
    const visible = ref(false)
    const datePickerRef = ref<Element>()
    const positonTarget = createPositionTarget()

    function getPickerPosition (){
      const pickerRect = datePickerRef.value.getBoundingClientRect()
      const pickerTop = pickerRect.top + pickerRect.height + document.documentElement.scrollTop + 5
      const pickerLeft = pickerRect.left + document.documentElement.scrollLeft

      return ({
        top: pickerTop + 'px',
        left: pickerLeft + 'px'
      })
    }

    const openDatePickerPanel = () => {
      visible.value = true
    }

    function closeDatePickerPanel() {
      visible.value = false
    }

    function changeCurrentDate (date: Date) {
      currentDate.value = date
    }

    function changePickerType (type: DatePickerType) {
      currentType.value = type
    }

    function renderPicker () {
      let Picker

      switch (currentType.value) {
        case 'date':
          Picker = DayPicker
          break
        case 'year':
          Picker = YearPicker
          break
        case 'month':
          Picker = MonthPicker
          break
        default:
          Picker = RangerPicker
          break
      }

      return (
        <div class="u-picker-wrapper" style={getPickerPosition()}>
          <Picker />
        </div>
      )
    }

    function rangePickerInput (inputProps: InputProps<'range'>)  {
      const hasDeaultValue = props.value
      return (
        <div class="range-input__wrapper" >
          <Input
            {...inputProps}
            value={hasDeaultValue ? inputProps.value[0] : ''}
            placeholder={inputProps?.placeholder[0] || ''}
          />
          <span>-</span>
          <Input
            {...inputProps}
            value={hasDeaultValue ? inputProps.value[1] : ''}
            placeholder={inputProps?.placeholder[1] || ''}
          />
          <Icon name="calendar" />
        </div>
      )
    }

    function pickerInput(inputProps: InputProps) {
      const hasDeaultValue = props.value
      return (
        <Input
          {...inputProps}
          value={hasDeaultValue ? inputProps.value : ''}
          placeholder={inputProps.placeholder}
          v-slots={{
            suffix: () => (<Icon name="calendar" />)
          }}
        />
      )
    }

    function renderInput() {
      const inputProps = {
        disabled: props.disabled,
        onFocus: openDatePickerPanel,
        error: props.error,
        value: formatDate.value,
        placeholder: props.placeholder
      }

      return (
        (Array.isArray(formatDate.value) || Array.isArray(props.placeholder))
          ? rangePickerInput(inputProps as InputProps<'range'>)
          : pickerInput(inputProps as InputProps)
      )
    }

    useClickOutSide(datePickerRef, closeDatePickerPanel)

    watch(visible, () => {
      if (!visible.value) emit('blur')
    })

    provide(injectDatePicker, {
      currentDate,
      changeCurrentDate,
      panelVisible: visible,
      closeDatePickerPanel,
      openDatePickerPanel,
      changePickerType,
      originType: props.type,
    })

    return () => (
      <div
        class="u-date-picker"
        ref={datePickerRef}
      >
        {renderInput()}
        <Teleport to={positonTarget}>
          <Transition name="zoom-fade-panel">
            {visible.value && renderPicker()}
          </Transition>
        </Teleport>
      </div>
    )
  }
})

export default Datepicker
