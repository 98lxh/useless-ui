import { Ref } from 'vue';
import { ITableData, ITableColumn, SortType, HiddenShadow } from './table.types';
import type { InjectionKey } from 'vue'

interface TableProvide {
  data: Ref<ITableData[]>
  columns: Ref<ITableColumn[]>
  selectedItems: Ref<number[]>
  select: (row?: ITableData) => void
  sort: (column: ITableColumn, type: SortType) => void
  addTableFixedBoth: (column: ITableColumn, colWidth: number) => void
  getFixedTableBothOffset: (column: ITableColumn) => void
  tableFixedBothRecord: Ref<Map<number, number>>
  hiddenShadow:Ref<HiddenShadow>
}

export const injectTableKey: InjectionKey<TableProvide> = Symbol();
