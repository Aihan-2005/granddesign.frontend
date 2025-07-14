"use client"
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const params = useParams()


useEffect(()=>{
console.log(params)
} , [])


  const items = [
    {
      title: "blog",
      textTitle: "مجله معماری",
      href: "/blog",
    },
    {
      title: "portfolio",
      textTitle: "نمونه کارها",
      href: "/portfolio",
    },
    {
      title: "services",
      textTitle: "خدمات ما",
      href: "/services",
    },
    {
      title: "about",
      textTitle: "درباره ما",
      href: "/about",
    },
    {
      title: "contact",
      textTitle: "تماس با ما",
      href: "/contact",
    },
  ];

  return (
    <nav className={`flex  items-center w-[100%]  justify-between px-8   bg-gradient-to-r ${params.id?"sticky ":"fixed " }top-0 z-40 shadow-lg" `} style={{
    background: "linear-gradient(to right, rgba(153, 153, 153, 0.999) 45%, #00000000 70%)",
    backdropFilter:  "blur(6px)"
  }}
>
     {/* لینک‌های ناوبری */}
         <div className="flex items-center gap-10">
          {/* دکمه فروشگاه */}
           <Link href={"/store"} className="bg-[green] cursor-pointer text-white px-6 py-3 rounded-md text-base font-medium shadow-lg  hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
          فروشگاه 
        </Link>
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="relative text-gray-300 text-base font-medium transition-colors duration-300  group"
          >
            {item.textTitle}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}

  
      </div>
      
      
    {/* لوگو و نام شرکت */}
      <div className="flex items-center gap-4">
        {/* <span className="text-2xl font-bold text-gray-300 ">
نماخانه      
  </span> */}
          <Image
          src="/images/image.png"
          alt="لوگو آرمان هوم"
          width={60}
          height={60}
          className=" transition-transform duration-300 hover:scale-[1.2]"
        />

      </div>

  
    </nav>
  );
}