
import { computed } from "@vue/reactivity";
import { defineComponent, h, provide } from "vue";

const Row = defineComponent({
  name: 'UseRow',
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    gutter: {
      type: Number,
      default: 24
    },
    justify: {
      type: String,
      default: 'start'
    }
  },
  setup(props, { slots }) {
    provide('gutter', props.gutter)
    const classes = computed(() => [
      'u-row',
      props.justify !== 'start' ? `is-justify-${props.justify}` : ''
    ])
    const styles = computed(() => {
      const ret = {
        marginLeft: '',
        marginRight: ''
      }
      if (props.gutter > 0) {
        ret.marginLeft = '-' + (props.gutter / 2).toString() + 'px';
        ret.marginRight = '-' + (props.gutter / 2).toString() + 'px';
      }

      return ret
    })
    return () => h(props.tag, {
      class: classes.value,
      style: styles.value,
    }, slots.default?.())
  }
})

export default Row
