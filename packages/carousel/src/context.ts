import { Ref } from 'vue';
import type { InjectionKey } from 'vue'

interface CarouselProvide {
  currentIndex: Ref<number>,
  itemLength: Ref<number>,
  setCurrentIndex: (index: number) => any
}

export const injectCarouselKey: InjectionKey<CarouselProvide> = Symbol();
