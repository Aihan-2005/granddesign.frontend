"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BackgroundImage() {
  const slides = [
    {
      image: "/images/background11.jpg",
      title: "خانه‌ای مدرن، رویایی و منحصر به‌فرد",
      description: "زیبایی و خلاقیت را با طراحی‌های خاص و تجربه‌ای فراتر از سبک‌های معمول لمس کن.",
      button: "همین اکنون شروع کنید",
    },
    {
      image: "/images/background12.jpg",
      title: "فروش ویژه طراحی و دکور خانه",
      description: "کالکشن منحصربه‌فرد وسایل تزئینی و کاربردی برای خلق فضایی پرانرژی و دل‌نشین.",
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

<<<<<<< HEAD
              {/* متن روی هر اسلاید */}
              <div className="absolute top-[43%] md:top-[50%] right-[10%] text-right w-[90%] md:w-[90%] h-[60%] md:h-[50%] flex justify-end items-start p-0 md:p-1 z-10">
                <div>
                  <p className="text-xl sm:text-3xl md:text-5xl my-1 text-white font-bold">
                    {slide.title}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg my-1 text-[#e4e4e4]">
                    {slide.description}
                  </p>
                  <a
                  href="tel:09333840658"
                   className="w-[170px] text-sm cursor-pointer my-2 text-[14px] py-3 bg-green-600 text-white rounded-lg transition duration-200 hover:scale-[1.1]">
                    {slide.button}
                  </a>
                </div>
=======
              {/* متن روی تصویر */}
              <div className="absolute top-[45%] md:top-[42%] right-[8%] text-right flex flex-col items-end z-10">
                <p
                  className="text-white font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]
                  text-[24px] sm:text-[36px] md:text-[48px] leading-tight"
                >
                  {slide.title}
                </p>

                <p
                  className="text-gray-100 font-light text-[14px] sm:text-[16px] md:text-[18px] my-3 max-w-[500px] leading-relaxed"
                >
                  {slide.description}
                </p>

                <button
                  className="w-[160px] py-2 text-[13px] font-medium text-white rounded-md
                  bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300
                  hover:scale-[1.07] hover:shadow-lg"
                >
                  {slide.button}
                </button>
>>>>>>> 10dc4e9dbb197a9eeaa1a222c75fc51f3d4edb9d
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
