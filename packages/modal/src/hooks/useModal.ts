
import { computed, getCurrentInstance, onUnmounted, reactive, ref, Ref, watch } from "vue";
import { ModalProps } from "../modal.types";

const useModel = (props: ModalProps): Ref<boolean> => {
  const emit = getCurrentInstance().emit;
  return computed({
    get() {
      return props.visible
    },
    set(newValue) {
      emit('update:visible', newValue)
    }
  })
}

const useMouseLocation = (visible: Ref<boolean>) => {
  const mouseLocation = reactive({
    x: 0,
    y: 0
  })
  const getMouseLocation = (event: MouseEvent) => {
    if (visible.value) return
    mouseLocation.x = event.clientX;
    mouseLocation.y = event.clientY;
  }
  document.addEventListener('mousemove', getMouseLocation)
  onUnmounted(() => {
    document.removeEventListener('mousemove', getMouseLocation)
  })

  return mouseLocation
}


const useWatchModalVisible = (
  visible: Ref<boolean>,
  modalRef: Ref<HTMLElement>,
  modalContainerRef: Ref<HTMLElement>,
  mouseLocation: any
) => {
  watch(visible, () => {
    let { x, y } = mouseLocation;
    x = x + 'px'
    y = y + 'px'

    const originTop = visible.value ? y : '30%'
    const originLeft = visible.value ? x : '50%'
    const top = !visible.value ? y : '30%'
    const left = !visible.value ? x : '50%'
    const originTimeout = visible.value ? 0 : 300
    const timeout = !visible.value ? 0 : 300
    const originTransform = visible.value ? 'translate(-50%,-50%) scale(0)' : 'translate(-50%,-50%) scale(1)'
    const transform = !visible.value ? 'translate(-50%,-50%) scale(0)' : 'translate(-50%,-50%) scale(1)'
    const display = visible.value ? 'block' : 'none'
    const overflow = visible.value ? 'hidden' : ''
    setTimeout(() => {
      modalContainerRef.value.style.display = display
      document.body.style.overflowY = overflow
      modalRef.value.style.top = originTop
      modalRef.value.style.left = originLeft
      modalRef.value.style.transform = originTransform
    }, originTimeout)

    setTimeout(() => {
      modalRef.value.style.transform = 'translate(-50%,-50%) scale(1)'
      modalRef.value.style.top = top
      modalRef.value.style.left = left
      modalRef.value.style.transform = transform
    }, timeout)
  })
}

export const useModal = (props: ModalProps) => {
  const visible = useModel(props)
  const mouseLocation = useMouseLocation(visible)
  const modalRef = ref<HTMLElement>()
  const modalContainerRef = ref<HTMLElement>()
  useWatchModalVisible(visible, modalRef, modalContainerRef, mouseLocation)
  return {
    visible,
    modalRef,
    modalContainerRef
  }
}
