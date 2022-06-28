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
    function renderTrigger(): JSX.Element[] {
      return slots.default && slots.default()
    }

    return () => (
      <Popover
        bgColor={defaultBgColor}
        color={defaultTextColor}
        placement={props.placement}
        v-slots={{
          content: () => props.content,
          default: () => renderTrigger()
        }}
      />
    )
  }
})


const defaultBgColor = '#404040'
const defaultTextColor = '#fff'

export default Tooltip
