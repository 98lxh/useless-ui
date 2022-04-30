import { computed, defineComponent, onMounted, PropType, ref, Transition, nextTick, watch, } from "vue";
import { PopoverNodePositionType, PopoverPlacementType, PopoverTriggerType } from "./popover.types";
import { calculatePosition } from "./utils/calculate-positon";
import { calculatePlacement } from "./utils/placement-strategy";
import { useClick } from "./hooks/use-click";

const popoverProps = {
  title: {
    type: String,
    default: ''
  },
  content: {
    type: [
      Function,
      String
    ],
    default: ''
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
  },
  color: {
    type: String,
    default: '#fff'
  },
  bgColor: {
    type: String,
    default: '#000'
  },
  trigger: {
    type: String as PropType<PopoverTriggerType>,
    default: 'hover'
  },
  triggerEl: {
    type: Object as PropType<Element>
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  padding: {
    type: String,
    default: '10px'
  }
}


const Popover = defineComponent({
  name: "UsePopoverNode",
  props: popoverProps,
  setup(props) {
    const visiable = ref(false)
    const popoverNodeRef = ref<HTMLElement>()
    const position = ref<PopoverNodePositionType>({})
    const placement = ref<PopoverPlacementType>('top')
    const triggerRect = props.triggerEl.getBoundingClientRect()
    const contentMouseOver = ref(false)
    const contentRef = ref<Element>()

    const classes = computed(() => ({
      'u-popover-node': true,
      [`is-placement-${placement.value}`]: props.placement
    }))

    const basicStyle = computed(() => ({
      backgroundColor: props.bgColor,
      borderColor: props.bgColor !== '#000' ? '#e5e6eb' : props.bgColor,
    }))

    const styles = computed(() => ({
      ...position.value,
      ...basicStyle.value,
      padding: props.padding,
      color: props.color
    }))

    const handleMouse = (state: boolean) => {
      if (props.trigger === 'hover') contentMouseOver.value = state
    }

    const calcPopoverContentPosition = () => {
      if (!visiable.value) return
      nextTick(() => {
        const contentSize = {
          height: popoverNodeRef.value.clientHeight,
          width: popoverNodeRef.value.clientWidth
        }
        //计算popover弹出的位置和方向
        const currentPlacement = calculatePlacement(triggerRect, contentSize, props.placement)
        position.value = calculatePosition(triggerRect, contentSize, currentPlacement, props.showArrow)
        props.triggerCtx.placement = currentPlacement
        placement.value = currentPlacement
      })
    }

    onMounted(() => {
      visiable.value = true
      calcPopoverContentPosition()
    })

    //处理trigger为click
    if (props.trigger === 'click') {
      useClick(props, contentRef)
    }

    watch([props.triggerCtx, contentMouseOver], () => {
      if (!props.triggerCtx.triggerEventOver && !contentMouseOver.value && props.trigger === 'hover') {
        props.onClose()
      }
    })


    return () => (
      <Transition name={`zoom-fade-${placement.value}`} mode="out-in" ref={popoverNodeRef}>
        <div
          class={classes.value}
          ref={contentRef}
          v-show={visiable.value}
          style={styles.value}
          onMouseenter={() => handleMouse(true)}
          onMouseleave={() => handleMouse(false)}
        >
          <div class="popover-node__content">
            {typeof props.content === 'function' ? props.content() : props.content}
          </div>
          <div
            class="popover-node__arrow"
            v-show={props.showArrow}
            style={basicStyle.value} />
        </div>
      </Transition >
    )
  }
})

export default Popover
