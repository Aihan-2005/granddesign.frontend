import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { title: "خانه", href: "/" },
    { title: "درباره ما", href: "/about" },
    { title: "خدمات ما", href: "/services" },
    { title: "پروژه های ما", href: "/projects" },
    { title: "جدیدترین خبرها از ما", href: "/news" },
    { title: "ارتباط با ما", href: "/contact" },
  ];

  const services = [
    "طراحی داخلی",
    "طراحی وبسایت",
    "توسعه نرم افزار",
    "مشاوره فنی",
    "بهینه سازی سئو",
    "پشتیبانی فنی",
  ];

  return (
    <footer className="bg-black mt-[10px] text-gray-300 py-10 px-6 w-[100%] mx-auto
     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-end items-end text-right md:text-start">
      {/* ستون 1 - جدیدترین پروژه‌ها */}
      <div className="flex flex-col gap-4">
        <h3 className="text-white font-semibold text-lg mb-3">جدیدترین پروژه های ما</h3>
        <p className="text-sm">همین الان تماس بگیرید و شروع کنید به همکاری با ما</p>
        <div className="flex gap-2 mt-3">
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="bg-gray-800 border border-gray-600 rounded-md px-3 py-2 h-[50px] w-[200px] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-amber-500"
          />
          <button className="bg-green-500 text-white rounded-md  h-[50px] w-[100px] font-semibold hover:bg-green-600 transition">
            عضو شدن
          </button>
        </div>
        <div className="flex gap-3 mt-4">
          {/* دایره‌ها (شبکه‌های اجتماعی) */}
          <div className="w-8 h-8 rounded-full bg-gray-600"></div>
          <div className="w-8 h-8 rounded-full bg-gray-600"></div>
        </div>
      </div>

      {/* ستون 2 - خدمات ما */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">خدمات ما</h3>
        <ul className="flex flex-col gap-2 text-sm">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>

      {/* ستون 3 - لینک‌های ارتباطی */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">لینک های ارتباطی با ما</h3>
        <ul className="flex flex-col gap-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className="hover:text-amber-500 transition-colors">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ستون 4 - تماس */}
<div>
  <h3 className="text-white font-semibold text-lg mb-4">با ما تماس بگیرید</h3>
  <div className="text-sm space-y-4">
    <div className="flex items-center gap-2">
      {/* آیکون تلفن */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-amber-500 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.252 1.09l-2.257 2.257a11.042 11.042 0 005.516 5.516l2.257-2.257a1 1 0 011.09-.252l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <p className="font-semibold">تماس</p>
      <a href="tel:09916393684" className="text-gray-300 hover:text-amber-500 transition">
        09916393684
      </a>
    </div>
    <div className="flex items-center gap-2">
      {/* آیکون ایمیل */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-amber-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
      </svg>
      <p className="font-semibold">ایمیل</p>
      <a href="mailto:mojtaba.shabani2580@gmail.com" className="text-gray-300 hover:text-amber-500 transition">
        mojtaba.shabani2580@gmail.com
      </a>
    </div>
    <div className="flex items-center gap-2">
      {/* آیکون مکان */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-amber-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4-4 6-8 6-11a6 6 0 10-12 0c0 3 2 7 6 11z" />
      </svg>
      <p className="font-semibold">آدرس</p>
      <p>لاهیجان خیابان کارگر</p>
    </div>
  </div>
</div>


    </footer>
  );
}
