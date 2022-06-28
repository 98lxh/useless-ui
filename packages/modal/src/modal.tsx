import { defineComponent, onUnmounted, Teleport, Transition } from "vue"
import { useModal } from "./hooks/use-modal"
import Button from "@useless-ui/button"

const modalProps = {
  visible: {
    type: Boolean
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
  },
  confirmLoading: {
    type: Boolean,
    default:undefined
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
    let timer: NodeJS.Timeout = null
    const { visible, modalRef, modalContainerRef, mouseLocation } = useModal(props)

    //默认打开情况下展示动画
    if (visible.value === true) {
      visible.value = false
      timer = setTimeout(() => {
        visible.value = true
      }, 500)
    }

    function handleCloseModal() {
      if (!props.maskClosable) return
      visible.value = false
    }

    function handleConfirm() {
      emit('confirm')
      if(typeof props.confirmLoading === 'undefined') visible.value = false
    }

    function handleCancel() {
      emit('cancel')
      visible.value = false
    }

    function renderTitle() {
      return slots.title && slots.title()
    }

    function renderFooter() {
      if (slots.footer) return slots.footer()

      return (
        <div class="btns">
          <Button
            type='outline'
            onClick={handleCancel}
          >
            {props.cancelText || '取消'}
          </Button>
          <Button
            type="primary"
            loading={ props.confirmLoading}
            onClick={handleConfirm}
          >
            {props.confirmText || '确认'}
          </Button>
        </div>
      )
    }

    onUnmounted(() => window.clearTimeout(timer))


    return () => (
      <Teleport to="body">
        <div class="u-modal-root">
          <Transition
            onBeforeEnter={(el: HTMLElement) => {
              document.body.style.overflow = 'hidden'
              el.style.transition = 'all .3s cubic-bezier(0.4, 0, 0.2, 1)'
              el.style.top = mouseLocation.y + 'px'
              el.style.left = mouseLocation.x + 'px'
              el.style.transform = 'translate(-50%,-50%) scale(0)'
            }}
            onAfterEnter={(el: HTMLElement) => {
              el.style.top = '50%'
              el.style.left = '50%'
              el.style.transform = 'translate(0,0) scale(1)'
            }}
            onBeforeLeave={(el: HTMLElement) => {
              document.body.style.overflow = ''
              el.style.top = mouseLocation.y + 'px'
              el.style.left = mouseLocation.x + 'px'
              el.style.transform = 'translate(-50%,-50%) scale(0)'
            }}
          >
            {visible.value && <div
              class="u-modal-container"
              ref={modalContainerRef}
            >
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
            }
          </Transition>
          {visible.value && (
            <div
              class="u-modal-mask"
              onClick={handleCloseModal}
            />
          )}
        </div>
      </Teleport>
    )
  }
})

export default Modal
