import { defineComponent } from "vue";


const Icon = defineComponent({
  name: "UseIcon",
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, { emit }) {

    const handleIconClick = (event) => {
      emit('click', event)
    }

    return () => (<i class={`u-icon-${props.name}`} onClick={handleIconClick}></i>)
  }
})

export default Icon
