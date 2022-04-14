import { defineComponent, inject, nextTick } from 'vue'
import { useDayPicker } from '../hooks/useDayPicker'
import { getDate, getYearMonthDay } from './../utils/formatDate'
import { injectDatePicker } from './../context'
import Icon from "./../../../icon"
import Button from "./../../../button"
import PickerPanel from '../picker-panel'

const DayPicker = defineComponent({
  name: 'UseDayPicker',
  components: {
    Icon,
    Button,
    PickerPanel
  },
  setup() {
    const { currentDate, changeCurrentDate, closeDatePickerPanel, changePickerType } = inject(injectDatePicker)!
    const { visibleDays, days, weeks, calendar } = useDayPicker(currentDate, changeCurrentDate)

    const isCurrentMonth = (date: Date) => {
      const { year, month } = getYearMonthDay(
        getDate(calendar.value.year, calendar.value.month, calendar.value.day)
      )
      const { year: y, month: m } = getYearMonthDay(date)
      return year === y && month === m
    }

    const isToday = (date: Date) => {
      const { year, month, day } = getYearMonthDay(new Date())
      const { year: y, month: m, day: d } = getYearMonthDay(date)
      return year === y && month === m && day === d
    }

    const isSelect = (date: Date) => {
      const { year, month, day } = getYearMonthDay(currentDate.value)
      const { year: y, month: m, day: d } = getYearMonthDay(date)
      return year === y && month === m && day === d
    }
    const changeCalendar = (type: 'year' | 'month', mode: 'prev' | 'next') => {
      const incrementNum = mode === 'prev' ? -1 : 1
      calendar.value[type] = calendar.value[type] + incrementNum;
      const { year, month, day } = calendar.value
      calendar.value = getYearMonthDay(getDate(year, month, day))
    }
    const prevMonth = changeCalendar.bind(null, 'month', 'prev')
    const nextMonth = changeCalendar.bind(null, 'month', 'next')
    const prevYear = changeCalendar.bind(null, 'year', 'prev')
    const nextYear = changeCalendar.bind(null, 'year', 'next')

    const chooseDate = (date: Date) => {
      calendar.value = getYearMonthDay(date)
      changeCurrentDate(date)
      closeDatePickerPanel()
    }

    const toToday = () => {
      const today = new Date()
      calendar.value = getYearMonthDay(today)
      changeCurrentDate(today)
      closeDatePickerPanel()
    }

    const renderNav = (): JSX.Element => {
      return <>
        <div>
          <Icon name="arrow-double-left" onClick={prevYear} />
          <Icon name="arrow-left" onClick={prevMonth} />
        </div>
        <div>
          <span class="nav-year" onClick={() => {
            changePickerType('year')
          }}>
            {calendar.value.year}
          </span>
          <span>-</span>
          <span class="nav-month" onClick={() => changePickerType('month')}>{calendar.value.month + 1}</span>
        </div>
        <div>
          <Icon name="arrow-right" onClick={nextMonth} />
          <Icon name="arrow-double-right" onClick={nextYear} />
        </div>
      </>
    }

    const renderContent = (): JSX.Element => {
      return <>
        {
          weeks.value.map((week, i) => (
            <span class='cell' key={i}>{week}</span>
          ))
        }
        {days.value.map((col, i) => (
          <div class="days" key={i}>
            {col.map((_, j) => {
              const day = visibleDays.value[(i) * 7 + (j)];
              const classes = {
                'cell': true,
                'day-cell': true,
                'not-current-month': !isCurrentMonth(day),
                'is-today': isToday(day),
                'is-select': isSelect(day),
              }
              return <span
                class={classes} key={(i) * 7 + (j)}
                onClick={() => chooseDate(day)}
              >
                {day.getDate()}
              </span>
            })}
          </div>
        ))}
      </>
    }

    return () => (<PickerPanel v-slots={{
      nav: () => renderNav(),
      content: () => renderContent(),
      footer: () => <Button type="primary" size="small" onClick={toToday}>今天</Button>
    }} />)
  }
})

export default DayPicker
