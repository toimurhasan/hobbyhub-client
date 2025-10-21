import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Sample data for banner slides
const bannerData = [
  {
    image: "https://i.ibb.co/7N0Trxy6/priscilla-du-preez-Pu-Zg-Wp-a0-Cs-unsplash-min.jpg",
    heading: "Cozy Reading Corner",
    description: "Enjoy a quiet moment with a good book and a cup of coffee.",
  },
  {
    image: "https://i.ibb.co/N2972b87/debby-hudson-Gk-Zoz3g-VG8c-unsplash-min.jpg",
    heading: "Artistic Tools",
    description: "Explore a variety of paint brushes for your next masterpiece.",
  },
  {
    image: "https://i.ibb.co/dJbFdjbh/engin-akyurt-ZA31-Flg81-RE-unsplash-min.jpg",
    heading: "Vintage Photography",
    description: "Capture moments with a classic Canon AE-1 camera.",
  },
  {
    image: "https://i.ibb.co/Kc8STxkt/impressive-inspirations-6-IMOwz-Pds-Kg-unsplash-min.jpg",
    heading: "Watercolor Hand-Lettering",
    description: "Learn techniques for creating beautiful watercolor letters.",
  },
];

const Banner: React.FC = () => {
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
      className="relative"
    >
      {bannerData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img src={slide.image} alt={slide.heading} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
              <div className="flex flex-col justify-center items-center h-full text-white text-center p-4">
                <h2 className="text-3xl font-bold mb-2">{slide.heading}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
