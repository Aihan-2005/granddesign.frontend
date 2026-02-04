"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function NewProjectsHome() {
  const data = [
    {
      text: "طراحی نمای ساختمان",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-building-80.png`,
    },
    {
      text: "طراحی داخلی ساختمان",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-room-64.png`,
    },
    {
      text: "طراحی کابینت",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-cabinet-64.png`,
    },
    {
      text: "طراحی محوطه و حیاط",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-inland-50.png`,
    },
    {
      text: "دکوراسیون",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-home-decoration-64.png`,
    },
    {
      text: "پیمانکاری نظارت و اجرا",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-administration-64.png`,
    },
    {
      text: "تور مجازی vr360",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-vr-100.png`,
    },
    {
      text: "انیمیشن و کلیپ",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-clip-96.png`,
    },
    {
      text: "از فکر و ایده تا کلید",
      icon: `http://ftp.granddesign.ir/images/newprojects/icons8-idea-80.png`,
    },
  ];

  return (
    <div className="w-full text-white my-8" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="my-6 text-center"
      >
        <p className="text-2xl sm:text-3xl font-bold text-green-300">خدمات ما</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 
            items-center sm:items-center justify-center
            bg-[#8c8c8c74] rounded-2xl 
            p-4 sm:p-5 md:p-6
            min-h-[140px] sm:min-h-[130px] md:min-h-[140px]
            hover:bg-[#2a2a2a] hover:shadow-lg border-2
            transition-all duration-300"
          >
            <div className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] 
            flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={item.icon}
                alt={item.text}
                fill
                className="object-contain group-hover:scale-110 transition-all duration-700 p-1"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md"></div>
            </div>

            <div className="flex flex-col gap-2 flex-1 min-w-0 text-center sm:text-right">
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg 
              opacity-90 leading-relaxed break-words px-1">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
