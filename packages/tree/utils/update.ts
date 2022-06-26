import { TreeNodeOption } from "../src/tree.types"

/**
 * 向下更新节点
*/
export function updateDownWard(children: TreeNodeOption[], checked: boolean) {

  updateChildren(children)

  function updateChildren(children: TreeNodeOption[]) {
    children.forEach(item => {
      if (item.children.length) updateChildren(item.children)
      item.checked = !item.disabled && checked
      item.indeterminate = false
    })
  }
}

/**
 * 向上更新节点
*/
export function updateUpWard(currentNode: TreeNodeOption, flatternList: TreeNodeOption[]) {

  updateParent(currentNode)

  function updateParent(currentNode: TreeNodeOption) {
    const [parentNode] = flatternList.filter(item => item.key === currentNode.parentKey);
    if (parentNode) {
      const parentAllChecked = parentNode.children.every(item => item.checked)
      const parentIndeterminate = parentNode.children.some(item => item.checked || item.indeterminate)
      parentNode.checked = !parentNode.disabled && parentAllChecked
      parentNode.indeterminate = !parentNode.disabled && parentIndeterminate
      updateParent(parentNode)
    }
  }
}
