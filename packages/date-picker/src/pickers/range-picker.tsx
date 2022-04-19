import { defineComponent, inject, ref, watch } from "vue";
import { injectDatePicker } from "../context";
import DayPicker from "./day-picker";

const RangerPicker = defineComponent({
  name: 'UseRangePicker',
  setup() {
    const cellStart = ref<Date>()
    const isMove = ref(false)
    const cellEnd = ref<Date>()
    const { panelVisible } = inject(injectDatePicker)!
    const onChangeCellStart = (date: Date) => {
      cellStart.value = date
    }

    const onChangeCellEnd = (date: Date) => {
      cellEnd.value = date
    }

    const onChangeIsMove = (moveState: boolean) => {
      isMove.value = moveState
    }

    watch(panelVisible, () => {
      onChangeIsMove(false)
      onChangeCellEnd(null)
      onChangeCellStart(null)
    })

    return () => {
      const dayPickerProps = {
        onChangeCellEnd,
        onChangeIsMove,
        onChangeCellStart,
        cellEnd: cellEnd.value,
        cellStart: cellStart.value,
        isMove: isMove.value
      }

      return (
        <div class="u-date-picker-range">
          <DayPicker {...dayPickerProps} />
          <DayPicker isTarget {...dayPickerProps} />
        </div>
      )
    }
  }
})

export default RangerPicker
