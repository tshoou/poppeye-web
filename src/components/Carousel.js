import * as React from "react";
import 'tw-elements';
import picProduct1 from "../assets/picProduct1.png" 
import picProduct2 from "../assets/picProduct2.png" 
import picProduct3 from "../assets/picProduct3.png" 
const Carousel = () => {
  return(
    <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src={picProduct1}
        class="block w-full rounded-l-[50px]"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src={picProduct2}
        class="block w-full rounded-l-[50px]"
        alt="Camera"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src={picProduct3}
        class="block w-full rounded-l-[50px]"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>
  )
}
export default Carousel