
import { computed, getCurrentInstance, onUnmounted, reactive, ref, Ref } from "vue";
import { ModalProps } from "../modal.types";

const useVModel = (props: ModalProps): Ref<boolean> => {
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

function useMouseLocation(visible: Ref<boolean>) {
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


export function useModal(props: ModalProps) {
  const visible = useVModel(props)
  const mouseLocation = useMouseLocation(visible)
  const modalRef = ref<HTMLElement>()
  const modalContainerRef = ref<HTMLElement>()

  return {
    visible,
    modalRef,
    modalContainerRef,
    mouseLocation
  }
}
