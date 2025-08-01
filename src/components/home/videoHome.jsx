"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function VideoPlayerHome() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const Information = [
    { title: "تعداد جوایز که ما برده‌ایم", Number: 1234 },
    { title: "تعداد فروش محصولات ما", Number: 3245 },
    { title: "تعداد افراد راضی از همکاری با ما", Number: 475 },
    { title: "پروژه‌های تکمیل‌شده", Number: 20 },
  ];

  return (
    <div   id="portfolio" className="relative ml-[-100] sm:ml-[-10] w-[285px] sm:w-[400px] h-[500px] md:h-[600px] md:w-full  rounded-xl flex justify-center items-center overflow-hidden bg-black">
      {/* ویدیو */}
      <video
        onClick={() => {
          videoRef.current.pause();
          setIsPlaying(false);
        }}
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
        playsInline
      >
        <source src="/videos/videoHome.mp4" type="video/mp4" />
        مرورگر شما از ویدیو پشتیبانی نمی‌کند.
      </video>

      {/* دکمه پلی */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-10">
          <button
            onClick={handlePlay}
            className="bg-white/30 hover:bg-white/50 cursor-pointer transition-all w-[70px] 
            h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-full flex justify-center items-center shadow-lg backdrop-blur-md"
          >
            <Image src="/icons/play.svg" alt="Play Icon" width={35} height={35}
              className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] " />
          </button>
        </div>
      )}

      {/* اطلاعات پایین/شمارنده */}
      
      <div ref={ref} className={`${!isPlaying ? "opacity-100" : "opacity-0"}  absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl
       bg-white/10 backdrop-blur-xl rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white
        z-20 p-4 border border-white/20`}>
        {Information.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center gap-1" dir="rtl">
            <p className="text-xs sm:text-sm md:text-base text-[#eaeaea]">{item.title}</p>
            <p className="text-xs sm:text-sm md:text-base font-bold">
             {inView ? <CountUp end={item.Number} duration={2} /> : 0}

            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
