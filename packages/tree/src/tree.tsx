import { defineComponent, PropType, provide } from "vue";
import TreeNode from "./tree-node";
import { useTree } from '../hooks/use-tree'
import { TreeNodeOption, TreeProvide } from "./tree.types";
import { updateDownWard, updateUpWard } from "../utils/update";

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
    const { selectedKey, checkedKeys, data, flatternList } = useTree(props)

    function handleExpaned(node: TreeNodeOption) {
      node.expanded = !node.expanded
    }

    function handleSelectChange(node: TreeNodeOption) {
      selectedKey.value = node.key
      emit('selectedChange', node.key)
    }

    function handleCheckChange(node: TreeNodeOption) {
      node.checked = !node.checked;
      node.indeterminate = false;
      let currentCheckedKeys: Array<string> = []

      if (props.checkStrictly) {
        updateDownWard(node.children!, node.checked)
        updateUpWard(node, flatternList)
      }

      currentCheckedKeys = flatternList.filter(item => item.checked).map(item => item.key)
      emit('checkedChange', currentCheckedKeys)
      checkedKeys.value = currentCheckedKeys
    }

    function renderTreeNodes() {
      function scanTree(nodes: TreeNodeOption[]) {
        return nodes.map(function (treeNode) {
          const props = {
            node: treeNode,
            onSelectChange: handleSelectChange,
            onChildExpaned: handleExpaned,
            onCheckChange: handleCheckChange
          }

          if (!treeNode.children.length) return <TreeNode {...props} />

          return (
            <TreeNode {...props} >
              {scanTree(treeNode.children)}
            </TreeNode>
          )
        })
      }
      return scanTree(data.value)
    }

    provide<TreeProvide>('UTree', {
      selectedKey,
      checkable: props.checkable
    })

    return () => (
      <div class="u-tree">
        {renderTreeNodes()}
      </div>
    )
  }
})

export default Tree


