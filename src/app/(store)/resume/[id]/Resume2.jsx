'use client';

import { useState } from "react";
import Image from "next/image";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function Resume1() {
  const gallery = [
    { id: 1, src: `${PUBLIC_BASE}/edari-tejari/4deh-kAFE sadeghi/2-4de.jpg`, alt: "نما و محوطه 1" },
    { id: 2, src: `${PUBLIC_BASE}/edari-tejari/4deh-kAFE sadeghi/3-4de.jpg`, alt: "نما و محوطه 2" },
    { id: 3, src: `${PUBLIC_BASE}/edari-tejari/4deh-kAFE sadeghi/4-4de.jpg`, alt: "نما و محوطه 3" },
    { id: 4, src: `${PUBLIC_BASE}/edari-tejari/4deh-kAFE sadeghi/5-4de.jpg`, alt: "نما و محوطه 4" },
    { id: 5, src: `${PUBLIC_BASE}/edari-tejari/4deh-kAFE sadeghi/6-4de.jpg`, alt: "نما و محوطه 5" },
    { id: 6, src: `${PUBLIC_BASE}/edari-tejari/4deh-kAFE sadeghi/7-4de.jpg`, alt: "نما و محوطه 6" },

    { id: 7, src: `${PUBLIC_BASE}/edari-tejari/al nabi-beheshti/1(1).jpg`, alt: "نما و محوطه 7" },
    { id: 8, src: `${PUBLIC_BASE}/edari-tejari/al nabi-beheshti/2(1).jpg`, alt: "نما و محوطه 8" },
    { id: 9, src: `${PUBLIC_BASE}/edari-tejari/al nabi-beheshti/3(1).jpg`, alt: "نما و محوطه 9" },
    { id: 10, src: `${PUBLIC_BASE}/edari-tejari/al nabi-beheshti/6(1).jpg`, alt: "نما و محوطه 10" },
    { id: 11, src: `${PUBLIC_BASE}/edari-tejari/al nabi-beheshti/7(1).jpg`, alt: "نما و محوطه 11" },

    { id: 12, src: `${PUBLIC_BASE}/edari-tejari/amlak ramsar/00000 (1).jpg`, alt: "نما و محوطه 12" },
    { id: 13, src: `${PUBLIC_BASE}/edari-tejari/amlak ramsar/00000 (2).jpg`, alt: "نما و محوطه 13" },
    { id: 14, src: `${PUBLIC_BASE}/edari-tejari/amlak ramsar/00000 (3).jpg`, alt: "نما و محوطه 14" },
    { id: 15, src: `${PUBLIC_BASE}/edari-tejari/amlak ramsar/00000 (6).jpg`, alt: "نما و محوطه 15" },

    { id: 16, src: `${PUBLIC_BASE}/edari-tejari/amlak-golstan/w1.jpg`, alt: "نما و محوطه 16" },
    { id: 17, src: `${PUBLIC_BASE}/edari-tejari/amlak-golstan/w11.jpg`, alt: "نما و محوطه 17" },
    { id: 18, src: `${PUBLIC_BASE}/edari-tejari/amlak-golstan/w4.jpg`, alt: "نما و محوطه 18" },
    { id: 19, src: `${PUBLIC_BASE}/edari-tejari/amlak-golstan/w7.jpg`, alt: "نما و محوطه 19" },
    { id: 20, src: `${PUBLIC_BASE}/edari-tejari/amlak-golstan/w8.jpg`, alt: "نما و محوطه 20" },

    { id: 21, src: `${PUBLIC_BASE}/edari-tejari/areshga-jfri/a.jpg`, alt: "نما و محوطه 21" },
    { id: 22, src: `${PUBLIC_BASE}/edari-tejari/areshga-jfri/c.jpg`, alt: "نما و محوطه 22" },
    { id: 23, src: `${PUBLIC_BASE}/edari-tejari/areshga-jfri/d.jpg`, alt: "نما و محوطه 23" },
    { id: 24, src: `${PUBLIC_BASE}/edari-tejari/areshga-jfri/e.jpg`, alt: "نما و محوطه 24" },
    { id: 25, src: `${PUBLIC_BASE}/edari-tejari/areshga-jfri/g.jpg`, alt: "نما و محوطه 25" },
    { id: 26, src: `${PUBLIC_BASE}/edari-tejari/areshga-jfri/hh.jpg`, alt: "نما و محوطه 26" },

    { id: 27, src: `${PUBLIC_BASE}/edari-tejari/bironbar-rasht/dsafj (1).jpg`, alt: "نما و محوطه 27" },
    { id: 28, src: `${PUBLIC_BASE}/edari-tejari/bironbar-rasht/dsafj (2).jpg`, alt: "نما و محوطه 28" },

    { id: 29, src: `${PUBLIC_BASE}/edari-tejari/boomgardi-lolman-tati/bmgrd (1).jpg`, alt: "نما و محوطه 29" },
    { id: 30, src: `${PUBLIC_BASE}/edari-tejari/boomgardi-lolman-tati/bmgrd (2).jpg`, alt: "نما و محوطه 30" },
    { id: 31, src: `${PUBLIC_BASE}/edari-tejari/boomgardi-lolman-tati/bmgrd (3).jpg`, alt: "نما و محوطه 31" },

    { id: 32, src: `${PUBLIC_BASE}/edari-tejari/daftar froosh-astane-amozade/brnjj (1).jpg`, alt: "نما و محوطه 32" },
    { id: 33, src: `${PUBLIC_BASE}/edari-tejari/daftar froosh-astane-amozade/brnjj (2).jpg`, alt: "نما و محوطه 33" },
    { id: 34, src: `${PUBLIC_BASE}/edari-tejari/daftar froosh-astane-amozade/brnjj (3).jpg`, alt: "نما و محوطه 34" },
    { id: 35, src: `${PUBLIC_BASE}/edari-tejari/daftar froosh-astane-amozade/brnjj (6).jpg`, alt: "نما و محوطه 35" },
    { id: 36, src: `${PUBLIC_BASE}/edari-tejari/daftar froosh-astane-amozade/brnjj (7).jpg`, alt: "نما و محوطه 36" },
    { id: 37, src: `${PUBLIC_BASE}/edari-tejari/daftar froosh-astane-amozade/brnjj (9).jpg`, alt: "نما و محوطه 37" },

    { id: 38, src: `${PUBLIC_BASE}/edari-tejari/dezhalood-daftar-shalman/dr (1).jpg`, alt: "نما و محوطه 38" },
    { id: 39, src: `${PUBLIC_BASE}/edari-tejari/dezhalood-daftar-shalman/dr (2).jpg`, alt: "نما و محوطه 39" },
    { id: 40, src: `${PUBLIC_BASE}/edari-tejari/dezhalood-daftar-shalman/dr (4).jpg`, alt: "نما و محوطه 40" },
    { id: 41, src: `${PUBLIC_BASE}/edari-tejari/dezhalood-daftar-shalman/dr (5).jpg`, alt: "نما و محوطه 41" },

    { id: 42, src: `${PUBLIC_BASE}/edari-tejari/dr-alipor_astane/astanalip (3).jpg`, alt: "نما و محوطه 42" },
    { id: 43, src: `${PUBLIC_BASE}/edari-tejari/dr-alipor_astane/astanalip (4).jpg`, alt: "نما و محوطه 43" },
    { id: 44, src: `${PUBLIC_BASE}/edari-tejari/dr-alipor_astane/astanalip (5).jpg`, alt: "نما و محوطه 44" },
    { id: 45, src: `${PUBLIC_BASE}/edari-tejari/dr-alipor_astane/astanalip (6).jpg`, alt: "نما و محوطه 45" },
    { id: 46, src: `${PUBLIC_BASE}/edari-tejari/dr-alipor_astane/astanalip (7).jpg`, alt: "نما و محوطه 46" },

    { id: 47, src: `${PUBLIC_BASE}/edari-tejari/jana-jafarpoor/1(1).jpg`, alt: "نما و محوطه 47" },
    { id: 48, src: `${PUBLIC_BASE}/edari-tejari/jana-jafarpoor/8(1).jpg`, alt: "نما و محوطه 48" },
    { id: 49, src: `${PUBLIC_BASE}/edari-tejari/jana-jafarpoor/cofjan (1).jpg`, alt: "نما و محوطه 49" },
    { id: 50, src: `${PUBLIC_BASE}/edari-tejari/jana-jafarpoor/cofjan (5).jpg`, alt: "نما و محوطه 50" },
    { id: 51, src: `${PUBLIC_BASE}/edari-tejari/jana-jafarpoor/cofjnaaaa (8).jpg`, alt: "نما و محوطه 51" },
    { id: 52, src: `${PUBLIC_BASE}/edari-tejari/jana-jafarpoor/mstjn (22).jpg`, alt: "نما و محوطه 52" },

    { id: 53, src: `${PUBLIC_BASE}/edari-tejari/janbazan-kafe kamlia/1 (5).jpg`, alt: "نما و محوطه 53" },
    { id: 54, src: `${PUBLIC_BASE}/edari-tejari/janbazan-kafe kamlia/3 (4).jpg`, alt: "نما و محوطه 54" },
    { id: 55, src: `${PUBLIC_BASE}/edari-tejari/janbazan-kafe kamlia/6 (3).jpg`, alt: "نما و محوطه 55" },
    { id: 56, src: `${PUBLIC_BASE}/edari-tejari/janbazan-kafe kamlia/8.jpg`, alt: "نما و محوطه 56" },

    { id: 57, src: `${PUBLIC_BASE}/edari-tejari/lbasfrooshi-lahijan/dewss (1).jpg`, alt: "نما و محوطه 57" },
    { id: 58, src: `${PUBLIC_BASE}/edari-tejari/lbasfrooshi-lahijan/dewss (2).jpg`, alt: "نما و محوطه 58" },

    { id: 59, src: `${PUBLIC_BASE}/edari-tejari/pasazh pydaysh-yaghobi/a.jpg`, alt: "نما و محوطه 59" },
    { id: 60, src: `${PUBLIC_BASE}/edari-tejari/pasazh pydaysh-yaghobi/b.jpg`, alt: "نما و محوطه 60" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visibleImages = showAll ? gallery : gallery.slice(0, 8);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-12 px-6" dir="rtl">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="text-right mt-5">
          <h1 className="text-3xl sm:text-4xl font-bold">تجاری و اداری</h1>
          <p className="mt-2 text-gray-300 text-sm sm:text-base max-w-xl">
            فضای کاری شما ویترین موفقیت شماست.  
            با طراحی‌های مدرن و منحصربه‌فرد ما، محیطی خواهید داشت که اعتبار برندتان را تقویت کرده
            و تجربه‌ای فراموش‌نشدنی ایجاد می‌کند.
          </p>
        </div>
      </div>

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
              sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, (max-width:1024px) 25vw, 12.5vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {!showAll && gallery.length > 8 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700"
          >
            مشاهده کامل
          </button>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-3/4">
            <Image
              src={selectedImage}
              alt="نمایش بزرگ"
              fill
              sizes="(max-width:768px) 95vw, (max-width:1024px) 75vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
