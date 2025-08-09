"use client";
import React, { useState, useEffect,useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/store/Headers';
import Image from 'next/image';
import { 
  Award, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function WhyUs() {
  const cards = [
  { 
    icon: <Award className="w-10 h-10 text-[#a0e6ab]" />,
    text: "کیفیت فوق‌العاده محصولات ما" 
  },
  { 
    icon: <ShieldCheck className="w-10 h-10 text-[#a0e6ab]" />,
    text: "تضمین اصالت و دوام" 
  },
  { 
    icon: <Sparkles className="w-10 h-10 text-[#a0e6ab]" />,
    text: "طرح‌های خلاقانه و منحصربفرد" 
  }
];
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

   useEffect(() => {
    const checkScroll = (y) => {
      if (!hasAnimated && sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.8;
        
        if (top < triggerPoint && top + height > 0) {
          setHasAnimated(true);
        }
      }
    };

     const unsubscribe = scrollY.on("change", checkScroll);
    
    
    checkScroll(scrollY.get());

return () => unsubscribe();
  }, [scrollY, hasAnimated]);


  return (
    <div className="min-h-screen bg-gray-500 relative overflow-hidden" >
      <Header />
      
      <div dir='rtl'>
      <section className="w-full h-auto min-h-[70vh] flex flex-col md:flex-row items-center justify-between pt-20 pb-10 px-4">
        
        
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative">
          <Image
            src="/images/slider5.jpg"
            alt="Why us"
            fill
            className="object-cover rounded-xl shadow-2xl"
            quality={100}
          />
        </div>
        
       
        <div className="w-full md:w-1/2 pr-0 md:pr-10 mt-10 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a0e6ab] mb-6">
            چرا ما؟
          </h2>
          {[
            "ما در گرند دیزاین با تکیه بر سال‌ها تجربه در صنعت طراحی و اجرای پروژه‌های مسکونی و تجاری، استانداردهای جدیدی از کیفیت را تعریف کرده‌ایم. استفاده از بهترین مواد اولیه، تکنیک‌های روز دنیا و نظارت دقیق در هر مرحله از اجرا، تضمین‌کننده نتیجه‌ای استثنایی است.",

            "تیم متخصص ما با ترکیب دانش فنی روز و خلاقیت بی‌حد، فضایی منحصربفرد خلق می‌کند که هم زیبایی خیره‌کننده دارد و هم کاملاً کاربردی است. ما به جای پیروی از طرح‌های تکراری، برای هر مشتری براساس سلیقه، نیازها و سبک زندگی‌اش راه‌حل‌های طراحی شخصی‌سازی شده ارائه می‌دهیم. ",

            "برای ما رضایت شما اولویت اول است. از اولین مشاوره تا تحویل نهایی، همراهی صادقانه و حرفه‌ای را تجربه خواهید کرد. گارانتی خدمات، پشتیبانی پس از تحویل و پاسخگویی سریع به تمام سوالات و نیازهای شما، بخشی از تعهد دائمی ما به کیفیت و خدمات پس از فروش است."
          ].map((text, i) => (
            <p key={i} className="text-[#cdcdcd] text-lg md:text-xl mb-4 ">
              {text}
            </p>
          ))}
        </div>
      </section>

     
      <section 
        ref={sectionRef}
        className="w-full py-20 bg-gray-500 mt-30"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
            {cards.map((card, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    animate={hasAnimated ? { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.3,
        type: "spring",
        stiffness: 100
      }
    } : {}}
    className="bg-gray-700 border border-[#a0e6ab] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 mb-8 text-center"
  >
    <div className="flex justify-center mb-4">
      {card.icon}
    </div>
    <p className="text-gray-300">{card.text}</p>
  </motion.div>
))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
