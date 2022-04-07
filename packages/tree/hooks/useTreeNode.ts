import { TreeNodeProps } from './../src/tree.types';

import { computed } from "@vue/reactivity";
import { inject, } from "vue";
import { TreeProvide } from "../src/tree.types";

export const useTreeNode = (props: TreeNodeProps) => {
  const hasChildren = computed(() => props.node.children.length > 0)
  const expanded = computed(() => props.node.expanded);
  const level = computed(() => props.node.level)

  return {
    hasChildren,
    expanded,
    level
  }
}

export const useTreeContext = () => {
  const { selectKey, checkable } = inject<TreeProvide>('UTree')

  return {
    selectKey,
    checkable
  }
}
