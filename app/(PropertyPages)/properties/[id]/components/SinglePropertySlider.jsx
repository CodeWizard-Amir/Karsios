"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import SingleProperty from "@/app/(PropertyPages)/components/SingleProperty";
const SinglePropertySlider = ({ property }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      className='my-5'
      spaceBetween={15}
      slidesPerView={4}
      speed={1000}
      loop={true}
      autoplay={{ delay: 2500 }}
    >
      {property.map((prop) => (
        <SwiperSlide>
          <SingleProperty property={prop} height={"h-[380px]"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SinglePropertySlider;
