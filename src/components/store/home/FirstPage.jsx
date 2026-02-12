'use client';

import { useEffect,useState } from "react";
import Link  from "next/link";
import clsx from "clsx";


const images = [
    '/images/',
    '/images/',
    '/images/',
];

export default function FirstPage(){

    const [currentIndex,setCurrentIndex] = useState(0);

   useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentIndex((prev)=>(prev+1)%images.length);
    },5000);
    return ()=> clearInterval(interval);
   },[]);

   return(
    <div className="relative w-full h-[90vh] overflow-hidden min-h-screen">
        {images.map((src,index)=>(
            <div
                key={index}
                className={clsx(
                    "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
                    index === currentIndex ? 'opacity-100 z-10': 'opacity-0 z-0'
                )}
                style={{backgroundImage: `url(${src})`}}
                />
        ))}
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-end pt-8 px-17">
            <div className="text-gray-700 text-right max-w-md space-y-4">
                <p className="text-2xl text-emerald-900 font-bold ">خونه‌تو خاص کن – از کف تا سقف.</p>
                <h1 className="text-4xl font-bold leading-tight">
                            محصولاتی که هر جایی پیدا نمی‌شن، فقط برای سلیقه‌های متفاوت
                </h1>
                <Link href='/contact'>
                        <button className="bg-gray-900 text-white font-medium py-2 px-6 rounded-lg hover:bg-gray-300 transition">
                            ارتباط با ما
                        </button>
                </Link>
            </div>
        </div>
    </div>
   );
}