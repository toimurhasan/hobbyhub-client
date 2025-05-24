import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <Swiper
      id="banner"
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src="https://i.ibb.co/N2972b87/debby-hudson-Gk-Zoz3g-VG8c-unsplash-min.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/7N0Trxy6/priscilla-du-preez-Pu-Zg-Wp-a0-Cs-unsplash-min.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/dJbFdjbh/engin-akyurt-ZA31-Flg81-RE-unsplash-min.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/Kc8STxkt/impressive-inspirations-6-IMOwz-Pds-Kg-unsplash-min.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
