import { cloneVNode, defineComponent,defineExpose ,PropType, ref } from "vue";
import { usePopover } from "./hooks/use-popover"
import { PopoverTriggerType } from "./popover.types";

const popoverProps =  {
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
    showArrow:{
      type:Boolean,
      default:true
    },
    visible:{
     type:Boolean,
     default:true
    }
  }

const Popover = defineComponent({
  name: "UsePopover",
  props:popoverProps,
  setup(props, { slots,expose }) {
    const triggerRef = ref()
    const { triggerCtx } = usePopover(props, triggerRef, slots)

    const close = () => {
      triggerCtx.instance.props.onClose()
    }
    
    const renderTrigger = () => {
      const triggerVnode = slots.default!()[0]
      return cloneVNode(triggerVnode, {
        ref: triggerRef,
      })
    }

    expose({
      close
    })

    return () => (
      renderTrigger()
    )
  }
})

export default Popover
