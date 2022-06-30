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
  render: (row: ITableData) => VNode<any, any>
}

export type SortType = 'asc' | 'desc' | 'normal' | 'custom'

export type ITableData = Record<any, any>

export interface ITableProps {
  columns: ITableColumn[]
  data: ITableData[]
  maxHeight?: number
}
