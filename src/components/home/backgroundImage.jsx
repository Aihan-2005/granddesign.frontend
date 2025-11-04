"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BackgroundImage() {
  const slides = [
    {
      image: "/images/background11.jpg",
      title: "خانه‌ای مدرن، رویایی و منحصر به فرد",
      description: "تجربه‌ای نو با طراحی‌های خلاقانه و حرفه‌ای",
      button: "همین اکنون شروع کنید",
    },
    {
      image: "/images/background12.jpg",
      title: "فروش ویژه وسایل خانه",
      description: "بهترین وسایل تزئینی و کاربردی برای زیباسازی فضای خانه و حیاط",
      button: "مشاهده محصولات",
    },
  ];

  return (
    <div className="w-full h-screen mt-0 relative flex justify-center items-end my-3 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop={true}
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

              {/* متن روی هر اسلاید */}
              <div className="absolute top-[43%] md:top-[40%] right-[10%] text-right w-[90%] md:w-[90%] h-[60%] md:h-[50%] flex justify-end items-start p-0 md:p-1 z-10">
                <div>
                  <p className="text-xl sm:text-3xl md:text-5xl my-1 text-white font-bold">
                    {slide.title}
                  </p>
                  <p className="text-4xl  sm:text-base md:text-lg my-2  text-gray-900">
                    {slide.description}
                  </p>
                  <button className="w-[170px] text-sm cursor-pointer my-2 text-[14px] py-3 bg-green-600 text-white rounded-lg transition duration-200 hover:scale-[1.1]">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
