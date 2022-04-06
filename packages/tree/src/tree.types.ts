
import { Ref } from "vue";

export interface TreeNodeOption {
  key: string,
  label: string,
  parentKey?: string,
  selected?: boolean,
  checked?: boolean,
  expanded?: boolean,
  level?: number,
  children?: TreeNodeOption[],
  disabled?: boolean
}

export interface ITreeProps {
  data: TreeNodeOption[],
  checkable: boolean,
  checkStrictly: boolean
}

export interface TreeNodeProps {
  node: TreeNodeOption
}

export interface TreeProvide {
  selectKey: Ref<string>,
  checkable: boolean
}
