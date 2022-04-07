import { reactive } from 'vue';
import { TreeNodeOption } from './src/tree.types';
export const createTreeNode = (node: TreeNodeOption, parentKey: string, level = 0): TreeNodeOption => {
  return reactive({
    key: node.key,
    label: node.label,
    parentKey,
    level,
    disabled: node.disabled || false,
    selected: node.selected || false,
    checked: node.checked || false,
    expanded: node.expanded || false,
    indeterminate: node.indeterminate || false,
    children: [],
  })
}
