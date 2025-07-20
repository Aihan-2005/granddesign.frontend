"use client"

import Image from "next/image"
import Register from "./register"
import { useLoginStore } from "@/zustand/store"
import Login from "./login"
import { useEffect } from "react"
import SendOtp from "./otp"

export default function RegisterAndLoginPage(){
    const {loginAndRegister}=useLoginStore()
    // useEffect(()=>{
    //         console.log(loginAndRegister)
    // } , [loginAndRegister])

    function returnComponents(){
        switch (loginAndRegister){
        case "otp" : 
        return <SendOtp />
        case "register" : 
        return <Register />
        case "login" : 
        return <Login />
        }
    } 

    return (
        <>
         <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
              
              <div className=" w-[100%] h-[100%] lg:w-[1000px]  grid-cols-2 grid  border border-sky-900/40 rounded-2xl lg:h-[600px]">  
                
                
                   <div className="w-[100%] h-[100%] rounded-l-2xl  ">
<Image src={"/images/imageRegister.png"} alt="image" width={300} height={300} className="w-[100%] h-[100%] rounded-l-2xl" />
                   </div>


                   {/* information */}
                   <div className="w-[100%] h-[100%] rounded-r-2xl flex flex-col">
{returnComponents()}

                   </div>
                   
                   
                   
                   
                   </div>
              


         </div>
         </>
    )
}