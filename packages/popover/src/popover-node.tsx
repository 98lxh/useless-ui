import { computed, defineComponent, onMounted, PropType, ref, Transition, nextTick, watch, onUnmounted } from "vue";
import { PopoverNodeContent, PopoverNodePositionType, PopoverPlacementType, PopoverTriggerType } from "./popover.types";
import { calculatePosition } from "./utils/calculate-positon";
import { calculatePlacement } from "./utils/placement-strategy";

const popoverProps = {
  title: {
    type: String,
    default: ''
  },
  content: {
    type: Object as PropType<PopoverNodeContent>,
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
  showArrow:{
    type:Boolean,
    default:true
  },
}


const Popover = defineComponent({
  name: "UsePopoverNode",
  props: popoverProps,
  setup(props) {
    const visiable = ref(false)
    const popoverNodeRef = ref<HTMLElement>()
    const position = ref<PopoverNodePositionType>({})
    const triggerRect = props.triggerEl.getBoundingClientRect()
    const contentMouseOver = ref(props.trigger === 'click' ? true : false)
    const placement = ref<PopoverPlacementType>('top')
    const contentRef = ref<Element>()
    const classes = computed(() => ({
      'u-popover-node': true,
      [`is-placement-${placement.value}`]: props.placement
    }))

    const styles = computed(() => ({
      ...position.value,
      backgroundColor: props.bgColor,
      borderColor: props.bgColor !== '#000' ? '#e5e6eb' : props.bgColor,
      color: props.color
    }))

    const handleMouse = (state: boolean) => {
      if (props.trigger === 'hover') {
        contentMouseOver.value = state
      }
    }

    const handleClickOutside = (e) => {
      if (!contentRef.value.contains(e.target) && !props.triggerEl.contains(e.target)) {
        contentMouseOver.value = false
        props.triggerCtx.instance = null
      }
    }

    const calcPopoverContentPosition = () => {
      if (!visiable.value) return
      nextTick(() => {
        const contentSize = {
          height: popoverNodeRef.value.clientHeight,
          width: popoverNodeRef.value.clientWidth
        }
        placement.value = calculatePlacement(triggerRect, contentSize, props.placement)
        position.value = calculatePosition(triggerRect, contentSize, placement.value)
      })
    }

    onMounted(() => {
      visiable.value = true
      calcPopoverContentPosition()
    })

    if (props.trigger === 'click') {
      document.addEventListener('click', handleClickOutside)
    }

    onUnmounted(() => {
      if (props.trigger === 'click') {
        document.removeEventListener('click', handleClickOutside)
      }
    })

    watch([props.triggerCtx, contentMouseOver], () => {
      if (!props.triggerCtx.triggerEventOver && !contentMouseOver.value) {
        props.onClose()
      }
    })


    return () => (
      <Transition name='zoom-fade-popover' mode="out-in" ref={popoverNodeRef}>
        <div
          v-show={visiable.value}
          class={classes.value}
          ref={contentRef}
          style={styles.value}
          onMouseenter={() => handleMouse(true)}
          onMouseleave={() => handleMouse(false)}
        >
          <div class="popover-node__content">
            {props.content}
          </div>
          <div
            class="popover-node__arrow"
            style={{
              backgroundColor: props.bgColor,
              borderColor: 
                          props.bgColor !==  '#000' 
                                         ? '#e5e6eb' 
                                         : props.bgColor
            }} />
        </div>
      </Transition >
    )
  }
})

export default Popover
