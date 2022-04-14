import { defineComponent, inject, Transition } from 'vue'
import { injectDatePicker } from './context'

const PickerPanel = defineComponent({
  name: 'UsePickerPanel',
  setup(_, { slots }) {
    const { panelVisible } = inject(injectDatePicker)!
    return () => (<Transition name="zoom-fade-date">
      <div class="u-date-picker__panel" v-show={panelVisible.value}>
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
    </Transition>)
  }
})

export default PickerPanel
