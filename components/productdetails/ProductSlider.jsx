"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);

  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[70vh] rounded-xl"
      >
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="rounded-xl"
            width={800}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="rounded-xl"
            width={800}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="rounded-xl"
            width={800}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="rounded-xl"
            width={800}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="rounded-xl"
            width={800}
            height={800}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
