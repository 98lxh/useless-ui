import { defineComponent, inject } from 'vue'
import { injectDatePicker } from './../context'
import { useMonthPicker } from '../hooks/use-month-picker'
import PickerPanel from '../picker-panel'
import Icon from "@useless-ui/icon"
import { getDate, getYearMonthDay } from '../utils/date-helper'



const MonthPicker = defineComponent({
  name: 'UseMonthPicker',
  setup() {
    const { currentDate, changeCurrentDate, changePickerType, originType, closeDatePickerPanel } = inject(injectDatePicker)!
    const { currentYear, visibleMonth } = useMonthPicker(currentDate)

    function changeCurrentYear(mode: 'prev' | 'next') {
      const incrementNum = mode === 'prev' ? -1 : 1;
      currentYear.value = currentYear.value + incrementNum;
    }

    const prevYear = changeCurrentYear.bind(null, 'prev')
    const nextYear = changeCurrentYear.bind(null, 'next')

    function isCurrentMonth(month: number) {
      const { year: y, month: m } = getYearMonthDay(new Date())
      return currentYear.value === y && month === m
    }
    function isSelectMonth(month: number) {
      const { year: y, month: m } = getYearMonthDay(currentDate.value as Date)
      return currentYear.value === y && month === m
    }

    function chooseMonth(month: number) {
      const { day } = getYearMonthDay(currentDate.value as Date)
      const date = getDate(currentYear.value, month, day)
      changeCurrentDate(date)
      if (originType === 'date') {
        changePickerType('date')
      } else {
        closeDatePickerPanel()
      }
    }

    function renderNav() {
      return (
        <>
          <Icon name="arrow-double-left" onClick={prevYear} />
          <span>{currentYear.value}</span>
          <Icon name="arrow-double-right" onClick={nextYear} />
        </>
      )
    }


    function renderContent() {
      return (
        <>
          {
            visibleMonth.value.map((row, i) => (
              <div class="month">
                {
                  row.map((m, j) => {
                    const month = i * 3 + j
                    const classes = {
                      'month-cell': true,
                      'is-current-month': isCurrentMonth(month),
                      'is-select-month': isSelectMonth(month)
                    }
                    return <span class={classes} onClick={() => chooseMonth(month)}>{m}</span>
                  })
                }
              </div>
            ))
          }
        </>
      )
    }

    return () => (
      <PickerPanel
        v-slots={{
          nav: () => renderNav(),
          content: () => renderContent()
        }}
      />
    )
  }
})

export default MonthPicker
