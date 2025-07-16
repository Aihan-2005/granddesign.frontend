"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function SliderProjects() {
  const Images = [
    { image: "01", text: "پروژه کاری 1" },
    { image: "02", text: "پروژه کاری 2" },
    { image: "03", text: "پروژه کاری 3" },
    { image: "04", text: "پروژه کاری 4" },
    { image: "01", text: "پروژه کاری 1" },
    { image: "02", text: "پروژه کاری 2" },
    { image: "03", text: "پروژه کاری 3" },
  ];

  return (
    <div className="py-5">
      <div className='w-[100%] py-2 flex flex-col sm:flex-row
       justify-between items-center gap-4' dir='rtl'>
   <div> <p className='text-[white] text-sm sm:text-3xl font-bold'>جدید ترین کار ها </p>
     <p className='text-xl sm:text-2xl font-bold text-[white]'>پروژه های انجام شده </p></div>
             <button className='text-[white] bg-green-500 rounded-lg hover:scale-[1.1] 
              duration-300 cursor-pointer h-[50px] px-[20px] text-sm sm:text-base'> شروع کار</button>

        </div>
      <Swiper
        scrollbar={{ hide: true }}
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        grabCursor={true}
        modules={[Scrollbar]}
        className="mySwiper h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] "
      >
        {Images.map((image, index) => (
<SwiperSlide key={index}>
  <div className="w-full h-full relative group overflow-hidden rounded-lg shadow-md">
    <Image
      src={`/images/projectsImage/protfolio-img${image.image}.png`}
      width={400}
      height={300}
      alt="project"
      className="w-full h-full object-cover"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black/80 translate-y-full group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center text-white text-lg font-bold">
      {image.text}
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
