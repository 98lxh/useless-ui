import Icon from "@useless-ui/icon";
import { defineComponent, inject } from "vue";
import { injectCarouselKey } from "./context";

const CarouselDirector = defineComponent({
  name: "UseCarouselDirector",
  components: { Icon },
  setup() {
    const { setCurrentIndex } = inject(injectCarouselKey)
    const next = setCurrentIndex.bind(null, 'next')
    const prev = setCurrentIndex.bind(null, 'prev')
    
    return () => (
      <>
        <div
          class="u-carousel-director-prev"
          onClick={prev}
        >
          <Icon name="arrow-left" />
        </div>
        <div
          class="u-carousel-director-next"
          onClick={next}
        >
          <Icon name="arrow-right" />
        </div>
      </>
    )
  }
})

export default CarouselDirector
