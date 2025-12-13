"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Team() {
  const teamMembers = [
    { name: "علی کمالی", describtion: "طراحی خونه‌مون دقیقاً همون چیزی شد که همیشه تو ذهنمون بود. هم خلاقیت داشتید هم دقت بالا. تجربه فوق‌العاده‌ای بود." },
    { name: "محمد سهیلی", describtion: "از وقتی طراحی جدید رو انجام دادید خونه‌مون بزرگ‌تر و روشن‌تر به نظر میاد. دقیقاً همونی شد که می‌خواستیم." },
    { name: "امیر عباسی", describtion: "کیفیت اجرا و طراحی فراتر از انتظارم بود. تیم بسیار خوش‌قول و حرفه‌ای. واقعاً عالی بودید." },
    { name: "حسین پورمخبر", describtion: "هر گوشه از خونه تبدیل به یک اثر هنری شده. حس فوق‌العاده‌ای داریم به فضا." },
    { name: "مهدی راد", describtion: "زیبا. شیک. متفاوت. بدون اغراق بهترین تیمی بودید که تا حالا باهاش کار کردم." },
    { name: "نیما شریفی", describtion: "فراتر از انتظار! هر روز که وارد خونه میشم حس تازه‌ای پیدا می‌کنم. واقعاً ممنونم." },
    { name: "ساناز محمدی", describtion: "ترکیب رنگ‌ها و نورپردازی واقعاً هنرمندانه بود. کارتون عالیه." },
    { name: "سحر مرادی", describtion: "فضای خونه‌مون با طراحی جدید فوق‌العاده دلنشین‌تر شده. خیلی حرفه‌ای کار کردید." },
    { name: "آرین کریمی", describtion: "خلاقیت و دقت شما واقعاً تحسین‌برانگیزه. همه چیز عالی پیش رفت." },
    { name: "مهسا محسنی", describtion: "به شدت خوش‌قول، حرفه‌ای و دقیق. نتیجه کار فوق‌العاده بود." },
    { name: "امیررضا نوری", describtion: "از انتخاب‌هامون کاملاً راضی هستیم. ترکیب طراحی و اجرا واقعاً بی‌نقص بود." },
    { name: "هلیا جمالی", describtion: "با این طراحی جدید هرروز یه انرژی مثبت جدید می‌گیرم. واقعاً ممنونم!" },
    { name: "یوسف احمدی", describtion: "همه چیز سریع، دقیق و تمیز انجام شد. از نتیجه نهایی خیلی راضی هستم." },
  ];

  const [index, setIndex] = useState(0);

  // اتومات هر 4 ثانیه عوض شود
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const member = teamMembers[index];

  return (
    <div className="mt-24 mb-32"> {/* فاصله از بالا کم + فاصله از پایین زیاد */}
      <h1 className="text-white text-center text-3xl font-bold">
        نظرات دیگران درباره ما
      </h1>

      <div
        onClick={handleClick}
        className="
        cursor-pointer w-full max-w-[90%] sm:max-w-[550px] md:max-w-[800px]
        mx-auto relative 
        bg-gradient-to-r from-[#5c5c5c] via-[#3c3c3c] to-[#1f1f1f]
        p-10 rounded-3xl shadow-lg border-[1.5px] border-[#22ff80b3]
        hover:shadow-xl hover:shadow-[#5d5d5d]
        transition-all duration-500 ease-in-out
        mt-10 text-white min-h-[260px] sm:min-h-[300px]
        flex flex-col justify-center
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
          >
            {/* آیکون آدمک جدید (outline – شیک و مدرن) */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 shadow-xl flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-90"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3 7.5 4.8 7.5 7.5 9.3 12 12 12zm0 1.5c-3.3 0-9 1.7-9 5v1.5h18V18.5c0-3.3-5.7-5-9-5z"
                  />
                </svg>
              </div>
            </div>

            {/* متن نظر */}
            <h2 className="text-center leading-8 text-lg sm:text-xl font-light px-4">
              {member.describtion}
            </h2>

            {/* نام */}
            <p className="text-center text-sm sm:text-base mt-6 font-semibold text-green-300">
              {member.name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
