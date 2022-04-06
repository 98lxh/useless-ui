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
    children: [],
  })
}

export const dfs = (treeList: TreeNodeOption[], parentKey: string, level = 0) => {
  const treeNodes: TreeNodeOption[] = []
  ++level
  treeList.forEach(item => {
    const treeNode = createTreeNode(item, parentKey, level)
    treeNodes.push(treeNode)
    if (item.children.length) treeNode.children = dfs(item.children, item.key, level)
  })
  return treeNodes
}
