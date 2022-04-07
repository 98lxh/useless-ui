import { defineComponent, PropType, provide, watch } from "vue";
import TreeNode from "./tree-node";
import { TreeNodeOption, TreeProvide } from "./tree.types";
import { useTree } from '../hooks/useTree'

const Tree = defineComponent({
  name: 'UTree',
  props: {
    data: {
      type: Array as PropType<TreeNodeOption[]>,
      requred: true
    },
    defaultExpaned: {
      type: Array as PropType<string[]>,
      default: () => ([])
    },
    checkable: Boolean,
    checkStrictly: Boolean
  },
  emits: ['select', 'checkedChange'],
  setup(props, { emit }) {
    const { updateDownWard, updateUpWard, selectKey, data, flatList } = useTree(props)
    provide<TreeProvide>('UTree', {
      selectKey,
      checkable: props.checkable
    })

    const handleExpaned = (node: TreeNodeOption) => {
      node.expanded = !node.expanded
    }

    const handleSelectChange = (node: TreeNodeOption) => {
      selectKey.value = node.key
      emit('select', node.key)
    }

    const handleCheckChange = (node: TreeNodeOption) => {
      node.checked = !node.checked;
      node.indeterminate = false;
      let currentCheckedKeys: string[] = []
      if (props.checkStrictly) {
        updateDownWard(node.children!, node.checked)
        updateUpWard(node, flatList)
      }
      currentCheckedKeys = flatList.filter(item => item.checked).map(item => item.key)
      emit('checkedChange', currentCheckedKeys)
    }

    const renderNodes = () => {
      const dfs = (nodes: TreeNodeOption[]) => {
        return nodes.map(treeNode => {
          const nodeProps = {
            node: treeNode,
            onSelectChange: handleSelectChange,
            onChildExpaned: handleExpaned,
            onCheckChange: handleCheckChange
          }
          if (treeNode.children.length) {
            return <TreeNode {...nodeProps} >
              {dfs(treeNode.children)}
            </TreeNode>
          } else {
            return <TreeNode {...nodeProps} />
          }
        })
      }
      return dfs(data.value)
    }

    return () => (
      <div class="u-tree">{renderNodes()}</div>
    )
  }
})

export default Tree


