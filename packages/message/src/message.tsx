import { defineComponent, PropType, Transition, computed, ref, onMounted, onUnmounted } from "vue";
import { MessageType } from './message.types'


const MessageProps = {
  id: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<MessageType>,
    default: 'info'
  },
  duration: {
    type: Number,
    default: 1000
  },
  onClose: {
    type: Function as PropType<() => void>,
  },
  offset: {
    type: Number,
    default: 20
  },
  center: Boolean,
}

const Message = defineComponent({
  name: 'UMessage',
  props: MessageProps,
  emits: ['destroy'],
  setup(props, { emit }) {
    const visiable = ref(false)
    let timer: NodeJS.Timeout = null;

    const classes = computed(() => ({
      'u-message': true,
      [`u-message--${props.type}`]: props.type
    }))

    const styles = computed(() => ({
      top: `${props.offset}px`
    }))

    const messageIcon = computed(() => {
      return `u-icon-${props.type}`
    })

    const startTimer = () => {
      timer = setTimeout(() => {
        visiable.value = false
      }, props.duration)
    }

    onMounted(() => {
      visiable.value = true
      startTimer();
    })

    onUnmounted(() => {
      clearTimeout(timer)
      timer = null
    })


    return () => (
      <Transition
        name='zoom-fade'
        mode="out-in"
        onBeforeLeave={props.onClose}
        onAfterLeave={() => emit('destroy')}
      >
        <div class={classes.value} v-show={visiable.value} style={styles.value}>
          <i class={messageIcon.value}></i>
          <span>{props.content}</span>
        </div>
      </Transition>
    )
  }
})

export default Message
