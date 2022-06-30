import { Ref } from 'vue';
import { ITableData, ITableColumn, SortType } from './table.types';
import type { InjectionKey } from 'vue'

interface TableProvide {
  data: Ref<ITableData[]>
  columns: Ref<ITableColumn[]>
  selectedItems: Ref<number[]>
  select: (row?: ITableData) => void
  sort: (column: ITableColumn, type: SortType) => void
}

export const injectTableKey: InjectionKey<TableProvide> = Symbol();
