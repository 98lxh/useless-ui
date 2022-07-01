import { VNode } from "vue"

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
  _index?: number
  _last_fixed?: boolean
  _has_shadow?: boolean
  render: (row: ITableData) => VNode<any, any>
}

export type SortType = 'asc' | 'desc' | 'normal' | 'custom'

export type ITableData = Record<any, any>

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
