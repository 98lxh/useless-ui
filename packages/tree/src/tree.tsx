import { defineComponent, PropType, provide } from "vue";
import TreeNode from "./tree-node";
import { TreeNodeOption, TreeProvide } from "./tree.types";
import { useTree } from '../hooks/useTree'

const Tree = defineComponent({
  name: 'UseTree',
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
    checkStrictly: Boolean,
    checkedKeys: {
      type: Array as PropType<string[]>,
      default: []
    },
    selectedKey: {
      type: String,
    }
  },
  emits: ['selectedChange', 'checkedChange', 'update:selectKey', 'update:checkedKeys'],
  components: {
    TreeNode
  },
  setup(props, { emit }) {
    const { updateDownWard, updateUpWard, selectedKey, checkedKeys, data, flatList } = useTree(props)
    provide<TreeProvide>('UTree', {
      selectedKey,
      checkable: props.checkable
    })

    const handleExpaned = (node: TreeNodeOption) => {
      node.expanded = !node.expanded
    }

    const handleSelectChange = (node: TreeNodeOption) => {
      selectedKey.value = node.key
      emit('selectedChange', node.key)
      console.log(selectedKey.value)
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
      checkedKeys.value = currentCheckedKeys
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


