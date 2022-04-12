import { defineComponent, Teleport } from "vue";
import { useModal } from "./hooks/useModal";
import Button from "@useless-ui/button"

const modalProps = {
  visible: {
    type: Boolean
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

    const handleCloseModal = () => {
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

    return () => (<Teleport to="body">
      <div class="u-modal-container" ref={modalContainerRef}>
        <div class="u-modal-mask" onClick={handleCloseModal}></div>
        <div class="u-modal" ref={modalRef}>
          <div class="u-modal__title" v-show={slots.title}>
            {slots.title && slots.title()}
          </div>
          <div class="u-modal__content">
            {slots.default && slots.default()}
          </div>
          <div class="u-modal__footer">
            {slots.footer ?
              slots.footer() :
              <div class="btns">
                <Button type='outline' onClick={handleCancel}>{props.cancelText || '取消'}</Button>
                <Button onClick={handleConfirm}>{props.confirmText || '确认'}</Button>
              </div>
            }
          </div>
        </div>
      </div>
    </Teleport>)
  }
})

export default Modal
