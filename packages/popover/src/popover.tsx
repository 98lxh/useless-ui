import { cloneVNode, defineComponent, defineExpose, PropType, ref } from "vue";
import { usePopover } from "./hooks/use-popover"
import { PopoverTriggerType } from "./popover.types";

const popoverProps = {
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  onClose: {
    type: Function as PropType<() => void>
  },
  trigger: {
    type: String as PropType<PopoverTriggerType>,
    default: 'hover'
  },
  placement: {
    type: String as PropType<any>,
    default: 'top'
  },
  color: {
    type: String,
    default: '#000'
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  visible: {
    type: Boolean,
    default: true
  },
  padding: {
    type: String,
    default: '10px'
  }
}

const Popover = defineComponent({
  name: "UsePopover",
  props: popoverProps,
  setup(props, { slots, expose }) {
    const triggerRef = ref(null)
    const { triggerCtx } = usePopover(props, triggerRef, slots)

    const close = () => {
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
