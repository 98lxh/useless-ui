import { computed } from "@vue/reactivity";
import { defineComponent, PropType, Transition } from "vue";
import { useTreeNode } from "../hooks/useTreeNode";
import CollapseTransition from "@useless-ui/collapse-transition"
import { TreeNodeOption } from "./tree.types";

const TreeNode = defineComponent({
  name: 'UTreNode',
  props: {
    node: {
      type: Object as PropType<TreeNodeOption>,
      required: true
    }
  },
  emits: ['childExpaned'],
  setup(props, { emit, slots }) {
    const { hasChildren, expanded } = useTreeNode(props)
    const classes = computed(() => ({
      'u-tree__node': true,
      'is-expanded': expanded.value
    }))

    const handleIconClick = (e: MouseEvent) => {
      e.stopPropagation();
      emit('childExpaned', props.node)
    }

    return () => (
      <div class={classes.value}>
        <div class="u-tree__node--content">
          {hasChildren.value && <i class="u-icon-arrowdown" onClick={handleIconClick} />}
          <div class="u-tree-node__content-title">{props.node.label}</div>
        </div>
        <CollapseTransition>
          {
            expanded.value && <div class="u-tree__node--children">
              {slots.default && slots.default()}
            </div>
          }
        </CollapseTransition>
      </div>
    )
  }
})

export default TreeNode


