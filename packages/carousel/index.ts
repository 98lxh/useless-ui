import { withIntall } from "@useless-ui/utils";
import Carousel from "./src/carousel";
import CarouselItem from "./src/carousel-item";

const UCarousel = withIntall(Carousel)
const UCarouselItem = withIntall(CarouselItem)

export {
  UCarousel,
  UCarouselItem
}
