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
        className="bg-black mt-[10px] text-gray-300 py-3 px-6 w-[100%] mx-auto grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center 
        items-center text-center md:text-start"
      >
        {/*  1 - خبرنامه */}
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
              src="/images/20241027_175739_0000.png"
              alt="لوگو آرمان هوم"
              width={400}
              height={400}
              className="w-60 h-60"
            />
          </div>
        </div>

        {/* اصلاح مارجین منفی و اضافه کردن واحد px */}
        <div className="md:mt-[-60px] text-center md:text-center">
          <h3 className="text-white font-semibold text-lg mb-4">
            درباره گرند دیزاین
          </h3>
          <p>
            گرند دیزاین جاییه که خلاقیت و تکنولوژی دست به دست هم میدن تا
            رویاهای شما رو به واقعیت تبدیل کنن
          </p>
          <br />
          <br />
          <br />
          <p>اگر می‌خواهید محیط خود را تغییر دهید به تیم حرفه‌ای ما بسپارید</p>
        </div>

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
              <br />
              <br />
              <p className="mt-4">
                لاهیجان میدان دانشگاه آزاد - بلوار دانشجو (۴۵ متری) دفتر طراحی
                گرند دیزاین
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex justify-center items-center gap-3 bg-black w-full pt-0 pb-6">
        {/* اینستاگرام */}
        <a
          href="https://instagram.com/granddesign._"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-gray-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        {/* تلگرام */}
        <a
          href="https://t.me/granddesignnn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-gray-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 ml-[-2px] mt-[1px]"
          >
            <path d="M21.928 2.528c-.387-.505-1.083-.675-1.659-.406L2.343 10.283c-.777.363-.77 1.484.01 1.838l4.924 2.237 1.327 5.308c.174.695 1.069.914 1.548.378l2.66-2.97 4.957 4.036c.66.538 1.66.113 1.734-.735L22.99 3.845c.061-.717-.465-1.317-1.062-1.317zM10.096 14.01l-1.085-4.34 9.872-6.58-8.787 10.92z" />
          </svg>
        </a>

        {/* واتساپ */}
        <a
          href="https://wa.me/09333840658"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-gray-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 2.982 1.288 2.982.858 3.526.806.544-.052 1.734-.709 1.981-1.393.248-.684.248-1.27.173-1.393z" />
          </svg>
        </a>
      </div>

      <p className="text-center text-green-600 bg-black pb-4">
        ساخته شده با ♥️ توسط{" "}
        <span className="font-semibold">استارتاپ وایزر</span>
      </p>
    </div>
  );
}
