"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function BackgroundImage() {
  const slides = [
    {
      image: `${PUBLIC_BASE}/images/background11.jpg`,
      title: "خانه‌ای مدرن، رویایی و منحصر به‌فرد",
      description:
        "زیبایی و خلاقیت را با طراحی‌های خاص و تجربه‌ای فراتر از سبک‌های معمول لمس کن.",
      button: "همین اکنون شروع کنید",
    },
    {
      image: `${PUBLIC_BASE}/images/background12.jpg`,
      title: "فروش ویژه طراحی و دکور خانه",
      description:
        "کالکشن منحصربه‌فرد وسایل تزئینی و کاربردی برای خلق فضایی پرانرژی و دل‌نشین.",
      button: "مشاهده محصولات",
    },
  ];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        className="w-full h-full absolute top-0 left-0 z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />

              {/* متن روی اسلاید */}
              <div className="absolute top-[45%] md:top-[42%] right-[8%] text-right flex flex-col items-end z-10">
                <p
                  className="text-white font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]
                  text-[24px] sm:text-[36px] md:text-[48px] leading-tight"
                >
                  {slide.title}
                </p>

                <p className="text-gray-100 font-light text-[14px] sm:text-[16px] md:text-[18px] my-3 max-w-[500px] leading-relaxed">
                  {slide.description}
                </p>

                <a
                  href="tel:09333840658"
                  className="w-[160px] py-2 text-[13px] font-medium text-white rounded-md
                  bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300
                  hover:scale-[1.07] hover:shadow-lg text-center"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
