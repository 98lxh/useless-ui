import { computed } from "@vue/reactivity";
import { defineComponent, inject, PropType } from "vue";
import { useTreeContext, useTreeNode } from "../hooks/useTreeNode";
import CollapseTransition from "@useless-ui/collapse-transition"
import { TreeNodeOption } from "./tree.types";

const TreeNode = defineComponent({
  name: 'UTreeNode',
  props: {
    node: {
      type: Object as PropType<TreeNodeOption>,
      required: true
    },
    level: {
      type: Number,
      default: 0
    },
  },
  emits: ['childExpaned', 'selectChange'],
  setup(props, { emit, slots }) {
    const { hasChildren, expanded } = useTreeNode(props)
    const { selectKey } = useTreeContext()
    const styles = computed(() => ({
      paddingLeft: props.level * 10 + 'px'
    }))


    const renderNodeIcon = (): JSX.Element => {
      return hasChildren.value ?
        <i onClick={handleIconClick}
          class={["u-icon-arrow-right-filling", expanded.value && 'is-expanded']} />
        : null
    }

    const handleIconClick = (e: MouseEvent) => {
      e.stopPropagation();
      emit('childExpaned', props.node)
    }
    const handleLableClick = (e: MouseEvent) => {
      e.stopPropagation();
      emit('selectChange', props.node)
    }
    return () => (
      <div class="u-tree__node" style={styles.value}>
        <div class="u-tree__node--content">
          {renderNodeIcon()}
          <div class={["u-tree__node--content--title", selectKey.value === props.node.key && 'is-selected']} onClick={handleLableClick}>{props.node.label}</div>
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


