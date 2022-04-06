import { defineComponent, ref } from "vue";
import TreeNode from "./tree-node";
import { TreeNodeOption, TreeProps } from "./tree.types";

const Tree = defineComponent({
  name: 'UTree',
  props: TreeProps,
  setup(props) {
    const handleExpaned = (node: TreeNodeOption) => {
      node.expanded = !node.expanded
    }

    const renderNodes = () => {
      const dfs = (nodes: TreeNodeOption[], level = 0) => {
        return nodes.map(treeNode => {
          if (treeNode.children.length) {
            return <TreeNode node={treeNode} onChildExpaned={handleExpaned} >
              {dfs(treeNode.children)}
            </TreeNode>
          } else {
            return <TreeNode node={treeNode} />
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


