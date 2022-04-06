
import { computed } from "@vue/reactivity";
import { TreeNodeProps } from "../src/tree.types";

export const useTreeNode = (props: TreeNodeProps) => {
  const { node } = props;
  const hasChildren = computed(() => node.children.length > 0)
  const expanded = computed(() => node.expanded);

  return {
    hasChildren,
    expanded
  }
}
