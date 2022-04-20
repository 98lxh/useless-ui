import { defineComponent, provide, ref, PropType, Teleport, Transition } from "vue"
import { injectDatePicker } from "./context"
import { DatePickerType } from "./date-picker.types"
import { useDatePicker } from "./hooks/use-date-picker"
import { useClickOutSide } from "./hooks/use-click-outside"
import { createPositionTarget } from "./utils/create-position-target"
import DayPicker from "./pickers/day-picker"
import YearPicker from "./pickers/year-pickers"
import MonthPicker from './pickers/month-picker'
import RangerPicker from "./pickers/range-picker"
import Input from "./../../input"
import Icon from "./../../icon"

const datePickerProps = {
  type: {
    type: String as PropType<DatePickerType>,
    default: "date"
  },
  placeholder: {
    type: [
      String,
      Array,
      null
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
  emits: ['update:value'],
  setup(props) {
    const { currentDate, currentType, formatDate } = useDatePicker(props)

    const visible = ref(false)
    const datePickerRef = ref<Element>()
    const positonTarget = createPositionTarget()

    const getPickerPosition = () => {
      const pickerRect = datePickerRef.value.getBoundingClientRect()

      const pickerTop = pickerRect.top + pickerRect.height + document.documentElement.scrollTop + 5
      const pickerLeft = pickerRect.left + document.documentElement.scrollLeft
      return {
        top: pickerTop + 'px',
        left: pickerLeft + 'px'
      }
    }

    const openDatePickerPanel = () => {
      visible.value = true
    }

    const closeDatePickerPanel = () => {
      visible.value = false
    }

    const changeCurrentDate = (date: Date) => {
      currentDate.value = date
    }

    const changePickerType = (type: DatePickerType) => {
      currentType.value = type
    }

    const renderPicker = () => {
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
      return <div class="u-picker-wrapper" style={getPickerPosition()}>
        <Picker />
      </div>
    }

    const renderInput = () => {
      const inputProps = {
        disabled: props.disabled,
        onFocus: openDatePickerPanel,
      }
      if (props.type === 'range') {
        const valueLen = props.value ? (props.value as any).length : 0
        return <div class="range-input__wrapper" onClick={openDatePickerPanel}>
          <Input
            value={valueLen === 0 ? '' : formatDate.value[0]}
            placeholder={props.placeholder[0] as string}
            {...inputProps} />
          <span>-</span>
          <Input
            value={valueLen === 0 ? '' : formatDate.value[1]}
            placeholder={props.placeholder[1] as string}
            {...inputProps} />
          <Icon name="calendar" />
        </div>
      } else {
        return <Input
          value={props.value && formatDate.value as any}
          placeholder={props.placeholder as string}
          v-slots={{
            suffix: () => <Icon name="calendar" />
          }}
          {...inputProps} />
      }
    }

    useClickOutSide(datePickerRef, closeDatePickerPanel)

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
      <div class="u-date-picker" ref={datePickerRef}>
        {renderInput()}
        <Teleport to={positonTarget}>
          <Transition name="zoom-fade-bottom">
            {visible.value && renderPicker()}
          </Transition>
        </Teleport>
      </div>
    )
  }
})

export default Datepicker
