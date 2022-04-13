import { computed, defineComponent, ref, Transition } from "vue"
import { useClickOutSide } from "./hooks/useClickOutside"
import { getYearMonthDay } from "./utils/formatDate"
import Input from "./../../input"
import Icon from "./../../icon"
import PickerPanel from "./picker-panel"

const datePickerProps = {
  value: {
    type: Date,
    default: () => new Date()
  }
}

const Datepicker = defineComponent({
  name: "UseDatePicker",
  props: datePickerProps,
  components: {
    Input
  },
  setup(props) {

    const formatDate = computed(() => {
      const { year, month, day } = getYearMonthDay(props.value)

      return `${year}-${month + 1}-${day}`
    })

    const visible = ref(false)
    const datePickerRef = ref<Element>()
    const handleFocus = () => {
      visible.value = true
    }

    const closeDatePickerPanel = () => {
      visible.value = false
    }

    useClickOutSide(datePickerRef, closeDatePickerPanel)

    return () => (
      <div class="u-date-picker" ref={datePickerRef}>
        <Input value={formatDate.value as any} onFocus={handleFocus} />
        <PickerPanel visible={visible.value} value={props.value} />
      </div>
    )
  }
})

export default Datepicker
