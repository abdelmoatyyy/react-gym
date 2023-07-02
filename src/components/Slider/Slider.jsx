import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../SliderCard/SliderCard";
// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SliderCard name="All" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Cardio" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Cardio" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Cardio" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Cardio" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Cardio" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Cardio" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Cardio" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Press" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard name="Muscles" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Slider;
