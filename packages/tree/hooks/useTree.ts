import { computed, ref } from 'vue';
import { createTreeNode } from './../utils';
import { TreeNodeOption } from './../src/tree.types';
import { ITreeProps } from '../src/tree.types';

const useGenTreeData = (props: ITreeProps) => {
  const data = computed(() => {
    const res: TreeNodeOption[] = []
    const dfs = (treeList: TreeNodeOption[], parentKey: string, level = 0) => {
      const treeNodes: TreeNodeOption[] = []
      level = level + 1;
      treeList.forEach(item => {
        const treeNode = createTreeNode(item, parentKey, level)
        if (props.defaultExpaned.includes(treeNode.key)) treeNode.expanded = true
        treeNodes.push(treeNode)
        if (item.children?.length) treeNode.children = dfs(item.children, item.key, level)
      })
      return treeNodes
    }

    props.data.forEach(item => {
      const treeNode = createTreeNode(item, '')
      if (props.defaultExpaned.includes(treeNode.key)) treeNode.expanded = true
      if (item.children) treeNode.children = dfs(item.children, item.key)
      res.push(treeNode)
    })

    return res
  })
  return data
}

const useGenFlatList = (sourceData: TreeNodeOption[]) => {
  const flatList: TreeNodeOption[] = [];
  const dfs = (treeList: TreeNodeOption[]) => {
    treeList.forEach(item => {
      flatList.push(item)
      if (item.children.length) dfs(item.children)
    })
  }
  dfs(sourceData)
  return flatList
}

const useTreeUpdate = () => {
  const updateDownWard = (children: TreeNodeOption[], checked: boolean) => {
    const updateChildren = (children: TreeNodeOption[]) => {
      children.forEach(item => {
        if (item.children.length) updateChildren(item.children)
        item.checked = checked
        item.indeterminate = false
      })
    }
    updateChildren(children)
  }

  const updateUpWard = (currentNode: TreeNodeOption, flatList: TreeNodeOption[]) => {
    const updateParent = (currentNode: TreeNodeOption) => {
      const [parentNode] = flatList.filter(item => item.key === currentNode.parentKey);
      if (parentNode) {
        const parentAllChecked = parentNode.children.every(item => item.checked)
        const parentIndeterminate = parentNode.children.some(item => item.checked || item.indeterminate)
        parentNode.checked = parentAllChecked
        parentNode.indeterminate = parentIndeterminate
        updateParent(parentNode)
      }
    }
    updateParent(currentNode)
  }

  return {
    updateDownWard, updateUpWard
  }
}


export const useTree = (props: ITreeProps) => {
  const selectKey = ref('');
  const data = useGenTreeData(props)
  console.log(data.value)
  const flatList = useGenFlatList(data.value)
  const { updateDownWard, updateUpWard } = useTreeUpdate();

  return {
    data,
    selectKey,
    flatList,
    updateDownWard,
    updateUpWard
  }
}