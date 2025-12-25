"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function NewProjectsHome() {
  const data = [
    {
      text: "طراحی نمای ساختمان",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-building-80.png`,
    },
    {
      text: "طراحی داخلی ساختمان",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-room-64.png`,
    },
    {
      text: "طراحی کابینت",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-cabinet-64.png`,
    },
    {
      text: "طراحی محوطه و حیاط",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-inland-50.png`,
    },
    {
      text: "دکوراسیون",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-home-decoration-64.png`,
    },
    {
      text: "پیمانکاری نظارت و اجرا",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-administration-64.png`,
    },
    {
      text: "تور مجازی vr360",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-vr-100.png`,
    },
    {
      text: "انیمیشن و کلیپ",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-clip-96.png`,
    },
    {
      text: "از فکر و ایده تا کلید",
      icon: `${PUBLIC_BASE}/images/newprojects/icons8-idea-80.png`,
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
        <p className="text-3xl font-bold text-green-300">خدمات ما</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group flex gap-6 items-center bg-[#8c8c8c74]
            rounded-2xl p-6 hover:bg-[#2a2a2a] hover:shadow-lg border-2
            transition-all duration-300"
          >
            <div className="relative w-[70px] h-[70px] overflow-hidden rounded-md">
              <Image
                src={item.icon}
                alt={item.text}
                fill
                className="object-contain group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md"></div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-white text-sm md:text-base opacity-80">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
