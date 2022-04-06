import { dfs, createTreeNode } from './../utils';
import { computed } from 'vue';
import { ref } from 'vue';
import { TreeNodeOption } from './../src/tree.types';
import { ITreeProps } from '../src/tree.types';


export const useTree = (props: ITreeProps) => {
  const selectKey = ref('');
  const data = computed(() => {
    const res: TreeNodeOption[] = []
    props.data.forEach(item => {
      const treeNode = createTreeNode(item, item.key)
      res.push(treeNode)
      if (item.children) treeNode.children = dfs(item.children, item.key)
    })

    return res
  })

  const updateDownWard = (children: TreeNodeOption[], checked: boolean) => {
    const updateChildren = (children: TreeNodeOption[]) => {
      children.forEach(item => {
        if (item.children.length) updateChildren(item.children)
        item.checked = checked
      })
    }

    updateChildren(children)
  }

  const updateUpWard = (cureentNode: TreeNodeOption, sourceData: TreeNodeOption[]) => {
    let parentNode: TreeNodeOption;
    const dfs = (treeList: TreeNodeOption[]) => {
      treeList.forEach(item => {
        if (item.key === cureentNode.parentKey) {
          parentNode = item
        }
        if (item.children.length) dfs(item.children)
      })
    }
    dfs(sourceData)

    const updateParent = (parentNode: TreeNodeOption) => {
      const parentAllChecked = parentNode.children.every(item => item.checked)
      parentNode.checked = parentAllChecked
      // updateParent(parentNode)
    }

    updateParent(parentNode)
  }

  return {
    selectKey,
    data,
    updateDownWard,
    updateUpWard
  }
}
