"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "طراحی واحد های مسکونی",
    text: "متفاوت ترین ایده ها با ما ممکن میشود",
    icon: "1",
  },
  {
    title: "طراحی واحد های اداری",
    text: "ترکیبی از عملکرد و زیبایی",
    icon: "2",
  },
  {
    title: "طراحی دکوراسیون داخلی",
    text: "سبک شما، امضای ما",
    icon: "3",
  },
  {
    title: "نوسازی و بازسازی",
    text: "حیات دوباره به فضاهای قدیمی",
    icon: "4",
  },
  {
    title: "مدیریت پروژه",
    text: "برنامه‌ریزی حرفه‌ای تا اجرا",
    icon: "5",
  },
];

export default function ServicesSection() {
 const sliderRef = useRef(null);

  const scroll = (dir) => {
  const scrollAmount = dir === "left" ? -400 : 400;
  sliderRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
};

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
      }
    }, 4000); // هر 4 ثانیه اسکرول کنه

    return () => clearInterval(interval); // جلوگیری از memory leak
  }, []);

  return (
    <section className="relative px-[50px] py-28 bg-[#2d2d2d]" id="services">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl text-green-500 font-bold mb-4">خدمات ما</h2>
        <p className="text-gray-300 text-lg">
          طیف وسیعی از خدمات معماری و طراحی با بهترین کیفیت و خلاقیت
        </p>
      </motion.div>

      {/* دکمه‌های اسکرول */}
      <button
        onClick={() => scroll("left")}
        className="flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* بخش اسکرول‌پذیر */}
      <div
  ref={sliderRef}
  className="overflow-x-auto scroll-smooth no-scrollbar"
>
        <div className="flex gap-6 w-max">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] bg-[#444] hover:bg-[#1f1f1f] text-white p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4 transition-all duration-300"
            >
              <Image
                src={`/images/newprojects/se-icon${item.icon}.png`}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}