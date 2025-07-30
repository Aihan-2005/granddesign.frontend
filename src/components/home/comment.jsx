import React, { use } from 'react'
import Image from 'next/image';
import { useState,useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
export default function Team() {
    const teamMembers =[
        {
            name:"علی کمالی",
            role:"UI Designer",
            image:"/images/teams/client1.jpg",
            describtion:"«تعیین» و طراحی فونت، ظاهر و رنگ متن‌‌ها، لوگو، آیکن‌ها، دکمه‌ها، منوها و محل قرارگیری آن‌ها به طراحی وب مربوط می‌شود.از جمله ابزارهای مورد استفاده در طراحی وب می‌توان به فتوشاپ و Illustrator اشاره کرد."
            
        },
        {
            name:"محمد سهیلی ",
            role:"backend dev",
            image:"/images/teams/client2.jpg",
            describtion:"علاوه بر این، مواردی مثل ذخیره اطلاعات کاربر در پایگاه داده هنگام ایجاد حساب کاربری یا نمایش اطلاعات بر اساس فیلترهایی که کاربر تعیین کرده است نیز از جمله مواردی است که در برنامه نویسی یا همان توسعه وب با استفاده از زبان‌های سمت سرور مثل PHP، جاوا و پایتون انجام می‌شوند"
            
        },
        {
            name:"امیر عباسی ",
            role:"frontend dev ",
            image:"/images/teams/client3.jpg",
            describtion:"برنامه نویسی فرانت‌اند» یا همان «توسعه فرانت‌اند» که به آن «برنامه نویسی سمت کلاینت» هم می‌گویند، فرآیند تولید کدهای CSS ،HTML و جاوا اسکریپت برای ایجاد وب سایت‌ها و وب اپلیکیشن‌ها را شامل می‌شود."
        },
        {
            name:"حسین پور مخبر ",
            role:"طراح رابط کاربری",
            image:"/images/teams/client4.jpg",
            describtion:"چیدمان گرافیکی یک وبسایت یا اپلیکیشن است. رابط کاربری شامل دکمه‌هایی که کاربر روی آن‌ها کلیک می‌کند، متن‌هایی که کاربر می‌خواند، تصاویر، اسلایدرها، کادرهای ورود اطلاعات توسط کاربر، و تمامی عناصر دیگری است که کاربر با آن‌ها تعامل دارد"
            
        },
    ];

    const [index , setIndex] = useState(0);

   useEffect(() => { const interval = setInterval(() => { setIndex((prevIndex) =>

(prevIndex + 1) % teamMembers.length);
   },3000);
return () => clearInterval(interval);
   },[]);


    const handleCliick = ()=> {
        setIndex((prev)=> (prev+1)% teamMembers.length);
    };
    const member = teamMembers[index];

  return (
    <div>
        <h1 className='text-white text-center text-3xl font-bold  mt-40 ' >نظرات دیگران درباره ما  </h1>
    <div onClick={handleCliick} className='cursor-pointer w-full max-w-[90%] sm:max-w-[500px] md:max-w-[700px]
    mx-auto relative 
    bg-gradient-to-r from-[#6d6d6d]  via-[#4f4f4f] to-[#212121b3]  p-6 rounded-lg shadow-lg shadow-[#2a2a2a] hover:shadow-xl transition-all  hover:shadow-[#5d5d5d]
     duration-500 ease-in-out opacity-100  mb-30 mt-10 h-auto text-white border-2 border-[#886622b3]  hover:bg-[#868686fc]   ' >
        
        <AnimatePresence mode="wait"/>
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
            <h2 className='text-end text-sm sm:text-base md:text-lg  mb-4 text-wrap h-10 ' >{member.describtion}</h2>
        </motion.div>
        
        
       
        <div>
            <img src={member.image} alt={member.name} className='h-20 w-30 rounded-lg  border-[#916d25b3] mt-40 border-2 flex flex-row  sm:ml-80 md:ml-130 '/>
             <p className='text-white text-xs sm:text-sm  mt-2 mr-5 sm:text-end'>{member.name}</p>
        <p className='tetxt-gray-500 text-sm  mr-5 sm:text-end'>{member.role}</p>
        </div>
        
        
    </div>
    </div>
  )
}

