"use client"

import { registerFunction } from "@/apis/registerandLogin";
import { useLoginStore } from "@/zustand/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SendOtp() {
  const router = useRouter();
  const [information, setInformation] = useState();
  const { setloginAndRegister, setInformationUser, informationUser } = useLoginStore();

  async function callRegister(obj) {
    
  await setInformationUser({otp:Number(information)});
     
    const res = await registerFunction({phoneNumber:informationUser.phoneNumber , otp:Number(information)});
    if (res.success) {
      router.push("/");
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#0b1e34] to-[#0e1c2f] text-white rounded-l-2xl relative overflow-hidden shadow-inner shadow-sky-900/20 direction-rtl">
      
      {/* عنوان */}
      <h2 className="text-3xl font-bold text-cyan-200 mb-6 tracking-wide drop-shadow text-center">
        تأیید کد یک‌بارمصرف
      </h2>

      {/* تصویر پروفایل */}
      <Image
        src="/images/image.png"
        alt="OTP Image"
        width={100}
        height={100}
        className="rounded-full border border-sky-800/40 mb-6 shadow-md"
      />

      {/* ورودی کد */}
      <div className="w-full max-w-sm">
        <input
          value={information}
          onChange={(e) => setInformation(e.target.value)}
          type="text"
          maxLength={6}
          placeholder="کد را وارد کنید"
          className="w-full text-center tracking-widest text-lg px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-sky-100 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition"
        />
      </div>

      {/* دکمه تایید */}
      <button
        onClick={() => callRegister(information)}
        className="w-full max-w-sm mt-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5 shadow-lg"
      >
        تایید و ادامه
      </button>

      {/* تغییر به ورود */}
      <p className="mt-6 text-sm text-cyan-300 text-center">
        
        <span
          onClick={() => setloginAndRegister("register")}
          className="text-cyan-400 hover:text-cyan-300 cursor-pointer underline"
        >
          تغییر شماره تلفن
        </span>
      </p>

      {/* افکت نور هنگام هاور */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
