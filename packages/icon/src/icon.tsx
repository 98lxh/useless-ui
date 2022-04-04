import { defineComponent } from "vue";


const Icon = defineComponent({
  name: "UIcon",
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => (<i class={`u-icon-${props.name}`}></i>)
  }
})

export default Icon
