"use client";

import Link from "next/link";
import { FaInstagram,FaWhatsapp,FaTelegram } from "react-icons/fa";





export default function Footer(){

  return(
  
    <footer className="bg-gray-400 text-white py-10">
  <div
    className="container max-w-6xl mx-auto 
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 
    justify-items-center items-center text-center"
  >
    
    <div>
      <h3 className="text-xl font-bold mb-4 text-emerald-800">تماس با ما</h3>
      <ul className="space-y-2 text-sm text-emerald-950">
        <li>
          <span className="font-semibold text-black me-2">آدرس ما:</span> تگزاس
        </li>
        <li>
          <span className="font-semibold text-black me-2">ایمیل:</span> jafar@gmail.com
        </li>
      </ul>
    </div>

    
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl font-bold mb-4 text-emerald-800">ما را دنبال کنید</h3>
      <div className="flex flex-row gap-4">
        <Link href="https://instagram.com" target="_blank" className="hover:scale-110 transition">
          <FaInstagram className="text-neutral-900 w-8 h-8" />
        </Link>
        <Link href="#" target="_blank" className="hover:scale-110 transition">
          <FaWhatsapp className="text-neutral-900 w-8 h-8" />
        </Link>
        <Link href="#" target="_blank" className="hover:scale-110 transition">
          <FaTelegram className="text-neutral-900 w-8 h-8" />
        </Link>
      </div>
    </div>

   
    <div className="flex justify-center items-center">
      <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
        <img
          src="/images/image.png"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>

  
  <div className="text-center text-emerald-950 text-sm mt-8">
    © {new Date().getFullYear()} تمامی حقوق برای معاره‌تو محفوظ است
  </div>
</footer>

  );
}