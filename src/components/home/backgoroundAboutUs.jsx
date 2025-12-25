"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function BackgroundeAboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const Information = [
    { title: "طراحی داخل", number: 800 },
    { title: "طراحی نما", number: 700 },
    { title: "بازسازی خانه", number: 70 },
    { title: "پروژه‌های کامل", number: 250 },
  ];

  return (
    <section className="relative w-full my-32" dir="rtl">
      <div
        className="w-full h-[500px] md:h-[600px] bg-cover bg-center rounded-2xl relative flex items-center"
        style={{
          backgroundImage: `url('${PUBLIC_BASE}/images/background2.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12 text-right ml-auto">
          <p className="text-green-500 text-lg sm:text-2xl font-bold drop-shadow-[1px_1px_0px_#fff] mb-3">
            درباره ما
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-6">
            چرا ما متفاوت هستیم؟
          </h2>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-4 leading-relaxed border-r-4 border-teal-600 pr-3">
            ما با استفاده از پیشرفته‌ترین تکنولوژی‌های روز دنیا، ایده‌هایی نو
            خلق می‌کنیم و هر پروژه را به اثری منحصر‌به‌فرد و مدرن تبدیل
            می‌کنیم.
          </p>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
            تیم ما متشکل از طراحان حرفه‌ای و باتجربه است که سال‌ها در کنار
            مشتریان، رویای آن‌ها را به واقعیت تبدیل کرده‌اند.
          </p>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            ما فراتر از طراحی، سبک زندگی جدیدی می‌سازیم؛ جایی که زیبایی، کارایی
            و راحتی در هر جزئیات فضا حضور دارد.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="w-[95%] md:w-[80%] mx-auto -mt-10 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {Information.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white">
              {item.title}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
              {inView ? <CountUp end={item.number} duration={2} /> : 0}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
