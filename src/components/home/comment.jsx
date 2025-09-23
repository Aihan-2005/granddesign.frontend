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
            describtion:" .هم خلاقیت داشتن، هم وقت‌شناس بودن. واقعاً تجربه‌ی لذت‌بخشی بود باهاشون کار کردناز جزئیات کارشون شگفت‌زده شدیم. هر بار مهمون میاد اولین چیزی که تعریف می‌کنه طراحی خونمونه! طراحی خونه‌مون دقیقاً همون چیزی شد که همیشه توی ذهنمون بود. تیم خیلی حرفه‌ای و خوش‌قولی داشتن."
            
        },
        {
            name:"محمد سهیلی ",
            role:"backend dev",
            image:"/images/teams/client2.jpg",
            describtion:"خیلی راحت و بی‌دردسر بود، دقیقاً مثل چیزی که می‌خواستیم شد. واقعاً دستتون درد نکنه! از وقتی خونه رو طراحی کردید، همه حس می‌کنن خونمون بزرگ‌تر و روشن‌تر شده. خیلی خوشحالم که انتخابتون کردم"
            
        },
        {
            name:"امیر عباسی ",
            role:"frontend dev ",
            image:"/images/teams/client3.jpg",
            describtion:"کیفیت طراحی و اجرای پروژه فراتر از انتظار ما بود. تیم در تمام مراحل با دقت و مسئولیت‌پذیری عمل کرد همکاری با این مجموعه تجربه‌ای ارزشمند بود؛ خلاقیت و تعهدشان ستودنی است"
        },
        {
            name:"حسین پور مخبر ",
            role:"طراح رابط کاربری",
            image:"/images/teams/client4.jpg",
            describtion:" هر گوشه از خونه تبدیل به یک اثر هنری شده. طراحی‌ها واقعاً حس خاص و متفاوتی ایجاد می‌کنن  فضای زندگی ما حالا ترکیبی از ظرافت، آرامش و شکوهه؛ چیزی که همیشه آرزوشو داشتیم." 
            
        },
                {
            name:"حسین پور مخبر ",
            role:"طراح رابط کاربری",
            image:"/images/teams/client4.jpg",
            describtion:"زیبا. دقیق. بی‌نقص بالاتر از انتظار."  
            
        },        {
            name:"حسین پور مخبر ",
            role:"طراح رابط کاربری",
            image:"/images/teams/client4.jpg",
            describtion:"باورم نمی‌شد خونه‌مون اینقدر تغییر کنه! هر روز که وارد میشم انگار یه خونه‌ی تازه دارم، خیلی هیجان‌انگیزه" 
            
        },
    ];

    const [index , setIndex] = useState(0);

   useEffect(() => { const interval = setInterval(() => { setIndex((prevIndex) =>

(prevIndex + 1) % teamMembers.length);
   },5000);
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
     duration-500 ease-in-out opacity-100  mb-30 mt-10 h-auto text-white border-2 border-[#22883fb3]  hover:bg-[#868686fc]   ' >
        
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
            <img src={member.image} alt={member.name} className='h-20 w-30 rounded-lg  border-[#298828b3] mt-40 border-2 flex flex-row  sm:ml-80 md:ml-130 '/>
             <p className='text-white text-xs sm:text-sm  mt-2 mr-5 sm:text-end'>{member.name}</p>
        <p className='tetxt-gray-500 text-sm  mr-5 sm:text-end'>{member.role}</p>
        </div>
        
        
    </div>
    </div>
  )
}

