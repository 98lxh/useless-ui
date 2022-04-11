import { defineComponent, PropType, computed } from "vue";
import { useTreeContext, useTreeNode } from "../hooks/useTreeNode";
import CollapseTransition from "@useless-ui/collapse-transition"
import Checkbox from "@useless-ui/checkbox";
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
    parentKey: {
      type: String,
      default: ''
    }
  },
  components: {
    Checkbox
  },
  emits: ['childExpaned', 'selectChange', 'checkChange'],
  setup(props, { emit, slots }) {
    const { hasChildren, expanded, level, disabled } = useTreeNode(props)
    const { selectedKey, checkable } = useTreeContext()

    const styles = computed(() => ({
      paddingLeft: level.value * 18 + 'px'
    }))

    const titleClasses = computed(() => ({
      "u-tree__node--content--title": true,
      'is-selected': selectedKey.value === props.node.key,
      'is-disabled': disabled.value
    }))

    const handleCheckChange = () => {
      if (disabled.value) return
      emit('checkChange', props.node)
    }

    const handleIconClick = (e: MouseEvent) => {
      e.stopPropagation();
      emit('childExpaned', props.node)
    }

    const handleLableClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (disabled.value) return
      emit('selectChange', props.node)
    }


    const renderNodeIcon = (): JSX.Element => {
      return hasChildren.value ?
        <i onClick={handleIconClick}
          class={["u-icon-arrow-right-filling", expanded.value && 'is-expanded']} />
        : null
    }

    const renderContent = (): JSX.Element => {
      return <div class="u-tree__node--content">
        {renderNodeIcon()}
        {checkable && <Checkbox disabled={disabled.value}
          key={props.node.key}
          modelValue={props.node.checked}
          indeterminate={props.node.indeterminate}
          onChange={handleCheckChange} />}

        <div class={titleClasses.value} onClick={handleLableClick}>
          {props.node.label}
        </div>
      </div>
    }

    return () => (
      <div class="u-tree__node" style={styles.value}>
        {renderContent()}
        <CollapseTransition>
          {
            <div class="u-tree__node--children" v-show={expanded.value}>
              {slots.default && slots.default()}
            </div>
          }
        </CollapseTransition>
      </div>
    )
  }
})

export default TreeNode


