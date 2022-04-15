import { defineComponent, inject, ref, computed } from 'vue'
import { useDayPicker } from '../hooks/useDayPicker'
import { getDate, getYearMonthDay } from './../utils/formatDate'
import { injectDatePicker } from './../context'
import Icon from "./../../../icon"
import Button from "./../../../button"
import PickerPanel from '../picker-panel'


const dayPickerProps = {
  isTarget: {
    type: Boolean
  },
  cellStart: {
    type: Date
  },
  isMove: {
    type: Boolean
  },
  cellEnd: {
    type: Date
  }
}

const DayPicker = defineComponent({
  name: 'UseDayPicker',
  props: dayPickerProps,
  components: {
    Icon,
    Button,
    PickerPanel
  },
  emits: ['changeIsMove', 'changeCellStart', 'changeCellEnd'],
  setup(props, { emit }) {
    const { currentDate, changeCurrentDate, closeDatePickerPanel, changePickerType, originType } = inject(injectDatePicker)!
    const { visibleDays, days, weeks, calendar, getCurrentDate } = useDayPicker(currentDate, props.isTarget, originType)
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
      const { year, month, day } = getYearMonthDay(getCurrentDate(currentDate, props.isTarget, originType))
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
      if (originType !== 'range') {
        changeCurrentDate(date)
        closeDatePickerPanel()
      } else {
        if (!props.cellStart) {
          emit('changeCellStart', date)
          emit('changeIsMove', true)
        }

        if (props.cellEnd && props.cellStart) {
          if (props.isMove) {
            const rangeDates = [
              new Date(props.cellStart).valueOf(),
              new Date(props.cellEnd).valueOf()
            ]
            rangeDates.sort((s, e) => s - e)
            changeCurrentDate(rangeDates.map(d => new Date(d)) as any)
            return emit('changeIsMove', false)
          }
          emit('changeCellStart', date)
          emit('changeCellEnd', null)
          emit('changeIsMove', true)
        }
      }
    }

    const isCellStart = (date: Date) => {
      if (!props.cellStart) return false
      const { year, month, day } = getYearMonthDay(date)
      const { year: y, month: m, day: d } = getYearMonthDay(props.cellStart)
      return year === y && month === m && day === d
    }

    const isCellMove = (date: Date) => {
      if (props.cellEnd && props.cellStart) {
        if (
          date > props.cellStart && date < props.cellEnd ||
          date > props.cellEnd && date < props.cellStart
        ) {
          return true
        }
        return false
      }
    }

    const isCellEnd = (date: Date) => {
      if (!props.cellEnd) return false
      const { year, month, day } = getYearMonthDay(date)
      const { year: y, month: m, day: d } = getYearMonthDay(props.cellEnd)
      return year === y && month === m && day === d
    }

    const handleMousemove = (date: Date) => {
      if (!props.isMove) return
      if (props.cellStart) emit('changeCellEnd', date)
    }

    const toToday = () => {
      const today = new Date()
      calendar.value = getYearMonthDay(today)
      changeCurrentDate(today)
      closeDatePickerPanel()
    }

    const handleConfirmRangeValue = () => {
      closeDatePickerPanel()
    }

    const renderArrowLeft = () => {
      if (originType !== 'range' || !props.isTarget) {
        return <div>
          <Icon name="arrow-double-left" onClick={prevYear} />
          <Icon name="arrow-left" onClick={prevMonth} />
        </div>
      }
    }

    const renderArrowRight = () => {
      if (originType !== 'range' || props.isTarget) {
        return <div>
          <Icon name="arrow-right" onClick={nextMonth} />
          <Icon name="arrow-double-right" onClick={nextYear} />
        </div>
      }
    }

    const renderNav = (): JSX.Element => {
      return <>
        {renderArrowLeft()}
        <div>
          <span class="nav-year" onClick={() => {
            if (originType !== 'range') changePickerType('year')
          }}>
            {calendar.value.year}
          </span>
          <span>-</span>
          <span class="nav-month" onClick={() => {
            if (originType !== 'range') changePickerType('month')
          }}>{calendar.value.month + 1}</span>
        </div>
        {renderArrowRight()}
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
              const classes = computed(() => ({
                'cell': true,
                'day-cell': true,
                'not-current-month': !isCurrentMonth(day),
                'is-today': isToday(day),
                'is-select': originType === 'range' ? false : isSelect(day),
                'is-cell-start': originType === 'range' && isCellStart(day),
                'is-cell-move': originType === 'range' && isCellMove(day),
                'is-cell-end': originType === 'range' && isCellEnd(day)
              }))
              return <span
                class={classes.value} key={(i) * 7 + (j)}
                onClick={() => chooseDate(day)}
                onMousemove={() => handleMousemove(day)}
              >
                {day.getDate()}
              </span>
            })}
          </div>
        ))}
      </>
    }


    const renderFooter = () => {
      if (originType !== 'range') {
        return <Button type="primary" size="small" onClick={toToday}>今天</Button>
      }
      if (props.isTarget) {
        return <Button type="primary" size="small" onClick={handleConfirmRangeValue}>确定</Button>
      }
      return <div style="height:34px"></div>
    }

    return () => (<PickerPanel v-slots={{
      nav: () => renderNav(),
      content: () => renderContent(),
      footer: () => renderFooter()
    }} />)
  }
})

export default DayPicker
