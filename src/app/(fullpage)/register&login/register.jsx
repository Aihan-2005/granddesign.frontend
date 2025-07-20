"use client";

import validOtp from "@/apis/registerandLogin";
import { useLoginStore } from "@/zustand/store";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [eyePassword, setEyePassword] = useState(false);
  const {setloginAndRegister , setInformationUser}=useLoginStore()
  const [information , setInformation] = useState({})

   async function callRegister(obj) {
     const res = await registerFunction(obj)
     if (res.success){
        setInformationUser(information)
        validOtp("otp")
     }
  }
 

  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-8 bg-[#061a2e] rounded-r-2xl   relative overflow-hidden">
      {/* Header */}
      <h2 className="text-3xl font-bold text-sky-200 mb-8 drop-shadow-sm text-center">
        Grand
      </h2>

      {/* Image and Inputs Container */}
      <div className="w-full max-w-sm flex flex-col items-center space-y-8">
        {/* Image */}
        <div className="mb-4">
          <Image
            src="/images/image.png"
            alt="Register Image"
            width={160}
            height={160}
            className="rounded-xl border border-sky-800/30 shadow-md"
          />
        </div>

        {/* Inputs */}
        <div className="w-full space-y-6">
          <div className="relative">
            <input
            value={information.phoneNumber}
              type="text"
              onChange={(event)=>{
                setInformation(prev=>{return {...prev , phoneNumber:event.target.value}})
              }}
              placeholder="phone"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-sky-100 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
            />
          </div>
          <div className="relative">
            <input
            value={information.password}
              onChange={(event)=>{
                setInformation(prev=>{return {...prev , password:event.target.value}})
              }}
              type={eyePassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-sky-100 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60 pr-12"
            />
            <Image
              src={`/icons/${eyePassword ? "eyeOpen" : "eyeClose"}.svg`}
              className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
              alt="Toggle Password"
              width={20}
              height={20}
              onClick={() => setEyePassword((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="w-full max-w-sm mt-8 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 cursor-pointer text-white font-semibold transition-transform hover:-translate-y-0.5 duration-200 shadow-lg"
      onClick={()=>{
         callRegister(information)

      }}
      >
        ثبت نام
      </button>

      {/* Footer */}
      <p className="mt-6 text-sky-300 text-sm text-center">
        ثبت نام کرده اید?{" "}
        <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer underline" onClick={()=>setloginAndRegister("login")}>
          ورود
        </span>
      </p>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}