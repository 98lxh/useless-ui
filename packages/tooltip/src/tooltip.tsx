import { defineComponent, PropType } from "vue";
import { PopoverPlacementType } from "@useless-ui/popover/src/popover.types";
import Popover from "@useless-ui/popover";
const Tooltip = defineComponent({
  name: 'UseTooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    placement: {
      type: String as PropType<PopoverPlacementType>,
      default: 'top'
    }
  },
  components: {
    Popover
  },
  setup(props, { slots }) {
    const renderTrigger = (): JSX.Element[] => {
      return slots.default && slots.default()
    }
    return () => (<Popover
      bgColor="#404040"
      color="#fff"
      placement={props.placement}
      v-slots={{
        content: () => props.content,
        default: () => renderTrigger()
      }}
    >
    </Popover>)
  }
})

export default Tooltip
