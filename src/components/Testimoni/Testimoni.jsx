import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Img1 from "/src/assets/hero-pondok1.jpeg";
import Img2 from "/src/assets/hero-pondok2.jpg";
import Img3 from "/src/assets/hero-pondok3.jpeg";

const Testimoni = () => {
  const testimonies = [
    {
      img: Img1,
      name: "anwar putra",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Img2,
      name: "Jane JOKO",
      text: "Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      img: Img3,
      name: "wes angel",
      text: "Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.",
    },
  ];

  return (
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6 underline">Testimonials Alumni</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {testimonies.map((testimony, index) => (
          <SwiperSlide
            key={index}
            className={`flex justify-center ${index % 2 === 0 ? 'animate-flip-left' : 'animate-flip-right'}`}
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg max-w-xs text-center min-h-[250px]">
              <img
                src={testimony.img}
                alt={testimony.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{testimony.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {testimony.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimoni;
