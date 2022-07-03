import { Ref, VNode } from "vue"

export type ITableColumn = {
  key: string
  title: string
} & Partial<OrderColumnProp>

type OrderColumnProp = {
  type: 'selection'
  width: number
  sortable: boolean | 'custom'
  sortType: SortType
  fixed: 'right' | 'left'
  filterOption?: Array<ITableFilterOption>
  filter: (row: ITableData, value: string) => boolean,
  render: (row: ITableData) => VNode<any, any>
  _index: number
  _last_fixed?: boolean
  _has_shadow?: boolean
}

export type SortType = 'asc' | 'desc' | 'normal' | 'custom'

export type ITableData = Record<any, any>


export interface ITableFilterOption {
  label: string
  value: string
}

export interface ITableProps {
  columns: ITableColumn[]
  data: ITableData[]
  maxHeight?: number
  scrollX?: number
}


export type HiddenShadow = {
  left: boolean
  right: boolean
  both: boolean
}


export interface TableCloneData {
  cloneData: Ref<Array<ITableData>>
  cloneColumns: Ref<Array<ITableColumn>>
  sourceData?: Ref<Array<ITableData>>
}
