import { App } from "vue";
import Carousel from "./src/carousel";
import CarouselItem from "./src/carousel-item";

type SFCWithInstall<T> = T & { install(app: App): void }

const withIntall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

const UCarousel = withIntall(Carousel)
const UCarouselItem = withIntall(CarouselItem)

export {
  UCarousel,
  UCarouselItem
}
