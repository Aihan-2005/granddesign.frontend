"use client"

import Image from "next/image"
import Register from "./register"
import { useLoginStore } from "@/zustand/store"
import Login from "./login"
import { useEffect } from "react"
import SendOtp from "./otp"

export default function RegisterAndLoginPage() {
  const { loginAndRegister } = useLoginStore()

  function renderComponent() {
    switch (loginAndRegister) {
      case "otp":
        return <SendOtp />
      case "register":
        return <Register />
      case "login":
        return <Login />
      default:
        return <Login /> // fallback to login if nothing matched
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#0b1120] px-4">
      <div className="w-full max-w-[1000px] h-full lg:h-[600px] grid grid-cols-1 lg:grid-cols-2 border border-sky-900/40 rounded-2xl overflow-hidden">
        
        {/* Left image (only on large screens) */}
        <div className="hidden lg:block w-full h-full">
          <Image
            src="/images/imageRegister.png"
            alt="Authentication illustration"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="w-full h-full flex flex-col justify-center items-center bg-white dark:bg-[#0e1a34]">
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}
