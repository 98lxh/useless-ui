import { computed, defineComponent, inject, watch, reactive, ref, Teleport, Transition, onMounted, onUnmounted } from 'vue'
import { injectDatePicker } from './context'

const PickerPanel = defineComponent({
  name: 'UsePickerPanel',
  props: {
    isTaget: Boolean
  },
  setup(props, { slots }) {
    const { panelVisible, datePickerRef, originType } = inject(injectDatePicker)!
    const isToTop = ref(false);
    const panelPosition = reactive({
      x: '',
      y: ''
    })

    const PanelStyle = computed(() => ({
      top: panelPosition.y,
      left: panelPosition.x,
      borderLeft: originType === 'range' && 'none',
      boxShadow: props.isTaget && 'none',
    }))

    const changePanelPosition = () => {
      if (!panelVisible.value) return
      const PicerRect = datePickerRef.value.getBoundingClientRect();
      isToTop.value = document.documentElement.clientHeight - PicerRect.y - 310 < 0;
      panelPosition.x = PicerRect.x + (props.isTaget ? 248 : 0) + 'px'
      panelPosition.y = isToTop.value ? PicerRect.y - 310 + 'px' : PicerRect.y + 35 + 'px'
    }

    onMounted(() => {
      changePanelPosition()
      document.addEventListener('scroll', changePanelPosition)
      window.addEventListener('resize', changePanelPosition)
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', changePanelPosition)
      window.removeEventListener('resize', changePanelPosition)
    })

    watch([panelVisible], () => {
      if (panelVisible.value) {
        changePanelPosition()
      }
    })

    return () => (
      <Teleport to="body">
        <Transition name={`zoom-fade-${isToTop.value ? 'top' : 'bottom'}`}>
          <div class="u-date-picker__panel"
            v-show={panelVisible.value}
            style={PanelStyle.value}
          >
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
