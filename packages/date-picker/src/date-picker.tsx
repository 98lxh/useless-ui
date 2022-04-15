import { defineComponent, provide, ref, PropType } from "vue"
import { injectDatePicker } from "./context"
import { DatePickerType, DatePickerValueType, DatePickerRenageValue } from "./date-picker.types"
import { useDatePicker } from "./hooks/useDatePicker"
import { useClickOutSide } from "./hooks/useClickOutside"
import DayPicker from "./pickers/day-picker"
import YearPicker from "./pickers/year-pickers"
import MonthPicker from './pickers/month-picker'
import RangerPicker from "./pickers/range-picker"
import Input from "./../../input"
import Icon from "./../../icon"


const datePickerProps = {
  type: {
    type: String as PropType<DatePickerType>,
    default: "day"
  },
  placeholder: {
    type: [
      String,
      Array
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
    Input
  },
  emits: ['update:value'],
  setup(props) {
    const { currentDate, currentType, formatDate } = useDatePicker(props)

    const visible = ref(false)
    const datePickerRef = ref<Element>()
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
      switch (currentType.value) {
        case 'date':
          return <DayPicker />
        case 'year':
          return <YearPicker />
        case 'month':
          return <MonthPicker />
        default:
          return <RangerPicker />
      }
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
            placeholder={props.placeholder[0] as any}
            {...inputProps} />
          <span>-</span>
          <Input
            value={valueLen === 0 ? '' : formatDate.value[1]}
            placeholder={props.placeholder[1] as any}
            {...inputProps} />
          <Icon name="calendar" />
        </div>
      } else {
        return <Input
          value={props.value && formatDate.value as any}
          placeholder={props.placeholder as any}
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
      originType: props.type
    })

    return () => (
      <div class="u-date-picker" ref={datePickerRef}>
        {renderInput()}
        {renderPicker()}
      </div>
    )
  }
})

export default Datepicker
