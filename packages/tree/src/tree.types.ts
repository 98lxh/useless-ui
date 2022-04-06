
import { PropType, Ref } from "vue";

export interface TreeNodeOption {
  key: string,
  label: string,
  parentKey?: string,
  loading?: boolean,
  hasChildren?: boolean,
  selected?: boolean,
  checked?: boolean,
  expanded?: boolean,
  level?: number,
  children?: TreeNodeOption[],
  disabled?: boolean
}

export const TreeProps = {
  data: Array as PropType<TreeNodeOption[]>
}

export interface TreeNodeProps {
  node: TreeNodeOption
}

export interface TreeProvide {
  selectKey: Ref<string>
}
