"use client"
import Image from "next/image";
import Link from "next/link";
import { useMenuStore } from "@/zustand/store";
import Menu from "./menu";

export default function Navbar() {
  const isOpen = useMenuStore((state) => state.isOpen);
const openMenu = useMenuStore((state) => state.openMenu);
const closeMenu = useMenuStore((state) => state.closeMenu);

  const items = [
    
    {
      title: "blog",
      textTitle: "وبلاگ ",
      href: "/blog",
    },
    {
      title: "portfolio",
      textTitle: "انیمیشن ",
      href: "/portfolio",
    },
    {
      title: "services",
      textTitle: "VR360",
      href: "https://momento360.com/e/uc/915652cee28649f7bbc15f57e53f27f4?utm_campaign=embed&utm_source=other&size=large&display-plan=true",
    },
    {
      title: "about",
      textTitle: "خدمات ما ",
      href: "/about",
    },

  ];

  return (
    <nav className="flex  items-center w-[100%]  justify-between px-4 sm:px-8    fixed top-0 z-40  shadow-lg bg-gradient-to-r from-[gray] from-40% to-transparent to-90%  lg:h-18"
    >
      {/* لینک‌های ناوبری */}
      <div className=" lg:ml-20 md:ml-10 hidden  md:flex items-center gap-10  ">
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
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}


      </div>


      {/* لوگو و نام شرکت */}
      <div className="flex items-center gap-4 ">
        
        <Image
          src="/images/20241027_175834.png"
          alt="لوگو آرمان هوم"
          width={60}
          height={60}
          className=" transition-transform duration-300 scale-[1.2]  "
        />

      </div>
      {/* دکمه سایز موبایل */}
      <div className="md:hidden ">
        <button onClick={openMenu}
          className="text-white focus:outline-none md:hidden"
        >
          ☰

        </button>
         
      </div>

      

      
      <Menu isOpen={isOpen} onClose={closeMenu} />
    </nav>
  );
}