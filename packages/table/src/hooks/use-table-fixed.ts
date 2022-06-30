import { onMounted, ref } from "vue"
import { ITableProps } from "../table.types"

export function useTableFixed(props: ITableProps) {
  const tableWrapperRef = ref<HTMLDivElement>(null)
  const tableInnerRef = ref<HTMLDivElement>(null)
  const tableRef = ref<HTMLTableElement>(null)

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

  onMounted(() => {
    const { maxHeight } = props
    maxHeight && fixedTableHeader()
  })

  return {
    tableWrapperRef,
    tableInnerRef,
    tableRef
  }
}
