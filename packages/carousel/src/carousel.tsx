import { computed, defineComponent, onBeforeUnmount, onMounted, provide, ref } from "vue";
import CarouselDirector from "./carousel-director";
import CarouselDot from "./carousel-dot";
import { injectCarouselKey } from "./context";

const carouselProps = {
  autoplay: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3000
  },
  initial: {
    type: Number,
    default: 0
  },
  hasDot: {
    type: Boolean,
    default: true
  },
  hasDirector: {
    type: Boolean,
    default: true
  }
}

const Carousel = defineComponent({
  name: "UseCarousel",
  props: carouselProps,
  setup(props, { slots }) {
    let timer: NodeJS.Timeout | null = null
    const currentIndex = ref(props.initial)
    const itemLength = computed(() => slots.default()[0].children.length as number)

    function setCurrentIndex(direction: 'next' | 'prev' | number) {
      switch (direction) {
        case 'next':
          currentIndex.value += 1
          if (currentIndex.value === itemLength.value) currentIndex.value = 0;
          break
        case 'prev':
          currentIndex.value -= 1
          if (currentIndex.value === -1) currentIndex.value = itemLength.value - 0
          break
        default:
          currentIndex.value = direction
          break
      }
    }

    function autoplay() {
      if (!props.autoplay) return
      timer = setInterval(() => setCurrentIndex('next'), props.duration)
    }

    function stop() {
      window.clearInterval(timer)
      timer = null
    }


    onMounted(() => {
      props.autoplay && autoplay()
    })

    onBeforeUnmount(() => stop())

    provide(injectCarouselKey, {
      currentIndex,
      itemLength,
      setCurrentIndex
    })

    return () => (
      <div class="u-carousel">
        <div
          class="u-carousel__inner"
          onMouseenter={() => timer && stop()}
          onMouseleave={() => props.autoplay && autoplay()}
        >
          {slots.default && slots.default()}
          {props.hasDot && <CarouselDot />}
          {props.hasDirector && <CarouselDirector /> }
        </div>
      </div>
    )
  },
})


export default Carousel
