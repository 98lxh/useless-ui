import { defineComponent, PropType, computed } from "vue";
import { SpaceDirection } from "./space.types";

const Space = defineComponent({
  name: 'USpace',
  props: {
    direction: {
      type: String as PropType<SpaceDirection>,
      default: 'horizontal'
    },
    wrap: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 5
    }
  },
  setup(props, { slots }) {
    const classes = computed(() => ({
      'u-space': true,
      [`is-${props.direction}`]: props.direction,
      'is-wrap': props.wrap || props.direction === 'vertical',
      'is-fill': props.fill
    }))

    const styles = computed(() => ({
      marginRight: props.size + 'px',
      marginBottom: props.wrap || props.direction === 'vertical' ? props.size + 'px' : 0
    }))

    const renderContent = () => {
      return slots?.default().map(item => {
        return <div class="u-space-item" style={styles.value}>{item}</div>
      })
    }

    return () => (
      <div class={classes.value}>{renderContent()}</div>
    )
  }
})

export default Space
