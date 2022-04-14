import { defineComponent, provide, ref, PropType } from "vue"
import { injectDatePicker } from "./context"
import { DatePickerType } from "./date-picker.types"
import { useDatePicker } from "./hooks/useDatePicker"
import { useClickOutSide } from "./hooks/useClickOutside"
import DayPicker from "./pickers/day-picker"
import YearPicker from "./pickers/year-pickers"
import MonthPicker from './pickers/month-picker'
import Input from "./../../input"
import Icon from "./../../icon"


const datePickerProps = {
  value: {
    type: Date,
    default: () => new Date()
  },
  type: {
    type: String as PropType<DatePickerType>,
    default: "day"
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
        case 'day':
          return <DayPicker />
        case 'year':
          return <YearPicker />
        case 'month':
          return <MonthPicker />
      }
    }

    useClickOutSide(datePickerRef, closeDatePickerPanel)

    provide(injectDatePicker, {
      currentDate,
      changeCurrentDate,
      panelVisible: visible,
      closeDatePickerPanel,
      openDatePickerPanel,
      changePickerType
    })

    return () => (
      <div class="u-date-picker" ref={datePickerRef}>
        <Input value={formatDate.value as any} v-slots={{
          suffix: () => <Icon name="calendar" />
        }} onFocus={openDatePickerPanel} />
        {renderPicker()}
      </div>
    )
  }
})

export default Datepicker
