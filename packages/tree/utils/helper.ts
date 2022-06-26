import { computed, reactive, Ref } from 'vue';
import { ITreeProps, TreeNodeOption } from './../src/tree.types';

/**
 * 生成完整的节点
 * @param {node} 传入的节点
 * @param {parentKey} 父节点的key
 * @param {level} 当前节点的层级 
*/
export function createTreeNode(node: TreeNodeOption, parentKey: string, level = 0): TreeNodeOption {
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

/**
 * 生成映射父子节点的树
*/
export function buildTreeData(props: ITreeProps): Ref<Array<TreeNodeOption>> {

  function build(props: ITreeProps): Array<TreeNodeOption> {

    const result: Array<TreeNodeOption> = []

    const recursionTree = (treeList: TreeNodeOption[], parentKey: string, level = 0) => {
      const treeNodes: Array<TreeNodeOption> = []
      level = level + 1;
      treeList.forEach(item => {
        const treeNode = createTreeNode(item, parentKey, level)
        if (props.defaultExpaned.includes(treeNode.key)) treeNode.expanded = true
        treeNodes.push(treeNode)
        if (item.children?.length) treeNode.children = recursionTree(item.children, item.key, level)
      })
      return treeNodes
    }

    props.data.forEach(item => {
      const treeNode = createTreeNode(item, '')
      if (props.defaultExpaned.includes(treeNode.key)) treeNode.expanded = true
      if (item.children) treeNode.children = recursionTree(item.children, item.key)
      result.push(treeNode)
    })

    return result
  }

  return computed(() => build(props))
}


/**
 * 将树转换成数组
*/
export function flatternTree(sourceData: Array<TreeNodeOption>) {
  const flatternList: Array<TreeNodeOption> = [];

  function recursionTree(treeList: TreeNodeOption[]) {
    treeList.forEach(item => {
      flatternList.push(item)
      if (item.children.length) recursionTree(item.children)
    })
  }

  recursionTree(sourceData)

  return flatternList
}
