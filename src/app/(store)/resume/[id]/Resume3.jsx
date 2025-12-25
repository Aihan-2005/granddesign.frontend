'use client';

import { useState } from "react";
import Image from "next/image";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function Resume1() {
  const gallery = [
    { id: 1, src: `${PUBLIC_BASE}/dakheli/azizi-kisom/azizz (10).jpg`, alt: "نما و محوطه 1" },
    { id: 2, src: `${PUBLIC_BASE}/dakheli/azizi-kisom/azizz (11).jpg`, alt: "نما و محوطه 2" },
    { id: 3, src: `${PUBLIC_BASE}/dakheli/azizi-kisom/azizz (12).jpg`, alt: "نما و محوطه 3" },
    { id: 4, src: `${PUBLIC_BASE}/dakheli/azizi-kisom/azizz (19).jpg`, alt: "نما و محوطه 4" },
    { id: 5, src: `${PUBLIC_BASE}/dakheli/azizi-kisom/azizz (3).jpg`, alt: "نما و محوطه 5" },

    { id: 6, src: `${PUBLIC_BASE}/dakheli/bazdar finall/11.jpg`, alt: "نما و محوطه 6" },
    { id: 7, src: `${PUBLIC_BASE}/dakheli/bazdar finall/14.jpg`, alt: "نما و محوطه 7" },
    { id: 8, src: `${PUBLIC_BASE}/dakheli/bazdar finall/17.jpg`, alt: "نما و محوطه 8" },
    { id: 9, src: `${PUBLIC_BASE}/dakheli/bazdar finall/19.jpg`, alt: "نما و محوطه 9" },
    { id: 10, src: `${PUBLIC_BASE}/dakheli/bazdar finall/2.jpg`, alt: "نما و محوطه 10" },
    { id: 11, src: `${PUBLIC_BASE}/dakheli/bazdar finall/21.jpg`, alt: "نما و محوطه 11" },
    { id: 12, src: `${PUBLIC_BASE}/dakheli/bazdar finall/24.jpg`, alt: "نما و محوطه 12" },
    { id: 13, src: `${PUBLIC_BASE}/dakheli/bazdar finall/25.jpg`, alt: "نما و محوطه 13" },
    { id: 14, src: `${PUBLIC_BASE}/dakheli/bazdar finall/26.jpg`, alt: "نما و محوطه 14" },
    { id: 15, src: `${PUBLIC_BASE}/dakheli/bazdar finall/28.jpg`, alt: "نما و محوطه 15" },
    { id: 16, src: `${PUBLIC_BASE}/dakheli/bazdar finall/5.jpg`, alt: "نما و محوطه 16" },
    { id: 17, src: `${PUBLIC_BASE}/dakheli/bazdar finall/8.jpg`, alt: "نما و محوطه 17" },

    { id: 18, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/v2.jpg`, alt: "نما و محوطه 18" },
    { id: 19, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/v3.jpg`, alt: "نما و محوطه 19" },
    { id: 20, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/v4.jpg`, alt: "نما و محوطه 20" },
    { id: 21, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/v6.jpg`, alt: "نما و محوطه 21" },
    { id: 22, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/v9.jpg`, alt: "نما و محوطه 22" },

    { id: 23, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/va (1).jpg`, alt: "نما و محوطه 23" },
    { id: 24, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/va (2).jpg`, alt: "نما و محوطه 24" },
    { id: 25, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/va (3).jpg`, alt: "نما و محوطه 25" },
    { id: 26, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/va (5).jpg`, alt: "نما و محوطه 26" },
    { id: 27, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/vo5.jpg`, alt: "نما و محوطه 27" },

    { id: 28, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/edit hedayat/p4.jpg`, alt: "نما و محوطه 28" },
    { id: 29, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/edit hedayat/p5.jpg`, alt: "نما و محوطه 29" },
    { id: 30, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/edit hedayat/p6.jpg`, alt: "نما و محوطه 30" },
    { id: 31, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/edit hedayat/p7.jpg`, alt: "نما و محوطه 31" },
    { id: 32, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/edit hedayat/p8.jpg`, alt: "نما و محوطه 32" },
    { id: 33, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/edit hedayat/p9'.jpg`, alt: "نما و محوطه 33" },

    { id: 34, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/PENT/P5.jpg`, alt: "نما و محوطه 34" },
    { id: 35, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/PENT/P6.jpg`, alt: "نما و محوطه 35" },
    { id: 36, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/PENT/p8.jpg`, alt: "نما و محوطه 36" },
    { id: 37, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/PENT/p9.jpg`, alt: "نما و محوطه 37" },
    { id: 38, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/PENT/pt1.jpg`, alt: "نما و محوطه 38" },
    { id: 39, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/PENT/pt2.jpg`, alt: "نما و محوطه 39" },
    { id: 40, src: `${PUBLIC_BASE}/dakheli/hedayat edited renders/PENT/pt3.jpg`, alt: "نما و محوطه 40" },

    { id: 41, src: `${PUBLIC_BASE}/dakheli/kargare 5, aqa bozorgi(9)/enhanced-image (26).jpg`, alt: "نما و محوطه 41" },
    { id: 42, src: `${PUBLIC_BASE}/dakheli/kargare 5, aqa bozorgi(9)/enhanced-image (29).jpg`, alt: "نما و محوطه 42" },
    { id: 43, src: `${PUBLIC_BASE}/dakheli/kargare 5, aqa bozorgi(9)/enhanced-image (32).jpg`, alt: "نما و محوطه 43" },
    { id: 44, src: `${PUBLIC_BASE}/dakheli/kargare 5, aqa bozorgi(9)/enhanced-image (33).jpg`, alt: "نما و محوطه 44" },
    { id: 45, src: `${PUBLIC_BASE}/dakheli/kargare 5, aqa bozorgi(9)/enhanced-image (34).jpg`, alt: "نما و محوطه 45" },
    { id: 46, src: `${PUBLIC_BASE}/dakheli/kargare 5, aqa bozorgi(9)/enhanced-image (35).jpg`, alt: "نما و محوطه 46" },
    { id: 47, src: `${PUBLIC_BASE}/dakheli/kargare 5, aqa bozorgi(9)/z.jpg`, alt: "نما و محوطه 47" },

    { id: 48, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (1).jpg`, alt: "نما و محوطه 48" },
    { id: 49, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (10).jpg`, alt: "نما و محوطه 49" },
    { id: 50, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (11).jpg`, alt: "نما و محوطه 50" },
    { id: 51, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (13).jpg`, alt: "نما و محوطه 51" },
    { id: 52, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (14).jpg`, alt: "نما و محوطه 52" },
    { id: 53, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (15).jpg`, alt: "نما و محوطه 53" },
    { id: 54, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (16).jpg`, alt: "نما و محوطه 54" },
    { id: 55, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (17).jpg`, alt: "نما و محوطه 55" },
    { id: 56, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (18).jpg`, alt: "نما و محوطه 56" },
    { id: 57, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (19).jpg`, alt: "نما و محوطه 57" },
    { id: 58, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (2).jpg`, alt: "نما و محوطه 58" },
    { id: 59, src: `${PUBLIC_BASE}/dakheli/najafi-4de/dkhnjfff (20).jpg`, alt: "نما و محوطه 59" },

    { id: 60, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/10e.jpg`, alt: "نما و محوطه 60" },
    { id: 61, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/11e.jpg`, alt: "نما و محوطه 61" },
    { id: 62, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/12e.jpg`, alt: "نما و محوطه 62" },
    { id: 63, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/1e.jpg`, alt: "نما و محوطه 63" },
    { id: 64, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/2e.jpg`, alt: "نما و محوطه 64" },
    { id: 65, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/4e.jpg`, alt: "نما و محوطه 65" },
    { id: 66, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/5e.jpg`, alt: "نما و محوطه 66" },
    { id: 67, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/6e.jpg`, alt: "نما و محوطه 67" },
    { id: 68, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/7e.jpg`, alt: "نما و محوطه 68" },
    { id: 69, src: `${PUBLIC_BASE}/dakheli/narnj-rendrs/9e.jpg`, alt: "نما و محوطه 69" },

    { id: 70, src: `${PUBLIC_BASE}/dakheli/penttttt-bakhshi/b1.jpg`, alt: "نما و محوطه 70" },
    { id: 71, src: `${PUBLIC_BASE}/dakheli/penttttt-bakhshi/b2.jpg`, alt: "نما و محوطه 71" },
    { id: 72, src: `${PUBLIC_BASE}/dakheli/penttttt-bakhshi/b3.jpg`, alt: "نما و محوطه 72" },
    { id: 73, src: `${PUBLIC_BASE}/dakheli/penttttt-bakhshi/b4.jpg`, alt: "نما و محوطه 73" },
    { id: 74, src: `${PUBLIC_BASE}/dakheli/penttttt-bakhshi/b5.jpg`, alt: "نما و محوطه 74" },

    { id: 75, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/10v.jpg`, alt: "نما و محوطه 75" },
    { id: 76, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/11a.jpg`, alt: "نما و محوطه 76" },
    { id: 77, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/13a.jpg`, alt: "نما و محوطه 77" },
    { id: 78, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/15a.jpg`, alt: "نما و محوطه 78" },
    { id: 79, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/3aa.jpg`, alt: "نما و محوطه 79" },
    { id: 80, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/v s (10).jpg`, alt: "نما و محوطه 80" },
    { id: 81, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/v s (13).jpg`, alt: "نما و محوطه 81" },
    { id: 82, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/v s (14).jpg`, alt: "نما و محوطه 82" },
    { id: 83, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/v s (2).jpg`, alt: "نما و محوطه 83" },
    { id: 84, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/v s (4).jpg`, alt: "نما و محوطه 84" },
    { id: 85, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/v s (6).jpg`, alt: "نما و محوطه 85" },
    { id: 86, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/v s (7).jpg`, alt: "نما و محوطه 86" },
    { id: 87, src: `${PUBLIC_BASE}/dakheli/sakhteman salman farsi, tomad/v s (9).jpg`, alt: "نما و محوطه 87" },

    { id: 88, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/komdpsr (10).jpg`, alt: "نما و محوطه 88" },
    { id: 89, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/komdpsr (4).jpg`, alt: "نما و محوطه 89" },
    { id: 90, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/komdpsr (8).jpg`, alt: "نما و محوطه 90" },
    { id: 91, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/komod azad.jpg`, alt: "نما و محوطه 91" },
    { id: 92, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/mastar a.jpg`, alt: "نما و محوطه 92" },
    { id: 93, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/master b.jpg`, alt: "نما و محوطه 93" },
    { id: 94, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/master1.jpg`, alt: "نما و محوطه 94" },
    { id: 95, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/mat1.jpg`, alt: "نما و محوطه 95" },
    { id: 96, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/mtbkh (2).jpg`, alt: "نما و محوطه 96" },
    { id: 97, src: `${PUBLIC_BASE}/dakheli/sazesh-kargarrr/rrrr (1).jpg`, alt: "نما و محوطه 97" },

    { id: 98, src: `${PUBLIC_BASE}/dakheli/vila-saeidi-siakal/saeidiii (1).jpg`, alt: "نما و محوطه 98" },
    { id: 99, src: `${PUBLIC_BASE}/dakheli/vila-saeidi-siakal/saeidiii (15).jpg`, alt: "نما و محوطه 99" },
    { id: 100, src: `${PUBLIC_BASE}/dakheli/vila-saeidi-siakal/saeidiii (16).jpg`, alt: "نما و محوطه 100" },
    { id: 101, src: `${PUBLIC_BASE}/dakheli/vila-saeidi-siakal/saeidiii (2).jpg`, alt: "نما و محوطه 101" },
    { id: 102, src: `${PUBLIC_BASE}/dakheli/vila-saeidi-siakal/saeidiii (3).jpg`, alt: "نما و محوطه 102" },
    { id: 103, src: `${PUBLIC_BASE}/dakheli/vila-saeidi-siakal/saeidiii (4).jpg`, alt: "نما و محوطه 103" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visibleImages = showAll ? gallery : gallery.slice(0, 8);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-12 px-6" dir="rtl">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="text-right mt-5">
          <h1 className="text-3xl sm:text-4xl font-bold">داخلی و دکراسیون</h1>
          <p className="mt-2 text-gray-300 text-sm sm:text-base max-w-xl">
            خانه جایی است که بیشترین زمان زندگی‌مان را در آن سپری می‌کنیم.  
            با طراحی داخلی حرفه‌ای ما، هر لحظه حضور در خانه‌تان به تجربه‌ای دلنشین و متفاوت تبدیل می‌شود.
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
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
              alt="بزرگ شده"
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
