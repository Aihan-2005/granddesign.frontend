


'use client';
import { use, useState } from "react";
import Image from 'next/image';


export default function Resume1(){
  const gallery =[
    {id:1,src: "/nama/chalak-pirmohamadi/a.jpg", alt: "نما و محوطه 1" },
    { id: 2, src: "/images/weblogs/2.jpg", alt: "نما و محوطه 2" },
    { id: 2, src: "/images/weblogs/2.jpg", alt: "نما و محوطه 2" },
    //محل قرار گیری عکس ها برای فولدر نما تمام عکس های در فولدر داخلی باید قرار داده شود 
  ];

  const [showAll,setShowAll] = useState(false);
  const [selectedImage,setSelectedImage] = useState(null);


  const visibleImages = showAll ? gallery : gallery.slice(0,8);

  return (
    <div
      className="w-full min-h-screen bg-gray-900 text-white py-12 px-6"
      dir="rtl"
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="text-right">
          <h1 className="text-3xl sm:text-4xl font-bold">نما و محوطه</h1>
          <p className="mt-2 text-gray-300 text-sm sm:text-base max-w-xl">
            معرفی پروژه‌های برتر طراحی نما و محوطه با ما.  
            در این بخش نمونه پروژه‌ها را مشاهده می‌کنید که هر کدام با دقت و تمرکز ویژه روی زیبایی و عملکرد محیط طراحی شده‌اند.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 mb-8">
        {visibleImages.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(item.src)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {!showAll && gallery.length > 8 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            مشاهده کامل
          </button>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-3/4">
            <Image
              src={selectedImage}
              alt="بزرگ شده"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}