import { defineComponent, PropType, provide, ref } from "vue";
import TreeNode from "./tree-node";
import { TreeNodeOption, TreeProvide } from "./tree.types";

const Tree = defineComponent({
  name: 'UTree',
  props: {
    data: {
      type: Array as PropType<TreeNodeOption[]>,
      requred: true
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const selectKey = ref('')
    provide<TreeProvide>('UTree', {
      selectKey
    })

    const handleExpaned = (node: TreeNodeOption) => {
      node.expanded = !node.expanded
    }

    const handleSelectChange = (node: TreeNodeOption) => {
      selectKey.value = node.key
      emit('select', node.key)
    }

    const renderNodes = () => {
      const dfs = (nodes: TreeNodeOption[], level = -1) => {
        level++
        return nodes.map(treeNode => {
          if (treeNode.children.length) {
            return <TreeNode node={treeNode} onSelectChange={handleSelectChange} onChildExpaned={handleExpaned} level={level} >
              {dfs(treeNode.children, level)}
            </TreeNode>
          } else {
            return <TreeNode node={treeNode} onSelectChange={handleSelectChange} level={level} />
          }
        })
      }

      return dfs(props.data)
    }

    return () => (
      <div class="u-tree">{renderNodes()}</div>
    )
  }
})

export default Tree


