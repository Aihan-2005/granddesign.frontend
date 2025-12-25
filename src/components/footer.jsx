"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PUBLIC_BASE } from "@/config/publicBase";

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
        className="bg-black mt-[10px] text-gray-300 py-3 px-6 w-full mx-auto grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center 
        items-center text-center md:text-start"
      >
        {/* 1 - خبرنامه */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg mb-2 ml-3">
            تخفیف‌ها و خبرهای ویژه رو از دست نده
          </h3>

          <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
            <input
              type="text"
              placeholder="شمارتو وارد کن"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded-md px-12 py-1 
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
              src={`${PUBLIC_BASE}/images/20241027_175739_0000.png`}
              alt="لوگو آرمان هوم"
              width={240}
              height={240}
              sizes="240px"
              className="w-60 h-60"
            />
          </div>
        </div>

        {/* درباره ما */}
        <div className="md:mt-[-60px] text-center">
          <h3 className="text-white font-semibold text-lg mb-4">
            درباره گرند دیزاین
          </h3>
          <p>
            گرند دیزاین جاییه که خلاقیت و تکنولوژی دست به دست هم میدن تا
            رویاهای شما رو به واقعیت تبدیل کنن
          </p>
          <br />
          <p>
            اگر می‌خواهید محیط خود را تغییر دهید به تیم حرفه‌ای ما بسپارید
          </p>
        </div>

        {/* تماس */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            با ما تماس بگیرید
          </h3>

          <div className="text-sm space-y-4">
            <div className="flex items-center gap-2">
              <p className="font-semibold">ایمیل:</p>
              <a
                href="mailto:granddesign.ay@gmail.com"
                className="text-gray-300 hover:text-green-600 transition"
              >
                granddesign.ay@gmail.com
              </a>
            </div>

            <div>
              <p className="font-semibold mb-1">آدرس:</p>
              <p>
                لاهیجان میدان دانشگاه آزاد - بلوار دانشجو (۴۵ متری)
                دفتر طراحی گرند دیزاین
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* شبکه‌های اجتماعی */}
      <div className="flex justify-center items-center gap-3 bg-black pb-6">
        <a
          href="https://instagram.com/granddesign._"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-gray-600 transition"
        >
          Instagram
        </a>

        <a
          href="https://t.me/granddesignnn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-gray-600 transition"
        >
          Telegram
        </a>

        <a
          href="https://wa.me/09333840658"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-gray-600 transition"
        >
          WhatsApp
        </a>
      </div>

      <p className="text-center text-green-600 bg-black pb-4">
        ساخته شده با ♥️ توسط <span className="font-semibold">استارتاپ وایزر</span>
      </p>
    </div>
  );
}
