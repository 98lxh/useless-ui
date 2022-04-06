
import { computed } from "@vue/reactivity";
import { inject } from "vue";
import { TreeNodeProps, TreeProvide } from "../src/tree.types";

export const useTreeNode = (props: TreeNodeProps) => {
  const { node } = props;
  const hasChildren = computed(() => node.children.length > 0)
  const expanded = computed(() => node.expanded);

  return {
    hasChildren,
    expanded
  }
}

export const useTreeContext = () => {
  const { selectKey } = inject<TreeProvide>('UTree')

  return {
    selectKey
  }
}
