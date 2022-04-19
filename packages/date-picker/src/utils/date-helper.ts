import { Ref } from 'vue';
import { DatePickerType } from '../date-picker.types';
export const getYearMonthDay = (date: Date) => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()

  return {
    year, month, day
  }
}


export const getDate = (year: number, month: number, day = 1) => {
  return new Date(year, month, day)
}

export const buildDays = () => {
  let arr = Array(42).fill(0)
  arr.forEach((_, i) => arr[i] = i + 1)
  return chunk(arr, 7)
}

export const buildWeeks = () => {
  return ['日', '一', '二', '三', '四', '五', '六']
}

export const buildYears = (startYear: number) => {
  let arr = Array(12).fill(0)
  arr.forEach((_, i) => arr[i] = startYear + i)
  return chunk(arr, 3)
}


export const buildMonth = () => {
  const baseList = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  return chunk(baseList.map(item => item + '月'), 3)
}

export const dateSort = (dateArr: any) => {
  const values = dateArr.map((d) => new Date(d).valueOf())
  values.sort((s, e) => s - e)
  return values.map(v => new Date(v))
}

const chunk = <T = any>(a: T[], len: number): T[][] => {
  let index = 0;
  let resIndex = 0;
  const arr = []
  while (index < a.length) {
    arr[resIndex++] = a.slice(index, (index += len))
  }

  return arr
}

export const getVisibleDays = (value: Date) => {
  const { year, month } = getYearMonthDay(value)
  const currentFirstDay = getDate(year, month) as any;
  const week = currentFirstDay.getDay()
  const startDay = currentFirstDay - week * 60 * 60 * 1000 * 24
  const dates = []
  for (let i = 0; i < 42; i++) {
    dates.push(new Date(startDay + i * 60 * 60 * 1000 * 24))
  }
  return dates
}


export const genFormatDate = (currentDate: Ref<any>, type: DatePickerType) => {
  const { year, month, day } = getYearMonthDay(
    Array.isArray(currentDate.value) ? currentDate.value[0] : currentDate.value
  )
  let date: any
  switch (type) {
    case 'date':
      date = `${year}-${month + 1}-${day}`
      break;
    case 'month':
      date = `${year}-${month + 1}-1`
      break;
    case 'year':
      date = `${year}-1-1`
      break;
    case 'range':
      const startDate = `${year}-${month + 1}-${day}`
      const { year: eY, month: eM, day: eD } = getYearMonthDay(currentDate.value[1])
      date = [startDate, `${eY}-${eM + 2}-${eD}`]
      break
  }
  return date
}
