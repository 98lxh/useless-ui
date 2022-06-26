import { TreeNodeProps } from '../src/tree.types';
import { inject, computed } from "vue";
import { TreeProvide } from "../src/tree.types";

export function useTreeNode(props: TreeNodeProps) {
  const hasChildren = computed(() => props.node.children.length > 0)
  const expanded = computed(() => props.node.expanded);
  const level = computed(() => props.node.level)
  const disabled = computed(() => props.node.disabled)

  return {
    hasChildren,
    expanded,
    level,
    disabled
  }
}

export function useTreeContext() {
  const { selectedKey, checkable } = inject<TreeProvide>('UTree')

  return {
    selectedKey,
    checkable
  }
}
