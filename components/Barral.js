import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { lazy } from "react";

function Barral() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t z-20 from-gray-100 to-transparent bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        <div>
          <img
            loading={lazy}
            src="https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading={lazy}
            src="https://m.media-amazon.com/images/I/71y0p2us+bL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading={lazy}
            src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading={lazy}
            src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading={lazy}
            src="https://m.media-amazon.com/images/I/61898Mo3hsL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Barral;
