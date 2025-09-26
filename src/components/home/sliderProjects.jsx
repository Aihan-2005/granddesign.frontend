"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

export default function SliderProjects() {
  const Images = [
    { image: "01", text: "پروژه کاری 1", id: "1" },
    { image: "02", text: "پروژه کاری 2", id: "2" },
    { image: "03", text: "پروژه کاری 3", id: "3" },
    { image: "04", text: "پروژه کاری 4", id: "4" },
    { image: "01", text: "پروژه کاری 1", id: "5" },
    { image: "02", text: "پروژه کاری 2", id: "6" },
    { image: "03", text: "پروژه کاری 3", id: "7" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15, 
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="py-5 mt-30">
      <div
        className="w-full py-2 flex justify-between items-center gap-4"
        dir="rtl"
      >
        <div className="text-center space-y-3">
  <p className="text-green-900 text-5xl sm:text-6xl font-extrabold">
     پروژه‌ها اخیر
  </p>
  <p className="text-white/100 text-2xl sm:text-3xl font-semibold">
    جدیدترین شاهکارها
  </p>
</div>

      </div>

      <Swiper
        scrollbar={{ hide: true }}
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        grabCursor={true}
        modules={[Scrollbar]}
        className="mySwiper h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
      >
        {Images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="w-full h-full"
            >
              <Link
                href={`/projects/${image.id}`}
                className="w-full h-full relative group overflow-hidden rounded-lg shadow-md block"
              >
                <Image
                  src={`/images/projectsImage/protfolio-img${image.image}.png`}
                  width={400}
                  height={300}
                  alt="project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/80 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center text-center text-white text-lg font-bold">
                  {image.text}
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
