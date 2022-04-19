
import { computed, getCurrentInstance, onUnmounted, reactive, ref, Ref } from "vue";
import { useWatchModalVisible } from "./use-watch-modal-visible";
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


export const useModal = (props: ModalProps) => {
  const visible = useModel(props)
  const mouseLocation = useMouseLocation(visible)
  const modalRef = ref<HTMLElement>()
  const modalContainerRef = ref<HTMLElement>()
  useWatchModalVisible(visible, modalRef, modalContainerRef, mouseLocation, props)
  return {
    visible,
    modalRef,
    modalContainerRef
  }
}
