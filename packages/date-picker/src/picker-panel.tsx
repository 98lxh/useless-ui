import { computed, defineComponent, inject, watch, reactive, ref, Teleport, Transition, onMounted, onUnmounted } from 'vue'
import { injectDatePicker } from './context'

const PickerPanel = defineComponent({
  name: 'UsePickerPanel',
  props: {
    isTaget: Boolean
  },
  setup(_, { slots }) {
    const isToTop = ref(false);
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
