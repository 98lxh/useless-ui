import { onMounted, onUnmounted, ref } from "vue"
import { ITableProps, ITableColumn, HiddenShadow } from "../table.types"

export function useTableFixed(props: ITableProps) {
  const tableWrapperRef = ref<HTMLDivElement>(null)
  const tableInnerRef = ref<HTMLDivElement>(null)
  const tableRef = ref<HTMLTableElement>(null)
  const tableFixedBothRecord = ref<Map<number, number>>(new Map())
  const hiddenShadow = ref<HiddenShadow>({
    left: false,
    right: false,
    both: false
  })


  function addTableFixedBoth(column: ITableColumn, colWidth: number) {
    const { _index } = column;
    const hasRecord = tableFixedBothRecord.value.has(_index)
    if (hasRecord) return
    tableFixedBothRecord.value.set(_index, colWidth)
  }

  function getFixedTableBothOffset(column: ITableColumn) {
    const { _index, fixed } = column;
    const value = fixed === 'left' ? - 1 : 1
    let offset = 0;
    const start = 0;
    const end = props.columns.length - 1

    if (_index === start || _index === end) return offset;

    return tableFixedBothRecord.value.get(_index + value)
  }

  function fixedTableHeader() {
    const cloneTable = tableRef.value.cloneNode() as HTMLElement
    const thead = tableRef.value.children[0]
    tableWrapperRef.value.style.paddingTop = thead.getBoundingClientRect().height + 'px'
    cloneTable.appendChild(thead)
    cloneTable.style.width = '100%'
    cloneTable.classList.add('is-fixed-header')
    const tds = [...tableRef.value.querySelector('tbody tr').children]
    const ths = [...cloneTable.querySelector('thead tr').children] as HTMLElement[]

    tds.forEach((td, index) => {
      ths[index].style.width = td.getBoundingClientRect().width + 'px'
    })

    tableWrapperRef.value.appendChild(cloneTable)
  }


  function handleHiddenBetweenShadow() {
    const scrollElement = tableInnerRef.value
    const { clientWidth, scrollWidth } = scrollElement
    const { scrollLeft } = scrollElement
    const width = scrollWidth - clientWidth
    //右临界误差
    const rightError = Math.abs(scrollLeft - width)

    hiddenShadow.value = {
      both:false,
      left: scrollLeft === 0,
      right:scrollLeft >= width || rightError < 5
    }
  }
  
  function handleHiddenBothShadow() { 
    const scrollElement = tableInnerRef.value

    hiddenShadow.value = {
      left: false,
      right: false,
      both:scrollElement.scrollWidth <= scrollElement.clientWidth
    }
  }

  onMounted(() => {
    const { maxHeight } = props
    maxHeight && fixedTableHeader()
    handleHiddenBetweenShadow()
    tableInnerRef.value.addEventListener('scroll', handleHiddenBetweenShadow)
    window.addEventListener('resize',handleHiddenBothShadow)
  })

  onUnmounted(() => { 
    tableInnerRef.value.removeEventListener('scroll', handleHiddenBetweenShadow)
  })

  return {
    addTableFixedBoth,
    getFixedTableBothOffset,
    hiddenShadow,
    tableFixedBothRecord,
    tableWrapperRef,
    tableInnerRef,
    tableRef
  }
}
