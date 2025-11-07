"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setStatus("");

    try {
      const res = await fetch("/api/save-number", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setStatus("success");
        setNumber("");
      } else {
        setMessage(data.message);
        setStatus("error");
      }

      // ✅ محو پیام بعد از ۴ ثانیه
      setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 4000);
    } catch {
      setMessage("❌ خطای غیرمنتظره رخ داد.");
      setStatus("error");
      setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 4000);
    }
  };

  return (
    <div>
      <footer
        className="bg-black mt-[10px] text-gray-300 py-5 px-6 w-[100%] mx-auto grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center 
        items-center text-center md:text-start"
      >
        {/* ستون 1 - خبرنامه */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg mb-2 ml-3">
            تخفیف‌ها و خبرهای ویژه رو از دست نده
          </h3>

          {/* فرم ثبت شماره */}
          <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
            <input
              type="text"
              placeholder="شماره خود را وارد کنید"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded-md px-3 py-2 
              h-[50px] w-[200px] text-gray-200 placeholder-gray-500 
              focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md h-[50px] w-[100px] 
              font-semibold hover:bg-green-600 transition"
            >
              عضو شدن
            </button>
          </form>

          {/* پیام لحظه‌ای */}
          {message && (
            <p
              className={`mt-2 font-semibold ml-3 ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          <div className="flex items-center ml-10">
            <Image
              src="/images/20241027_175739_0000.png"
              alt="لوگو آرمان هوم"
              width={400}
              height={400}
              className="w-60 h-60"
            />
          </div>
        </div>

        {/* ستون 2 - درباره گرند دیزاین */}
        <div className="md:mt-[-60] text-center md:text-center">
          <h3 className="text-white font-semibold text-lg mb-4">
            درباره گرند دیزاین
          </h3>
          <p>
            گرند دیزاین جاییه که خلاقیت و تکنولوژی دست به دست هم میدن تا
            رویاهای شما رو به واقعیت تبدیل کنن
          </p>
          <br />
          <p>اگر می‌خواهید محیط خود را تغییر دهید به تیم حرفه‌ای ما بسپارید</p>
        </div>

        {/* ستون 3 - تماس */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            با ما تماس بگیرید
          </h3>
          <div className="text-sm space-y-4 max-sm:ml-25">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a 2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"
                />
              </svg>
              <p className="font-semibold">ایمیل</p>
              <a
                href="mailto:granddesign.ay@gmail.com"
                className="text-gray-300 hover:text-green-600 transition"
              >
                granddesign.ay@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c4-4 6-8 6-11a6 6 0 10-12 0c0 3 2 7 6 11z"
                />
              </svg>
              <p className="font-semibold">آدرس</p>
              <br/>
              <br/>
              <p className="mt-4">
                لاهیجان میدان دانشگاه آزاد - بلوار دانشجو (۴۵ متری) دفتر طراحی
                گرند دیزاین
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* شبکه‌های اجتماعی 👇 بدون تغییر */}
      <div className="flex gap-3 mt-0 justify-center pb-5 bg-black">
        <div className="flex gap-3 mt-4">
          {/* اینستاگرام */}
          <a
            href="https://instagram.com/granddesign._"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              fill="#000000"
            >
              <path d="M16 3C8.8324839 ... z" />
            </svg>
          </a>

          {/* تلگرام */}
          <a
            href="https://t.me/@granddesignnn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              fill="#000000"
            >
              <path d="M 25 2 C 12.309288 ... z" />
            </svg>
          </a>

          {/* واتساپ */}
          <a
            href="https://wa.me/09333840658"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              fill="#000000"
            >
              <path d="M 25 2 C 12.309534 ... z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="text-center text-green-600 bg-black">
        ساخته شده با ♥️ توسط <span className="font-semibold">استارتاپ وایزر</span>
      </p>
    </div>
  );
}
