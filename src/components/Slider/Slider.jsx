import React, { useEffect, useState } from "react";
import "./Slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../SliderCard/SliderCard";
// Import Swiper styles
import "swiper/css";
import axios from "axios";

const Slider = () => {
  useEffect(() => {
    fetchCardsData();
  }, []);
  const [cardsData, setCardsData] = useState([]);

  const fetchCardsData = () => {
    axios
      .get("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
        headers: {
          "X-RapidAPI-Key":
            "611927eb7dmsh56c37624dbffa0bp1103e8jsn24776068c2bb",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      })
      .then((response) => {
        const cardsData = response.data;
        setCardsData(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="swiper-section">
      <div className="container">
        <Swiper
          //  slidesPerView={5}
          //  spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderCard name="All" />
          </SwiperSlide>
          {cardsData.map((data) => (
            <SwiperSlide>
              <SliderCard name={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;

// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'pagination.min.css'

// import required modules
// import { Pagination } from 'swiper/modules';

// const Slider = () => {
//       return (
//         <>
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={10}
//             pagination={{
//               clickable: true,
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 4,
//                 spaceBetween: 40,
//               },
//               1024: {
//                 slidesPerView: 5,
//                 spaceBetween: 50,
//               },
//             }}
//             // modules={[Pagination]}
//             className="mySwiper"
//           >
//             <SwiperSlide>Slide 1</SwiperSlide>
//             <SwiperSlide>Slide 2</SwiperSlide>
//             <SwiperSlide>Slide 3</SwiperSlide>
//             <SwiperSlide>Slide 4</SwiperSlide>
//             <SwiperSlide>Slide 5</SwiperSlide>
//             <SwiperSlide>Slide 6</SwiperSlide>
//             <SwiperSlide>Slide 7</SwiperSlide>
//             <SwiperSlide>Slide 8</SwiperSlide>
//             <SwiperSlide>Slide 9</SwiperSlide>
//           </Swiper>
//         </>
//       );
//     }

// export default Slider
