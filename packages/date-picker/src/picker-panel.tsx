import { defineComponent } from 'vue'

const PickerPanel = defineComponent({
  name: 'UsePickerPanel',
  props: {
    isTaget: Boolean
  },
  setup(_, { slots }) {
    return () => (
      <div class="u-date-picker__panel">
        <div class="panel__nav">
          {slots.nav && slots.nav()}
        </div>
        <div class="panel__content">
          {slots.content && slots.content()}
        </div>
        <div class="panel__footer">
          {slots.footer && slots.footer()}
        </div>
      </div>
    )
  }
})

export default PickerPanel
