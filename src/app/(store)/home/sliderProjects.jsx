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
      <div className='w-[100%] py-2 flex justify-between items-center ' dir='rtl'>
   <div> <p className='text-[white]'>جدید ترین کار ها </p>  <p className='text-[30px] text-[white]'>پروژه های انجام شده </p></div>
             <button className='text-[white] bg-green-500 rounded-lg hover:scale-[1.1] cursor-pointer h-[50px] px-[20px]'> شروع کار</button>

        </div>
      <Swiper
        scrollbar={{ hide: true }}
        slidesPerView={4}
        spaceBetween={20}
        modules={[Scrollbar]}
        className="mySwiper h-[400px]"
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
