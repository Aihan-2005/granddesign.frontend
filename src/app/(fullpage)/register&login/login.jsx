"use client";

import { login, validOtp } from "@/apis/registerandLogin";
import { useLoginStore } from "@/zustand/store";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [eyePassword, setEyePassword] = useState(false);
  const [information, setInformation] = useState({});
  const { setloginAndRegister  , setInformationUser } = useLoginStore();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    setIsLoading(true);
    try {
      await validOtp(information);
      setInformationUser(information)
      setloginAndRegister("otp");

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#0a192f] to-[#112240] rounded-r-2xl relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-sky-500/10"
            style={{
              width: Math.random() * 10 + 2 + 'px',
              height: Math.random() * 10 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Company Logo */}
      <div className="relative z-10 mb-2">
        <Image 
          src="/images/image.png" 
          alt="لوگوی شرکت" 
          width={120} 
          height={60}
          className="object-contain"
        />
      </div>

      {/* Form Header */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2">
          ورود به حساب
        </h2>
        <p className="text-slate-400">لطفا اطلاعات خود را وارد کنید</p>
      </div>

      {/* Form Content */}
      <div className="w-full max-w-sm flex flex-col items-center space-y-8 relative z-10">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full bg-slate-800 border-2 border-sky-500/30 flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              src="/images/image.png"
              alt="User avatar"
              width={96}
              height={96}
              className="object-cover z-30 "
            />
          {/* <div className="absolute inset-0 bg-sky-500/10 backdrop-blur-sm" /> */}
        </div>

        {/* Input Fields */}
        <div className="w-full space-y-5">
          {/* Phone Number */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">شماره تلفن</label>
            <input
              value={information.phoneNumber || ""}
              onChange={(e) => setInformation(prev => ({ ...prev, phoneNumber: e.target.value }))}
              type="text"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent transition-all text-left direction-ltr"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">رمز عبور</label>
                  <div className="relative">
              <input
                value={information.password || ""}
                onChange={(e) => setInformation(prev => ({ ...prev, password: e.target.value }))}
                type={eyePassword ? "text" : "password"}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent transition-all pr-12"
              />
              <button 
                onClick={() => setEyePassword(prev => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-sky-400 transition-colors"
              >
                {eyePassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="relative z-10 w-full max-w-sm mt-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-medium shadow-lg transition-all hover:shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            در حال ورود...
          </span>
        ) : (
          "ورود به حساب"
        )}
      </button>

      {/* Register Link */}
      <p className="relative z-10 mt-6 text-slate-400 text-sm text-center mb-5">
         <button
          onClick={() => setloginAndRegister("register")}
          className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          ثبت نام کنید
        </button>    حساب کاربری ندارید؟{' '}
   
      </p>

      {/* Glow effects */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-[80px] opacity-10  "></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500 rounded-full filter blur-[80px] opacity-10 "></div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
}