"use client";
import Image from "next/image";
import Link from "next/link";
import { useMenuStore } from "@/zustand/store";

export default function Navbar() {
  const { isOpen, openMenu, closeMenu } = useMenuStore();

  const navItems = [
    { title: "blog", textTitle: "وبلاگ", href: "#blog" },
    { title: "portfolio", textTitle: "انیمیشن", href: "#portfolio" },
    {
      title: "services",
      textTitle: "VR360",
      href: "https://momento360.com/e/uc/915652cee28649f7bbc15f57e53f27f4?utm_campaign=embed&utm_source=other&size=large&display-plan=true",
    },
    { title: "about", textTitle: "خدمات ما", href: "#about" },
  ];

  return (
    <nav
      className="fixed top-0 z-40 flex w-full items-center justify-between px-4 sm:px-8 shadow-lg bg-gradient-to-r from-gray-600/90 to-transparent"
      style={{ backdropFilter: "blur(6px)" }}
    >
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 lg:ml-20 md:ml-10">
        <Link
          href="/store"
          className="rounded-md bg-green-600 px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          فروشگاه
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="relative text-gray-300 font-medium transition-colors duration-300 group"
          >
            {item.textTitle}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/20241027_175834.png"
          alt="لوگو آرمان هوم"
          width={60}
          height={60}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={openMenu}
          className="text-white focus:outline-none"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-gray-500 dark:bg-gray-600 text-black shadow-lg transform transition-transform duration-300 z-50 p-4 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          منو
        </h5>
        <button
          onClick={closeMenu}
          className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-900 dark:hover:text-black rounded-lg text-sm w-8 h-8 flex items-center justify-center"
          aria-controls="drawer-navigation"
          aria-label="Close menu"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        <ul className="py-4 space-y-2 font-medium">
          <li>
            <Link
              href="/store"
              className="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="flex-1 ms-3 text-right">فروشگاه</span>
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
                <span className="flex-1 ms-3 text-right">{item.textTitle}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}