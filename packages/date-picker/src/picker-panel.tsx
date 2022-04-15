import { computed, defineComponent, inject, watch, reactive, ref, Teleport, Transition, onMounted, onUnmounted } from 'vue'
import { injectDatePicker } from './context'

const PickerPanel = defineComponent({
  name: 'UsePickerPanel',
  props: {
    isTaget: Boolean
  },
  setup(props, { slots }) {
    const { panelVisible, datePickerRef } = inject(injectDatePicker)!
    const panelPosition = reactive({
      x: '',
      y: ''
    })

    const PanelStyle = computed(() => ({
      top: panelPosition.y,
      left: panelPosition.x,
      borderLeft: props.isTaget && 'none',
      boxShadow: props.isTaget && 'none',
    }))

    const changePanelPosition = () => {
      const rect = datePickerRef.value.getBoundingClientRect();
      panelPosition.x = rect.x + (props.isTaget ? 248 : 0) + 'px'
      panelPosition.y = rect.y + 35 + 'px'
    }

    onMounted(() => {
      changePanelPosition()
      document.addEventListener('scroll', changePanelPosition)
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', changePanelPosition)
    })

    watch([panelVisible], () => {
      if (panelVisible.value) {
        changePanelPosition()
      }
    })

    return () => (<Teleport to="body">
      <Transition name="zoom-fade-date">
        <div class="u-date-picker__panel"
          v-show={panelVisible.value}
          style={PanelStyle.value}>
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
      </Transition>
    </Teleport>)
  }
})

export default PickerPanel
