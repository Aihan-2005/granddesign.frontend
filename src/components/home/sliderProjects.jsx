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
    { image: "/akhir/amlak-golstan/w1.jpg", text: "مشاور املاک", id: "1" },
    { image: "/akhir/areshga-jfri/a.jpg", text: "سالن زیبایی  ", id: "2" },
    { image: "/akhir/daftar froosh-astane-amozade/brnjj (2).jpg", text: "دفتر کار   ", id: "3" },
    { image: "/akhir/jana-jafarpoor/1(1).jpg", text: "رستوران جانا  ", id: "4" },
    { image: "/akhir/janbazan-kafe kamlia/1 (5).jpg", text: "کافه کاملیا", id: "5" },
    { image: "/akhir/kargare 5, aqa bozorgi(9)/enhanced-image (26).jpg", text: "منزل آقابزرگی  ", id: "6" },
    { image: "/akhir/kiashar-rahimzade/kiashar (11).jpg", text: " ویلای کیاشهر ", id: "7" },
    { image: "/akhir/nama khararod/hsniiiasl (11).jpg", text: "ویلای خرارود ", id: "8" },
    { image: "/akhir/nilass-lahijan/aslia (2).jpg", text: "ساختمان جانا ", id: "9" },
    { image: "/akhir/PENT/P5.jpg", text: " پنت هاوس هدایت", id: "10" },
    { image: "/akhir/penttttt-bakhshi/b1.jpg", text: "سکوت سبز  ", id: "11" },
    { image: "/akhir/sazesh-kargarrr/komdpsr (10).jpg", text: "ساختمان پرنیان ", id: "12" },
    { image: "/akhir/shohani-jangal3000/sh1.jpg", text: "خانه ای در میان درختان  ", id: "13" },
    { image: "/akhir/siakal-vila-saeidi/saeidiii (9).jpg", text: "ویلای سیاهکل ", id: "14" },
    { image: "/akhir/VAHED/v2.jpg", text:"آپارتمان هدایت ", id: "15" },
    { image: "/akhir/vila jngl2000-mohamadi/2.jpg", text:"ویلای 3000  ", id: "16" },
    { image: "/akhir/vila-saeidi-siakal/saeidiii (1).jpg", text: "ویلای سیاهکل-داخلی ", id: "17" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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
    <div className="py-16 mt-20 text-white" dir="rtl">
      {/* ✨ تیتر بدون بک‌گراند */}
      <div className="w-full text-center space-y-2 mb-10">
        <p className="text-green-800 text-5xl sm:text-6xl font-extrabold drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
          هر پروژه، روایتی از خلاقیت و اصالت
        </p>
        <p className="text-gray-300 text-2xl sm:text-3xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          از گرند دیزاین تا تحقق رؤیاهای معماری
        </p>
      </div>

      {/* 🔹 اسلایدر پروژه‌ها بدون گرادینت */}
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
        className="mySwiper h-[280px] sm:h-[330px] md:h-[380px] lg:h-[420px]"
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
                className="w-full h-full relative group overflow-hidden rounded-[14px] shadow-md block"
              >
                <Image
                  src={image.image}
                  width={400}
                  height={300}
                  alt="project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />

                {/* بدون overlay یا گرادینت */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <p className="text-teal-300 text-lg sm:text-xl font-semibold drop-shadow-lg">
                    {image.text}
                  </p>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
