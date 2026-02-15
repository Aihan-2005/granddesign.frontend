"use client";

import { useState } from "react";
import Image from "next/image";
import { PUBLIC_BASE } from "@/config/publicBase";
import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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
        className="bg-black mt-[10px] text-gray-300 py-6 px-6 w-full mx-auto grid 
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
              className="bg-gray-800 border border-gray-600 rounded-md px-4 py-1 
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

          <div className="flex items-center justify-center mt-4">
            <Image
              src={`https://ftp.granddesign.ir/images/20241027_175739_0000.png`}
              alt="لوگو گرند دیزاین"
              width={220}
              height={220}
              sizes="220px"
              className="w-56 h-56 object-contain"
            />
          </div>
        </div>

        {/* درباره ما */}
        <div className="md:mt-[-40px] text-center">
          <h3 className="text-white font-semibold text-lg mb-4">
            درباره گرند دیزاین
          </h3>
          <p>
            گرند دیزاین جاییه که خلاقیت و تکنولوژی دست به دست هم میدن تا
            رویاهای شما رو به واقعیت تبدیل کنن
          </p>
          <br />
          <p>
            اگر می‌خواهید محیط خود را تغییر دهید، به تیم حرفه‌ای ما بسپارید
          </p>
        </div>

        {/* تماس */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            با ما تماس بگیرید
          </h3>

          <div className="text-sm space-y-4">
            {/* شماره تماس */}
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <p className="font-semibold">تماس:</p>
              <a
                href="tel:09333840658"
                className="text-gray-300 hover:text-green-500 transition"
              >
                ۰۹۳۳۳۸۴۰۶۵۸
              </a>
            </div>

            {/* ایمیل */}
            <div className="flex items-center gap-2">
              <p className="font-semibold">ایمیل:</p>
              <a
                href="mailto:granddesign.ay@gmail.com"
                className="text-gray-300 hover:text-green-500 transition"
              >
                granddesign.ay@gmail.com
              </a>
            </div>

            {/* آدرس */}
            <div>
              <p className="font-semibold mb-1">آدرس:</p>
              <p>
                لاهیجان، میدان دانشگاه آزاد – بلوار دانشجو (۴۵ متری)  
                دفتر طراحی گرند دیزاین
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* شبکه‌های اجتماعی */}
      <div className="flex justify-center items-center gap-4 bg-black pb-6">
        <a
          href="https://instagram.com/granddesign._"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-green-500 text-white 
          flex items-center justify-center hover:bg-green-600 transition"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="https://t.me/granddesignnn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-green-500 text-white 
          flex items-center justify-center hover:bg-green-600 transition"
        >
          <FaTelegramPlane size={22} />
        </a>

        <a
          href="https://wa.me/09333840658"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-green-500 text-white 
          flex items-center justify-center hover:bg-green-600 transition"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>

      <p className="text-center text-green-600 bg-black pb-4 text-sm">
        ساخته شده با ♥️ توسط <span className="font-semibold">استارتاپ وایزر</span>
      </p>
    </div>
  );
}
///...