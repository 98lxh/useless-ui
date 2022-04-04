import { defineComponent } from "vue";

const ButtonGroup = defineComponent({
  name: 'UButtonGroup',
  setup(_, { slots }) {

    return () => (
      <div class="u-button-group">
        {slots.default && slots.default()}
      </div>
    )
  }
})

export default ButtonGroup
