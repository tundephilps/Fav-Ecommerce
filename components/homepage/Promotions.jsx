"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import Shirts from "../../images/Shirts.png";

import Hat from "../../images/Hat.png";

import Shades from "../../images/Shades.png";

import Flop from "../../images/Flop.png";
import Swiper1 from "../../images/Swiper1.png";

import Swiper2 from "../../images/Swiper2.png";

import Swiper3 from "../../images/Swiper3.png";
import Boxers from "../../images/Boxers.png";

import { FreeMode, Navigation } from "swiper/modules"; // Import Navigation
import Image from "next/image";

export default function Promotions() {
  return (
    <div className="lg:p-16 p-4 relative">
      <h1 className="font-serif font-extrabold text-2xl pb-4">
        Weekly Promotions
      </h1>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Adjust Swiper settings based on viewport width
          640: {
            slidesPerView: 1, // 1 slide per view on screens 640px and below
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // 2 slides per view on screens between 641px and 768px
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides per view on screens 769px and above
            spaceBetween: 30,
          },
        }}
        navigation={true} // Add navigation
        modules={[FreeMode, Navigation]} // Add Navigation module
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-lg relative">
            <Image src={Swiper1} className="h-full w-full object-contain" />
            <div className="text-black absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extralight">
              <h1 className="text-2xl">Most Popular</h1>
              <p className="font-extralight font-serif">Sale</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg relative">
            <Image src={Swiper2} className="h-full w-full object-contain" />
            <div className="text-white absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extralight">
              <h1 className="text-2xl">Shoes & Footwear</h1>
              <p className="font-extralight font-serif">Sale</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg relative">
            <Image src={Swiper3} className="h-full w-full object-contain" />
            <div className="text-black absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extralight">
              <h1 className="text-2xl">Trendy Accessories</h1>
              <p className="font-extralight font-serif">Sale</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-300 h-[300px] p-6 rounded-lg text-center space-y-2">
            <h1 className="text-2xl">Dope Shirts</h1>
            <p className="font-extralight font-serif">For the trendy ones</p>
            <Image
              src={Flop}
              className="object-contain  mx-auto pt-8"
              width={300}
              height={300}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-200 h-[280px] p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <Image
            src={Hat}
            className="object-cover  mx-auto pt-0"
            height={180}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-cyan-200 h-[300px] p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <Image
            src={Shades}
            className="object-contain  mx-auto pt-0"
            height={180}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-purple-200 h-[300px] p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <Image
            src={Boxers}
            className="object-contain mx-auto pt-0"
            height={180}
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
    </div>
  );
}
