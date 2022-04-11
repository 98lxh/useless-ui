import { cloneVNode, defineComponent, PropType, ref } from "vue";
import { usePopover } from "./hooks/usePopover"
import { PopoverPlacementType, PopoverTriggerType } from "./popover.types";


const Popover = defineComponent({
  name: "UsePopover",
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    trigger: {
      type: String as PropType<PopoverTriggerType>,
      default: 'hover'
    },
    placement: {
      type: String as PropType<PopoverPlacementType>,
      default: 'top'
    },
    color: {
      type: String,
      default: '#fff'
    },
    bgColor: {
      type: String,
      default: '#000'
    }
  },
  setup(props, { slots }) {
    const triggerRef = ref()
    usePopover(props, triggerRef, slots)
    const renderTrigger = () => {
      const triggerVnode = slots.default!()[0]
      return cloneVNode(triggerVnode, {
        ref: triggerRef,
      })
    }

    return () => (
      renderTrigger()
    )
  }
})

export default Popover
