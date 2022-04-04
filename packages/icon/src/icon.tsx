import { defineComponent } from "vue";


const Icon = defineComponent({
  name: "UIcon",
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup() {
    return () => (<i>xxx</i>)
  }
})

export default Icon
