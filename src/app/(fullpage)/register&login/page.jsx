"use client"

import Image from "next/image"
import Register from "./register"
import { useLoginStore } from "@/zustand/store"
import Login from "./login"
import SendOtp from "./otp"

export default function RegisterAndLoginPage() {
  const { loginAndRegister } = useLoginStore()

  function renderComponent() {
    switch (loginAndRegister) {
      case "otp": return <SendOtp />
      case "register": return <Register />
      case "login": return <Login />
      default: return <Login />
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#0a192f] px-4">
      <div className="w-full max-w-[1000px] h-full lg:h-[650px] grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/30 border border-slate-800/50">
        {/* بخش تصویر (کامل ارتفاع و عرض) */}
        <div className="hidden lg:block w-full h-full relative overflow-hidden">
          {/* تصویر پس‌زمینه */}
          <Image
            src="/images/imageRegister.png"
            alt="خدمات کفپوش و لوازم تخصصی"
            fill
            className="object-cover"
            priority
          />
          
          {/* لایه overlay برای خوانایی بهتر متن */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112240]/90 to-[#0a192f]/70"></div>
          
          {/* متن روی تصویر */}
          <div className="absolute inset-0 flex flex-col justify-end items-center p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">تخصصی‌ترین خدمات کفپوش</h3>
            <p className="text-slate-300 max-w-md">
              ارائه بهترین مصالح و لوازم تخصصی کفپوش با کیفیت عالی و قیمت مناسب
            </p>
          </div>
          
          {/* افکت نور */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-[80px] opacity-20"></div>
        </div>

        {/* بخش فرم */}
        <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-[#0a192f] to-[#112240] relative overflow-hidden">
          {/* ذرات شناور */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-sky-500/10"
                style={{
                  width: Math.random() * 8 + 2 + 'px',
                  height: Math.random() * 8 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 8 + 8}s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}