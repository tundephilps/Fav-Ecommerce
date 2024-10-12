"use client";
import React, { useRef, useState } from "react";
import Bag from "../../images/Bag.png";
import Promo from "../../images/promo.png";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Shoe from "../../images/Shoe.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:px-16 space-y-6">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image src={Promo} className="h-[450px] w-full" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="bg-blue-300 relative w-full p-8 rounded-lg flex flex-row justify-between items-center">
            <div className="space-y-4">
              <h1 className="text-5xl  font-extrabold w-[70%]">
                The best Deals from across the globe
              </h1>
              <p>Flash Sales</p>
            </div>
            <Image src={Bag} className="h-[450px] w-[700px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black relative w-full p-8 rounded-lg flex flex-row justify-between items-center">
            <div className="space-y-4 text-white">
              <h1 className="text-5xl font-extrabold w-[70%] ">
                The best Deals from across the globe
              </h1>
              <p>Flash Sales</p>
            </div>
            <Image src={Shoe} className="h-[450px] w-[700px]" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Hero;
