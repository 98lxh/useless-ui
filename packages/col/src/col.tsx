
import { defineComponent, h, inject, computed } from "vue";

const Col = defineComponent({
  name: 'UseCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: {
      type: Number,
      default: 0
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    }
    ,
    lg: {
      type: Number,
      default: 0
    },
    xl: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots }) {
    const gutter = inject('gutter', 0)

    const classes = computed(() => {
      const ret = [];
      const pos = ['span', 'offset'] as const;
      pos.forEach(item => {
        const size = props[item]
        if (typeof size === 'number' && size > 0) {
          ret.push(`u-col-${item}-${props[item]}`)
        }
      })

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
      sizes.forEach(size => {
        if (typeof props[size] === 'number' && props[size] > 0) {
          ret.push(`u-col-${size}-${props[size]}`)
        }
      })

      return ['u-col', ...ret]
    })

    const styles = computed(() => {
      if (gutter > 0) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px',
        }
      }
      return {}
    })

    return () => h(props.tag, {
      class: classes.value,
      style: styles.value
    }, slots.default?.())
  }
})

export default Col
