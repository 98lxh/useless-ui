import { defineComponent, PropType, Transition, computed, ref, onMounted, onUnmounted } from "vue";
import { MessageType } from './message.types'

const Message = defineComponent({
  name: 'UMessage',
  props: {
    id: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<MessageType>,
      default: 'info'
    },
    duration: {
      type: Number,
      default: 2000
    },
    onClose: {
      type: Function as PropType<() => void>,
    },
    offset: {
      type: Number,
      default: 20
    },
    center: Boolean,
  },
  emits: ['destroy'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      'u-message': true,
      [`u-message--${props.type}`]: props.type
    }))

    const styles = computed(() => ({
      top: `${props.offset}px`
    }))

    const visiable = ref(false)
    let timer = null;
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
      <Transition name='zoom-fade' mode="out-in" onBeforeLeave={props.onClose} onAfterLeave={() => emit('destroy')}>
        <div class={classes.value} v-show={visiable.value} style={styles.value}>
          <i class="u-icon-user"></i>
          <span>{props.message}</span>
        </div>
      </Transition>
    )
  }
})

export default Message
