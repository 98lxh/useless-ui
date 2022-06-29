import { computed, defineComponent, onMounted, PropType, ref, Transition, nextTick } from "vue";
import { basePopoverProps, PopoverNodePositionType, PopoverPlacementType, TriggerContext } from "./popover.types";
import { useClick } from "./hooks/use-click";
import { useHover } from "./hooks/use-hover";
import { calculatePosition } from "./utils/calculate-positon";
import { calculatePlacement } from "./utils/placement-strategy";

const Popover = defineComponent({
  name: "UsePopoverNode",
  props: {
    ...basePopoverProps,
    triggerEl: {
      type: Object as PropType<Element>
    },
    triggerCtx: {
      type: Object as PropType<TriggerContext>
    },
  },
  setup(props) {
    const visiable = ref(false)
    const contentMouseOver = ref(false)
    const popoverNodeRef = ref<HTMLElement>(null)
    const position = ref<PopoverNodePositionType>(null)
    const contentRef = ref<HTMLDivElement>(null)
    const placement = ref<PopoverPlacementType>('top')
    const triggerRect = props.triggerEl.getBoundingClientRect()

    const classes = computed(() => ({
      'u-popover-node': true,
      [`is-placement-${placement.value}`]: props.placement
    }))

    const basicStyle = computed(() => ({
      backgroundColor: props.bgColor,
      borderColor: props.bgColor !== '#404040' ? '#e5e6eb' : props.bgColor,
    }))

    const styles = computed(() => ({
      ...position.value,
      ...basicStyle.value,
      padding: props.padding,
      color: props.color
    }))

    function calcPopoverContentPosition() {
      if (!visiable.value) return

      nextTick(() => {
        console.log(111)
        const contentSize = {
          height: popoverNodeRef.value.clientHeight,
          width: popoverNodeRef.value.clientWidth
        }
        //计算popover弹出的位置和方向
        const currentPlacement = calculatePlacement(triggerRect, contentSize, props.placement)
        position.value = calculatePosition(triggerRect, contentSize, currentPlacement, props.showArrow)
        placement.value = props.triggerCtx.placement = currentPlacement
      })
    }

    function registerEvent() {
      switch (props.trigger) {
        case 'click':
          useClick(props, contentRef, visiable,calcPopoverContentPosition)
          break
        case 'hover':
          useHover(props, contentMouseOver, visiable)
          break
      }
    }

    function renderContent(): JSX.Element {
      return (
        <div class="popover-node__content">
          {
            typeof props.content === 'function'
              ? props.content()
              : props.content
          }
        </div>
      )
    }

    onMounted(() => {
      registerEvent()
      visiable.value = true
      calcPopoverContentPosition()
    })


    return () => (
      <Transition
        name={`zoom-fade-${props.placement}`}
        mode="out-in"
        ref={popoverNodeRef}>
        <div
          class={classes.value}
          ref={contentRef}
          v-show={visiable.value}
          onMouseleave={()=> contentMouseOver.value = false }
          onMouseenter={()=> contentMouseOver.value = true }
          style={styles.value}
        >
          <div class="popover-node__content">
            {renderContent()}
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
