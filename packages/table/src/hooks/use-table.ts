import { getCurrentInstance, ref, watch } from 'vue';
import { ITableData, ITableProps } from './../table.types';
import { cloneDeep } from 'lodash';

export function useTable(props: ITableProps) {
  const { data, columns } = props;
  const cloneData = ref(cloneDeep(data))
  const cloneColumns = ref(cloneDeep(columns))
  const selectedItems = ref<number[]>([])
  const emit = getCurrentInstance().emit

  cloneColumns.value.forEach((col, index) => {
    const next = cloneColumns.value[index + 1]
    const prev = cloneColumns.value[index - 1]
    col.sortType = col.sortType ?? 'normal'
    col._index = index
    col._has_shadow = (next && !next.fixed) || (prev && !prev.fixed)
    col._last_fixed = (index === 0) || (index === props.columns.length - 1)
  })

  cloneData.value.forEach(row => row._id = Math.random())

  function selectAll() {
    selectedItems.value = []
    cloneData.value.forEach(row => selectedItems.value.push(row._id))
  }

  function select(row?: ITableData) {
    if (!row) {
      const allSelected = selectedItems.value.length === cloneData.value.length
      if (allSelected) return selectedItems.value = []

      return selectAll()
    }

    const removeIndex = selectedItems.value.findIndex(id => id === row._id)
    if (removeIndex >= 0) return selectedItems.value.splice(removeIndex, 1)
    selectedItems.value.push(row._id)
  }

  watch(selectedItems, () => { 
    const currentSelectItems = cloneData.value.filter(d => selectedItems.value.includes(d._id))
    emit('selectChange',currentSelectItems)
  }, {
    deep:true
  })

  return {
    cloneData,
    cloneColumns,
    selectedItems,
    selectAll,
    select
  }
}
