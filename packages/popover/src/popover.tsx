import { cloneVNode, defineComponent, ref } from "vue";
import { usePopover } from "./hooks/use-popover"
import { basePopoverProps } from "./popover.types";

const Popover = defineComponent({
  name: "UsePopover",
  props: {
    ...basePopoverProps
  },
  setup(props, { slots, expose }) {
    const triggerRef = ref(null)
    const { triggerCtx } = usePopover(props, triggerRef, slots)

    function close () {
      triggerCtx.instance.props.onClose()
    }

    expose({
      close
    })

    return () => {
      const triggerVnode = slots.default!()[0]
      return cloneVNode(triggerVnode, {
        ref: triggerRef,
      })
    }
  }
})

export default Popover
