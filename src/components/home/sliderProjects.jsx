"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function SliderProjects() {
  const Images = [
    { image: `http://ftp.granddesign.ir/akhir/amlak-golstan/w1.jpg`, text: "مشاور املاک", id: "1" },
    { image: `http://ftp.granddesign.ir/akhir/areshga-jfri/a.jpg`, text: "سالن زیبایی", id: "2" },
    { image: `http://ftp.granddesign.ir/akhir/daftar froosh-astane-amozade/brnjj (2).jpg`, text: "دفتر کار", id: "3" },
    { image: `http://ftp.granddesign.ir/akhir/jana-jafarpoor/1(1).jpg`, text: "رستوران جانا", id: "4" },
    { image: `http://ftp.granddesign.ir/akhir/janbazan-kafe kamlia/1 (5).jpg`, text: "کافه کاملیا", id: "5" },
    { image: `http://ftp.granddesign.ir/akhir/kargare 5, aqa bozorgi(9)/enhanced-image (26).jpg`, text: "منزل آقابزرگی", id: "6" },
    { image: `http://ftp.granddesign.ir/akhir/kiashar-rahimzade/kiashar (11).jpg`, text: "ویلای کیاشهر", id: "7" },
    { image: `http://ftp.granddesign.ir/akhir/nama khararod/hsniiiasl (11).jpg`, text: "ویلای خرارود", id: "8" },
    { image: `http://ftp.granddesign.ir/akhir/nilass-lahijan/aslia (2).jpg`, text: "ساختمان جانا", id: "9" },
    { image: `http://ftp.granddesign.ir/akhir/PENT/P5.jpg`, text: "پنت هاوس هدایت", id: "10" },
    { image: `http://ftp.granddesign.ir/akhir/penttttt-bakhshi/b1.jpg`, text: "سکوت سبز", id: "11" },
    { image: `http://ftp.granddesign.ir/akhir/sazesh-kargarrr/komdpsr (10).jpg`, text: "ساختمان پرنیان", id: "12" },
    { image: `http://ftp.granddesign.ir/akhir/shohani-jangal3000/sh1.jpg`, text: "خانه‌ای در میان درختان", id: "13" },
    { image: `http://ftp.granddesign.ir/akhir/siakal-vila-saeidi/saeidiii (9).jpg`, text: "ویلای سیاهکل", id: "14" },
    { image: `http://ftp.granddesign.ir/akhir/VAHED/v2.jpg`, text: "آپارتمان هدایت", id: "15" },
    { image: `http://ftp.granddesign.ir/akhir/vila jngl2000-mohamadi/2.jpg`, text: "ویلای 3000", id: "16" },
    { image: `http://ftp.granddesign.ir/akhir/vila-saeidi-siakal/saeidiii (1).jpg`, text: "ویلای سیاهکل (داخلی)", id: "17" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="py-16 mt-20 text-white" dir="rtl">
      <div className="w-full text-center space-y-3 mb-12 px-4">
        <p className="text-teal-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)] leading-tight">
          هر پروژه، روایتی از خلاقیت و اصالت
        </p>
        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] leading-relaxed">
          از گرند دیزاین تا تحقق رؤیاهای معماری
        </p>
      </div>

      <Swiper
        scrollbar={{ hide: true }}
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.3, spaceBetween: 16 },
          480: { slidesPerView: 1.6, spaceBetween: 18 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        grabCursor
        modules={[Scrollbar]}
        className="mySwiper h-[340px] sm:h-[360px] md:h-[400px] lg:h-[420px]"
      >
        {Images.map((image, index) => (
          <SwiperSlide key={image.id}>
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
                className="w-full h-full relative group overflow-hidden rounded-[14px] shadow-lg block"
              >
                <Image
                  src={image.image}
                  width={400}
                  height={300}
                  {...(index === 0 ? { priority: true } : { loading: "lazy" })}
                  alt={image.text}
                  sizes="(max-width:640px) 90vw, (max-width:768px) 45vw, (max-width:1024px) 30vw, 25vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-teal-300 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] px-4 text-center"
                  >
                    {image.text}
                  </motion.p>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
