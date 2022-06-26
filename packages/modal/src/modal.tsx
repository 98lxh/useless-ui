import { defineComponent, PropType, Teleport } from "vue"
import { useModal } from "./hooks/use-modal"
import { ModalPosition } from "./modal.types"
import Button from "@useless-ui/button"

const modalProps = {
  visible: {
    type: Boolean
  },
  originPosition: {
    type: Object as PropType<ModalPosition | null>,
  },
  targetPosition: {
    type: Object as PropType<ModalPosition | null>,
    default: {
      x: '50%',
      y: '50%',
    }
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  confirmText: {
    type: String
  },
  cancelText: {
    type: String
  }
}

const Modal = defineComponent({
  name: 'UseModal',
  props: modalProps,
  components: {
    Button
  },
  emits: ['update:visible', 'confirm', 'cancel'],
  setup(props, { slots, emit }) {
    const { visible, modalRef, modalContainerRef } = useModal(props)

    if (visible.value === true) {
      visible.value = false
      setTimeout(() => {
        visible.value = true
      }, 500)
    }

    const handleCloseModal = () => {
      if (!props.maskClosable) return
      visible.value = false
    }

    const handleConfirm = () => {
      emit('confirm')
      visible.value = false
    }

    const handleCancel = () => {
      emit('cancel')
      visible.value = false
    }

    const renderTitle = () => {
      return slots.title && slots.title()
    }

    const renderFooter = () => {
      if (slots.footer) {
        return slots.footer()
      }
      return (
        <div class="btns">
          <Button type='outline' onClick={handleCancel}>{props.cancelText || '取消'}</Button>
          <Button type="primary" onClick={handleConfirm}>{props.confirmText || '确认'}</Button>
        </div>
      )
    }


    return () => (<Teleport to="body">
      <div class="u-modal-container" ref={modalContainerRef}>
        <div class="u-modal-mask" onClick={handleCloseModal}></div>
        <div class="u-modal" ref={modalRef}>
          <div class="u-modal__title" v-show={slots.title}>
            {renderTitle()}
          </div>
          <div class="u-modal__content">
            {slots.default && slots.default()}
          </div>
          <div class="u-modal__footer">
            {renderFooter()}
          </div>
        </div>
      </div>
    </Teleport>)
  }
})

export default Modal
