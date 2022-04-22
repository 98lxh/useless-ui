import { defineComponent, inject, computed } from 'vue'
import { useYearPicker } from '../hooks/use-year-picker'
import PickerPanel from '../picker-panel'
import { injectDatePicker } from './../context'
import Icon from "./../../../icon"
import { getDate, getYearMonthDay } from '../utils/date-helper'

const YearPicker = defineComponent({
  name: 'UseYearPicker',
  setup() {
    const { currentDate, changeCurrentDate, changePickerType, closeDatePickerPanel, originType } = inject(injectDatePicker)!
    const { visibleYears, startYear, getStartYear } = useYearPicker(currentDate as any)

    const isSelectYear = (year: number) => {
      const { year: y } = getYearMonthDay(currentDate.value as Date)
      return y === year
    }

    const isCurrentYear = (year: number) => {
      const { year: y } = getYearMonthDay(new Date())
      return y === year
    }

    const isNotCurrentYear = (year: number) => {
      return year === visibleYears.value[0][0] || year === visibleYears.value[3][2]
    }

    const changeVisibleYears = (mode: 'prev' | 'next') => {
      const incrementNum = mode === 'prev' ? -10 : 10
      startYear.value += incrementNum
    }

    const prevYear = changeVisibleYears.bind(null, 'prev')
    const nextYear = changeVisibleYears.bind(null, 'next')

    const chooseYear = (year: number, isNotCurrentYear = false) => {
      const { month, day } = getYearMonthDay(currentDate.value as Date)
      changeCurrentDate(getDate(year, month, day))
      if (originType === 'date') {
        changePickerType('date')
      } else {
        closeDatePickerPanel()
        if (isNotCurrentYear) startYear.value = getStartYear(year)
      }
    }

    const renderNav = () => {
      return <>
        <Icon name="arrow-double-left" onClick={prevYear} />
        <span>{startYear.value + 1}</span>
        <span>-</span>
        <span>{startYear.value + 11}</span>
        <Icon name="arrow-double-right" onClick={nextYear} />
      </>
    }

    const renderContent = () => {
      return <>
        {
          visibleYears.value.map((row) => (
            <div class="year">
              {
                row.map((year) => {
                  const notCurrentYear = isNotCurrentYear(year)
                  const classes = computed(() => ({
                    'year-cell': true,
                    'is-select-year': isSelectYear(year),
                    'is-current-year': isCurrentYear(year),
                    'not-current-year': notCurrentYear
                  }))
                  return <span
                    class={classes.value}
                    onClick={() => chooseYear(year, notCurrentYear)}
                  >
                    {year}
                  </span>
                })
              }
            </div>
          ))
        }
      </>
    }

    return () => (
      <PickerPanel v-slots={{
        nav: () => renderNav(),
        content: () => renderContent(),
      }} />
    )
  }
})

export default YearPicker
