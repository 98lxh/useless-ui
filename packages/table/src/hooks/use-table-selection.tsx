import { getCurrentInstance, ref, watch } from "vue";
import { ITableData, TableCloneData } from "../table.types";

export function useTableSelection({ cloneData }: Partial<TableCloneData>) { 
  const selectedItems = ref<number[]>([])
  const emit = getCurrentInstance().emit

  cloneData.value.forEach((item,index) => { 
    item._id = index
  })

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

  return ({
    selectedItems,
    selectAll,
    select
  })
}
