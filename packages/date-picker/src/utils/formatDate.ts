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
  let index = 0;
  let resIndex = 0;
  let arr = Array(42).fill(0)
  arr.forEach((_, i) => arr[i] = i + 1)
  const result = []
  while (index < arr.length) {
    result[resIndex++] = arr.slice(index, (index += 7))
  }
  return result
}
