import { defineComponent, getCurrentInstance, inject, reactive, ref, Transition } from "vue";
import { injectCarouselKey } from "./context";

const CarouselItem = defineComponent({
  name: "UseCarouselItem",
  setup(_, { slots }) {
    const { currentIndex } = inject(injectCarouselKey)
    const instance = getCurrentInstance()
    const itemInedx = ref((instance.vnode.key as number) - 1)

    return () => (
      <Transition name="carousel">
        <div class="u-carousel-item" v-show={itemInedx.value === currentIndex.value}>
          {slots.default && slots.default()}
        </div>
      </Transition>
    )
  },
})


export default CarouselItem
