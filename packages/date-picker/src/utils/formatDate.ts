import { DatePickerValueType } from './../date-picker.types';
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
