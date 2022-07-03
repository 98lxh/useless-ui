import { ITableColumn } from './../table.types';
import { TableCloneData } from "../table.types";
import { cloneDeep } from '@useless-ui/utils';

export function useTableFilter({ cloneData }: TableCloneData) {
  const sourceData = cloneDeep(cloneData.value)
 
  function filter(column: ITableColumn, value: string) {
    const { filter: _filter } = column

    if (!value) {
      return cloneData.value = sourceData
    }

    cloneData.value = sourceData.filter(row => _filter(row,value))
  }

  return {
    filter
  }
}
