import { cloneDeep } from 'lodash';
import { Ref, getCurrentInstance } from 'vue';
import { ITableData, ITableColumn, SortType } from './../table.types';

interface TableSortParam {
  cloneData: Ref<ITableData[]>
  cloneColumns: Ref<ITableColumn[]>
}

export function useTableSort({ cloneData, cloneColumns }: TableSortParam) {
  const emit = getCurrentInstance().emit
  const sourceData = cloneDeep(cloneData.value)
  cloneColumns.value.forEach(column => sort(column, column.sortType))

  function sort(column: ITableColumn, type: SortType) {
    const { sortable, key } = column
    if (!sortable) return

    const _data = cloneDeep(cloneData.value)
    column.sortType = type

    //自定义排序
    if (column.sortable === 'custom') {
      return emit('sortChange', {
        column: cloneDeep(column),
        type
      })
    }

    switch (column.sortType) {
      case 'normal':
        return cloneData.value = sourceData
      default:
        cloneData.value = _data.sort((a, b) => {
          if (type === 'asc') {
            return a[key] - b[key]
          }
          return b[key] - a[key]
        })
        break;
    }
  }


  return {
    sort
  }
}
