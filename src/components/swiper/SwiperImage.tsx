"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function SwiperImage() {
  return (
    <div className="relative mx-auto max-w-[300px] sm:max-w-[500px] [&_.swiper-button-prev]:focus:outline-none [&_.swiper-button-next]:focus:outline-none overflow-hidden">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        loop={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <Image
              src="/carousel-image.svg"
              alt="about-image"
              fill
              className="object-contain drop-shadow-three"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <Image
              src="/carousel-image.svg"
              alt="about-image"
              fill
              className="object-contain drop-shadow-three"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <Image
              src="/carousel-image.svg"
              alt="about-image"
              fill
              className="object-contain drop-shadow-three"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <Image
              src="/carousel-image.svg"
              alt="about-image"
              fill
              className="object-contain drop-shadow-three"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <Image
              src="/carousel-image.svg"
              alt="about-image"
              fill
              className="object-contain drop-shadow-three"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <Image
              src="/carousel-image.svg"
              alt="about-image"
              fill
              className="object-contain drop-shadow-three"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
