import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img src="/one.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/two.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/three.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/four.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
