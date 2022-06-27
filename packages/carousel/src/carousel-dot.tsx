import { defineComponent, inject } from "vue";
import { injectCarouselKey } from "./context";

const CarouselDot = defineComponent({
  name:"UseCarouselDot",
  setup() { 
    const { itemLength, currentIndex, setCurrentIndex } = inject(injectCarouselKey)
    
    return () => (
      <div class="u-carousel-dot">
        {
          Array(itemLength.value).fill(0).map((_,index) => (
            <div
              class={`u-carousel-dot-item ${index === currentIndex.value && 'active'}`}
              onClick={()=>setCurrentIndex(index)}
              key={index}
            />
          ))
        }
      </div>
    )
  }
})


export default CarouselDot
