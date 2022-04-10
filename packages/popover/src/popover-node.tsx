import { computed, defineComponent, onMounted, PropType, ref, Transition, nextTick, watch } from "vue";
import { PopoverNodeContent, PopoverNodePositionType, PopoverPlacementType } from "./popover.types";
import { calculatePosition } from "./utils/calculatePositon";

const Popover = defineComponent({
  name: "UPopoverNode",
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: Object as PropType<PopoverNodeContent>,
      default: ''
    },
    triggerRect: {
      type: Object as PropType<DOMRect>
    },
    placement: {
      type: String as PropType<PopoverPlacementType>
    },
    position: {
      type: Object as PropType<PopoverNodePositionType>,
      default: () => ({})
    },
    onClose: {
      type: Function as PropType<() => void>
    },
    triggerCtx: {
      type: Object
    }
  },
  setup(props) {
    const visiable = ref(false)
    const popoverNodeRef = ref<HTMLElement>()
    const position = ref<PopoverNodePositionType>({})
    const contentMouseOver = ref(false)
    const classes = computed(() => ({
      'u-popover-node': true,
      [`is-placement-${props.placement}`]: props.placement
    }))
    onMounted(() => {
      visiable.value = true
      nextTick(() => {
        const contentSize = {
          height: popoverNodeRef.value.clientHeight,
          width: popoverNodeRef.value.clientWidth
        }
        position.value = calculatePosition(props.triggerRect, contentSize, props.placement)
      })
    })

    watch([props.triggerCtx, contentMouseOver], () => {
      if (!props.triggerCtx.triggerEventOver && !contentMouseOver.value) {
        visiable.value = false
        setTimeout(() => {
          props.onClose()
        }, 100)
      }
    })

    return () => (
      <Transition name='zoom-fade-popover' mode="out-in" ref={popoverNodeRef}>
        <div class={classes.value} style={position.value} v-show={visiable.value}
          onMouseenter={() => contentMouseOver.value = true}
          onMouseleave={() => contentMouseOver.value = false}
        >
          {props.content}
        </div>
      </Transition >
    )
  }
})

export default Popover
