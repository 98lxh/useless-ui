
import { Ref, watch } from "vue";
import { ModalProps } from "../modal.types";

export const useWatchModalVisible = (
  visible: Ref<boolean>,
  modalRef: Ref<HTMLElement>,
  modalContainerRef: Ref<HTMLElement>,
  mouseLocation: any,
  props: ModalProps
) => {
  watch(visible, () => {
    const { originPosition, targetPosition } = props;
    let oX, oY
    let tX, tY
    if (originPosition) {
      oX = originPosition.x + 'px'
      oY = originPosition.y + 'px'
    } else {
      oX = mouseLocation.x ? mouseLocation.x + 'px' : '50%'
      oY = mouseLocation.y ? mouseLocation.y + 'px' : '50%'
    }

    if (targetPosition) {
      tX = targetPosition.x
      tY = targetPosition.y
    } else {
      tX = '50%'
      tY = '30%'
    }

    const originTop = visible.value ? oY : tY
    const originLeft = visible.value ? oX : tX
    const top = !visible.value ? oY : tY
    const left = !visible.value ? oX : tX
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
