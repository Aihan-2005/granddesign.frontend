import { useRef, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function BackgroundeAboutUs() {
  const [isPlaying, setIsPlaying] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const Information = [
    { title: "طراحی داخل", number: 5321 },
    { title: "طراحی نما", number: 3300 },
    { title: "بازسازی خانه", number: 1900 },
    { title: "پروژه های  کامل", number: 2421 },
  ];

  return (
    <div
      className="w-full h-auto my-8 relative flex flex-col md:flex-row justify-center items-end "
      dir="rtl"
    >
      <img
        src="images/aboutimage.png"
        alt="About Us"
        className="w-full md:w-[40%] h-full object-cover"
      />
      <div className="w-full md:w-[60%] h-full flex justify-between md:items-start items-center  md:mb-40">
        <div className="w-full text-right px-8 relative mb-5 py-2 md:mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl my-1 text-green-500 font-bold py-3 drop-shadow-[2px_2px_0px_#fff]">
            درباره ما
          </p>
          <p className="text-4xl my-1 text-[#e4e4e4] py-3">
            چرا ما متفاوت هستیم؟
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl w-full pl-2  py-5 md:pl-[10%] border-r-3 px-2 border-r-teal-700">
            ما با استفاده از پیشرفته‌ترین تکنولوژی‌های روز دنیا، ایده‌هایی نو خلق می‌کنیم و هر پروژه را به اثری منحصر‌به‌فرد و مدرن تبدیل می‌کنیم.
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl w-full pl-2  py-5 md:pl-[10%] ">
            تیم ما متشکل از طراحان حرفه‌ای و باتجربه است که سال‌ها در کنار مشتریان، رویای آن‌ها را به واقعیت تبدیل کرده‌اند.
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl w-full pl-2  py-4 md:pl-[10%] ">
ما فراتر از طراحی، سبک زندگی جدیدی می‌سازیم؛ جایی که زیبایی، کارایی و راحتی در هر جزئیات فضا حضور دارد.
          </p>
        </div>
      </div>
      <div
        ref={ref}
        className={`${
          !isPlaying ? "opacity-100" : "opacity-0"
        } absolute bottom-0 md:left-40  mx-auto md:mx-0
            w-full md:w-[600px] max-w-6xl bg-white/10 backdrop-blur-xl
            rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            text-white z-20 p-3  border border-white/20`}
      >
        {Information.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center gap-1"
            dir="rtl"
          >
            <p className="text-xs sm:text-sm md:text-base font-bold">
              {item.title}
            </p>
            <p className="text-sm text-green-500 sm:text-sm md:text-base font-bold">
              {inView ? <CountUp end={item.number} duration={2} /> : 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
