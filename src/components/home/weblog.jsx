"use client";

import Image from "next/image";
import Link from "next/link";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function WeblogHome() {
  const Weblogs = [
    { id: 1, definition: "نما و محوطه", image: "1" },
    { id: 2, definition: "تجاری و اداری", image: "2" },
    { id: 3, definition: "داخلی و دکوراسیون", image: "3" },
  ];

  return (
    <div
      className="w-full flex flex-col py-[40px] text-white"
      dir="rtl"
      id="blog"
    >
      <div className="w-full py-2 flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-right gap-4 px-4">
          <p className="text-green-600 text-2xl sm:text-3xl w-full">
            بخشی از رزومه و دستاوردهای ما
          </p>
          <p className="text-black text-xl sm:text-3xl font-bold w-full sm:w-auto">
            پروژه‌ها و تخصص‌های ما را بهتر بشناسید
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-4">
        {Weblogs.map((item) => (
          <Link key={item.id} href={`/resume/${item.id}`}>
            <div className="w-full flex flex-col items-center cursor-pointer bg-gray-500 rounded-lg overflow-hidden h-full">
              {/* تصویر */}
              <div className="w-full h-48 sm:h-52 lg:h-56 relative">
                <Image
                  src={`${PUBLIC_BASE}/images/weblogs/image${item.image}.jpg`}
                  alt={item.definition}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover"
                />
              </div>

              {/* متن */}
              <div className="mt-2 p-2 text-center sm:text-right h-16 flex items-center justify-center">
                <p className="text-white text-sm sm:text-base">
                  {item.definition}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
