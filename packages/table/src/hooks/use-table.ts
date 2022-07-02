import { cloneDeep } from '@useless-ui/utils';
import { computed, ref } from 'vue';
import { ITableProps } from './../table.types';

export function useTable(props: ITableProps) {
  const { data, columns } = props;
  const cloneData = ref(cloneDeep(data))
  const cloneColumns = ref(cloneDeep(columns))
  const isEmpty = computed(() => !props.data.length)
  cloneData.value.forEach(row => row._id = Math.random())

  cloneColumns.value.forEach((col, index) => {
    const next = cloneColumns.value[index + 1]
    const prev = cloneColumns.value[index - 1]
    col.sortType = col.sortType ?? 'normal'
    col._index = index
    col._has_shadow = (next && !next.fixed) || (prev && !prev.fixed)
    col._last_fixed = (index === 0) || (index === props.columns.length - 1)
  })

  return {
    cloneData,
    cloneColumns,
    isEmpty
  }
}
