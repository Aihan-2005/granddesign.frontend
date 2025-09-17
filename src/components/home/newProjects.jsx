
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NewProjectsHome() {
  const data = [
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "1" },
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "2" },
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "3" },
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "4" },
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "5" },
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "6" },
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "7" },
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "8" },
    { text: 'همراه با هوشمصنوعیی نمای خانه', icon: "9" },
  ];

  return (
    <div className="w-full text-white my-8" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="my-6 text-center "
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
            className="relative group flex gap-6 items-center bg-[#8c8c8c74] rounded-2xl p-6 hover:bg-[#2a2a2a] hover:shadow-lg border-2 transition-all duration-300"
          >
           
            <div className="relative w-[70px] h-[70px] overflow-hidden rounded-md">
              <Image
                src={`/images/newprojects/se-icon${item.icon}.png`}
                alt={item.title}
                fill
                className="object-contain group-hover:scale-110 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md"></div>
            </div>

            
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm md:text-lg font-semibold">{item.title}</p>
              <p className="text-white text-sm md:text-base opacity-80">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
