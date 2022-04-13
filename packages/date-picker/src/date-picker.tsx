import { computed, defineComponent, ref } from "vue"
import Input from "./../../input"
import { useClickOutSide } from "./hooks/useClickOutside"
import { getYearMonthDay } from "./utils/formatDate"

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

      return `${year}-${month}-${day}`
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
      <div class="u-date-picker">
        <Input value={formatDate.value as any} onFocus={handleFocus} />
        <div class="u-date-picker__panel" v-show={visible.value} ref={datePickerRef}>
          content
        </div>
      </div>
    )
  }
})

export default Datepicker
