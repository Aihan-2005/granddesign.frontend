"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";





export default function Footer(){

  return(
      <footer className="bg-gray-400 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-10">
          <div>
            <h3  className="text-xl font-bold mb-4 text-emerald-800">تماس با ما</h3>
            <ul className="space-y-2 text-sm text-emerald-950">
              <li>
                <span className="font-semibold text-black me-2">ادرس ما:    </span> تگزاس
              </li>
              <li>
                jafar@gmail.com <span className="font-semibold text-black me-2">:ایمیل</span> 
              </li>
            </ul>
          </div>
              <div className=" flex flex-col  justify-center items-center">
                <h3 className="text-xl font-bold mb-4 text-emerald-800">ما را دنبال کنید</h3>
                <div className="flex space-x-5 rtl:space-x-reverse">
                  <Link href="https://instagram.com" target="_blank" className="hover:scale-110 transition">
                    <FaInstagram className="text-neutral-900 w-8 h-8"/>
                  </Link>
                </div>
              </div>
              <div>

                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-black">
                  <img src="/images/image.png" alt="logo" className="w-full h-full object-contain text-bold"/>
                </div>

              </div>
        </div>
              <div className="text-center text-emerald-950 text-sm mt-8 ml-15">
        © {new Date().getFullYear()} تمامی حقوق برای معاره‌تو محفوظ است
     </div>
      </footer>
  );
}