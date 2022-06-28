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

    function handleIconClick(event) {
      emit('click', event)
    }

    return () => (
      <i
        class={`u-icon-${props.name}`}
        onClick={handleIconClick}
      />
    )
  }
})

export default Icon
