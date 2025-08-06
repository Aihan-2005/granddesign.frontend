"use client";
import Image from "next/image";
import { Rotate3d,ChevronLeft , ChevronRight  } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "خانه مدرن شماره 1",
    image: "/images/home1.jpg",
    link: "https://vr360-link1.com",
  },
  {
    id: 2,
    title: "ویلای لوکس شماره 2",
    image: "/images/home2.jpg",
    link: "https://vr360-link2.com",
  },
  {
    id: 3,
    title: "آپارتمان مینیمال شماره 3",
    image: "/images/home3.jpg",
    link: "https://vr360-link3.com",
  },
  {
    id: 4,
    title: "خانه ساحلی شماره 4",
    image: "/images/home4.jpg",
    link: "https://vr360-link4.com",
  },
  {
    id: 5,
    title: "ویلای کوهستانی شماره 5",
    image: "/images/home5.jpg",
    link: "https://vr360-link5.com",
  },
];

export default function VR360() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (sliderRef.current) {
      const scrollAmount = dir === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className=" relative  px-[50px] py-28 bg-gradient-to-l from-gray-700  to-gray-600 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl text-green-700 font-bold mb-5">
          تور های مجازی
        </h2>
        <p className="text-gray-900  text-lg">
          با تورهای 360 درجه ما خانه‌ها را قبل از بازدید حضوری ببینید ✨
        </p>
      </motion.div>
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        ref={sliderRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-6 w-max">
          {projects.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full  group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <a
                href={item.link}
                target="_blank"
                className=" md:hidden absolute top-4 right-4 bg-white text-black text-sm font-semibold  px-3 py-1 rounded-lg shadow-md"
              >
                {item.title}
              </a>
              <a
                href={item.link}
                target="_blank"
                className="hidden md:flex absolute  inset-0 flex-col items-center justify-center gap-3 text-center opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <Rotate3d className="w-10 h-10 text-green-300" />
                <span className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold text-sm shadow-md">
                  مشاهده  {item.title}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
