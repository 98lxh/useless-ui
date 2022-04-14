import { defineComponent, inject, computed } from 'vue'
import { useYearPicker } from '../hooks/useYearPicker'
import PickerPanel from '../picker-panel'
import { injectDatePicker } from './../context'
import Icon from "./../../../icon"
import { getDate, getYearMonthDay } from '../utils/formatDate'

const YearPicker = defineComponent({
  name: 'UseYearPicker',
  setup() {
    const { currentDate, changeCurrentDate, changePickerType } = inject(injectDatePicker)!
    const { visibleYears, startYear } = useYearPicker(currentDate)

    const isSelectYear = (year: number) => {
      const { year: y } = getYearMonthDay(currentDate.value)
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

    const chooseYear = (year: number) => {
      const { month, day } = getYearMonthDay(currentDate.value)
      changeCurrentDate(getDate(year, month, day))
      changePickerType('day')
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
          visibleYears.value.map((row, i) => (
            <div class="year">
              {
                row.map((year, i) => {
                  const classes = computed(() => ({
                    'year-cell': true,
                    'is-select-year': isSelectYear(year),
                    'is-current-year': isCurrentYear(year),
                    'not-current-year': isNotCurrentYear(year)
                  }))
                  return <span
                    class={classes.value}
                    onClick={() => chooseYear(year)}
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
