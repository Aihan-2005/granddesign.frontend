'use client';
import { use, useState } from "react";
import Image from 'next/image';


export default function Resume1(){
  const gallery =[
    {id:1,src: "/nama/chalak-pirmohamadi/a.jpg", alt: "نما و محوطه 1" },
     {id:2, src:"/nama/chalak-pirmohamadi/b.jpg" , alt:"نما و محوطه2"},
    { id: 3, src: "/nama/chalak-pirmohamadi/c.jpg", alt: "نما و محوطه 3" },
    { id: 4, src: "/nama/chalak-pirmohamadi/d.jpg", alt: "نما و محوطه 4" },
    { id: 5, src: "/nama/chalak-pirmohamadi/e.jpg", alt: "نما و محوطه 5" },
    { id: 6, src: "/nama/azizi -kisom/aziz (4).jpg", alt: "نما و محوطه 6" },
    { id: 7, src: "/nama/azizi -kisom/aziz (8).jpg", alt: "نما و محوطه 7" },
    { id: 8, src: "/nama/azizi -kisom/azizz (1).jpg", alt: "نما و محوطه 8" },
    { id: 9, src: "/nama/heshmat-asadol/ui3.jpg", alt: "نما و محوطه 9" },
    { id: 10, src: "/nama/azizi -kisom/azizz (16).jpg", alt: "نما و محوطه 10" },
    { id: 11, src: "/nama/azizi -kisom/azizz (20).jpg", alt: "نما و محوطه 11" },
    { id: 12, src: "/nama/azizi -kisom/azizz (24).jpg", alt: "نما و محوطه 12" },
    { id: 13, src: "/nama/chaf-berlian/44 (1).jpg", alt: "نما و محوطه 13" },
    { id: 14, src: "/nama/chaf-berlian/44 (3).jpg", alt: "نما و محوطه 14" },
    { id: 15, src: "/nama/heshmat-asadol/ui1.jpg", alt: "نما و محوطه 15" },
    { id: 16, src: "/nama/jana-lahijan/jjjjj (10).jpg", alt: "نما و محوطه 16" },
    { id: 17, src: "/nama/jana-lahijan/jjjjj (11).jpg", alt: "نما و محوطه 17" },
    { id: 18, src: "/nama/jana-lahijan/jjjjj (9).jpg", alt: "نما و محوطه 18" },
    { id: 19, src: "/nama/kiashar-rahimzade/kiashar (11).jpg", alt: "نما و محوطه 19" },
    { id: 20, src: "/nama/kiashar-rahimzade/kiashar (12).jpg", alt: "نما و محوطه 20" },
    { id: 21, src: "/nama/kiashar-rahimzade/kiashar (3).jpg", alt: "نما و محوطه 21" },
    { id: 22, src: "/nama/kiashar-rahimzade/kiashar (4).jpg", alt: "نما و محوطه 22" },
    { id: 23, src: "/nama/kiashar-rahimzade/kiashar (6).jpg", alt: "نما و محوطه 23" },
    { id: 24, src: "/nama/kiashar-rahimzade/kiashar (8).jpg", alt: "نما و محوطه 24" },
    { id: 25, src: "/nama/kiashar-rahimzade/kiashar (9).jpg", alt: "نما و محوطه 19" },
    { id: 26, src: "/nama/nama khararod/hsniiiasl (11).jpg", alt: "نما و محوطه 26" },
    { id: 27, src: "/nama/nama khararod/hsniiiasl (12).jpg", alt: "نما و محوطه 27" },
    { id: 28, src: "/nama/nama khararod/hsniiiasl (14).jpg", alt: "نما و محوطه 28" },
    { id: 29, src: "/nama/nama khararod/hsniiiasl (15).jpg", alt: "نما و محوطه 29" },
    { id: 30, src: "/nama/nama khararod/hsniiiasl (2).jpg", alt: "نما و محوطه 30" },
    { id: 31, src: "/nama/nama khararod/hsniiiasl (4).jpg", alt: "نما و محوطه 31" },
    { id: 32, src: "/nama/nama khararod/hsniiiasl (5).jpg", alt: "نما و محوطه 32" },
    { id: 33, src: "/nama/nama khararod/hsniiiasl (8).jpg", alt: "نما و محوطه 33" },
    { id: 34, src: "/nama/nama khararod/hsniiiasl (9).jpg", alt: "نما و محوطه 34" },
    { id: 35, src: "/nama/nazari-bijarbane/nz (2).jpg", alt: "نما و محوطه 35" },
    { id: 36, src: "/nama/nazari-bijarbane/nz (3).jpg", alt: "نما و محوطه 36" },
    { id: 37, src: "/nama/nilass-lahijan/aslia (2).jpg", alt: "نما و محوطه 37" },
    { id: 38, src: "/nama/nilass-lahijan/aslia (5).jpg", alt: "نما و محوطه 38" },
    { id: 39, src: "/nama/nilass-lahijan/aslia (6).jpg", alt: "نما و محوطه 39" },
    { id: 40, src: "/nama/nilass-lahijan/nmjanan (1).jpg", alt: "نما و محوطه 40" },
    { id: 41, src: "/nama/nilass-lahijan/nmjanan (12).jpg", alt: "نما و محوطه 41" },
    { id: 42, src: "/nama/nilass-lahijan/nmjanan (3).jpg", alt: "نما و محوطه 42" },
    { id: 43, src: "/nama/sakhteman golestan(16 metri), akbari/IMG_20250912_112602_839.jpg", alt: "نما و محوطه 43" },
    { id: 44, src: "/nama/sakhteman golestan(16 metri), akbari/IMG_20250912_112602_985.jpg", alt: "نما و محوطه 44" },
    { id: 45, src: "/nama/sakhteman golestan(16 metri), akbari/IMG_20250912_112603_111.jpg", alt: "نما و محوطه 45" },
    { id: 46, src: "/nama/shalman-askari/5.jpg", alt: "نما و محوطه 46" },
    { id: 47, src: "/nama/shalman-askari/7.jpg", alt: "نما و محوطه 47" },
    { id: 48, src: "/nama/shalman-askari/8.jpg", alt: "نما و محوطه 48" },
    { id: 49, src: "/nama/shalman-askari/9.jpg", alt: "نما و محوطه 49" },
    { id: 50, src: "/nama/shohani-jangal3000/sh1.jpg", alt: "نما و محوطه 50" },
    { id: 51, src: "/nama/shohani-jangal3000/sh2.jpg", alt: "نما و محوطه 51" },
    { id: 52, src: "/nama/shohani-jangal3000/sh3.jpg", alt: "نما و محوطه 52" },
    { id: 53, src: "/nama/shohani-jangal3000/sh4.jpg", alt: "نما و محوطه 53" },
    { id: 54, src: "/nama/shohani-jangal3000/sh5.jpg", alt: "نما و محوطه 54" },
    { id: 55, src: "/nama/shohani-jangal3000/sh6.jpg", alt: "نما و محوطه 55" },
    { id: 56, src: "/nama/shohani-jangal3000/sh7.jpg", alt: "نما و محوطه 56" },
    { id: 57, src: "/nama/shohani-jangal3000/sh8.jpg", alt: "نما و محوطه 57" },
    { id: 58, src: "/nama/siakal-vila-saeidi/saei.jpg", alt: "نما و محوطه 58" },
    { id: 59, src: "/nama/siakal-vila-saeidi/saeidiii (7).jpg", alt: "نما و محوطه 59" },
    { id: 60, src: "/nama/siakal-vila-saeidi/saeidiii (9).jpg", alt: "نما و محوطه 60" },
    { id: 61, src: "/nama/siakal-vila-saeidi/trtrtr (2).jpg", alt: "نما و محوطه 61" },
    { id: 62, src: "/nama/siakal-vila-saeidi/trtrtr (3).jpg", alt: "نما و محوطه 62" },
    { id: 63, src: "/nama/siakal-vila-saeidi/trtrtr (5).jpg", alt: "نما و محوطه 63" },
    { id: 64, src: "/nama/soostan-pirmohamadi/soostannn (1).jpg", alt: "نما و محوطه 64" },
    
    { id: 66, src: "/nama/soostan-pirmohamadi/soostannn (4).jpg", alt: "نما و محوطه 66" },
    { id: 67, src: "/nama/soostan-pirmohamadi/soostannn (6).jpg", alt: "نما و محوطه 67" },
    { id: 68, src: "/nama/vila jngl2000-mohamadi/2.jpg", alt: "نما و محوطه 68" },
    { id: 69, src: "/nama/vila jngl2000-mohamadi/4.jpg", alt: "نما و محوطه 69" },
    { id: 70, src: "/nama/vila jngl2000-mohamadi/6.jpg", alt: "نما و محوطه 70" },
    { id: 71, src: "/nama/vila jngl2000-mohamadi/7.jpg", alt: "نما و محوطه 71" },
    { id: 72, src: "/nama/vila jngl2000-mohamadi/8.jpg", alt: "نما و محوطه 72" },
    { id: 73, src: "/nama/vila jngl2000-mohamadi/9.jpg", alt: "نما و محوطه 73" },
    { id: 74, src: "/nama/vila jngl2000-mohamadi/aa.jpg", alt: "نما و محوطه 74" },
    { id: 75, src: "/nama/vila jngl2000-mohamadi/bb.jpg", alt: "نما و محوطه 75" },
    { id: 76, src: "/nama/villa chobi-rodbne/a (1).jpg", alt: "نما و محوطه 76" },
    { id: 77, src: "/nama/villa chobi-rodbne/a (2).jpg", alt: "نما و محوطه 77" },
    { id: 78, src: "/nama/villa chobi-rodbne/a (3).jpg", alt: "نما و محوطه 78" },
    { id: 79, src: "/nama/villa chobi-rodbne/a (4).jpg", alt: "نما و محوطه 79" },
    
   
    //محل قرار گیری عکس ها برای فولدر نما تمام عکس های در فولدر نما باید قرار داده شود 
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
        <div className="text-righ mt-5">
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
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
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
              sizes="(max-width: 768px) 95vw, (max-width: 1024px) 75vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}