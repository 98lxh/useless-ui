import { defineComponent, inject } from 'vue'
import { injectDatePicker } from './../context'
import { useMonthPicker } from '../hooks/useMonthPicker'
import PickerPanel from '../picker-panel'
import Icon from "./../../../icon"
import { getDate, getYearMonthDay } from '../utils/formatDate'



const MonthPicker = defineComponent({
  name: 'UseMonthPicker',
  setup() {
    const { currentDate, changeCurrentDate, changePickerType, originType, closeDatePickerPanel } = inject(injectDatePicker)!
    const { currentYear, visibleMonth } = useMonthPicker(currentDate)

    const changeCurrentYear = (mode: 'prev' | 'next') => {
      const incrementNum = mode === 'prev' ? -1 : 1;
      currentYear.value = currentYear.value + incrementNum;
    }
    const prevYear = changeCurrentYear.bind(null, 'prev')
    const nextYear = changeCurrentYear.bind(null, 'next')

    const isCurrentMonth = (month: number) => {
      const { year: y, month: m } = getYearMonthDay(new Date())
      return currentYear.value === y && month === m
    }
    const isSelectMonth = (month: number) => {
      const { year: y, month: m } = getYearMonthDay(currentDate.value)
      return currentYear.value === y && month === m
    }

    const chooseMonth = (month: number) => {
      const { day } = getYearMonthDay(currentDate.value)
      const date = getDate(currentYear.value, month, day)
      changeCurrentDate(date)
      if (originType === 'date') {
        changePickerType('date')
      } else {
        closeDatePickerPanel()
      }
    }

    const renderNav = () => {
      return <>
        <Icon name="arrow-double-left" onClick={prevYear} />
        <span>{currentYear.value}</span>
        <Icon name="arrow-double-right" onClick={nextYear} />
      </>
    }


    const renderContent = () => {
      return <>
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
    }

    return () => (<PickerPanel
      v-slots={{
        nav: () => renderNav(),
        content: () => renderContent()
      }}
    />)
  }
})

export default MonthPicker
