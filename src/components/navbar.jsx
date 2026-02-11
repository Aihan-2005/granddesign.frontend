"use client";

import Image from "next/image";
import Link from "next/link";
import { useMenuStore } from "@/zustand/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { PUBLIC_BASE } from "@/config/publicBase";

export default function Navbar() {
  const { isOpen, openMenu, closeMenu } = useMenuStore();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { title: "blog", textTitle: "رزومه ما", href: "#blog" },
    { title: "portfolio", textTitle: "انیمیشن", href: "#portfolio" },
    { title: "services", textTitle: "VR360", href: "#vr-home" },
    { title: "about", textTitle: "خدمات ما", href: "#about" },
  ];

  const handleNavClick = (href) => {
    closeMenu();

    if (pathname !== "/") {
      sessionStorage.setItem("scrollToHash", href);
      router.push("/");
    } else {
      scrollToSection(href);
    }
  };

  const scrollToSection = (hash) => {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  useEffect(() => {
    if (pathname === "/") {
      const hash = sessionStorage.getItem("scrollToHash");
      if (hash) {
        scrollToSection(hash);
        sessionStorage.removeItem("scrollToHash");
      }

      if (window.location.hash) {
        scrollToSection(window.location.hash);
      }
    }
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 z-40 flex w-full items-center justify-between px-4 sm:px-8 shadow-lg bg-gradient-to-r from-gray-600/90 to-transparent"
      style={{ backdropFilter: "blur(6px)" }}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 lg:ml-20 md:ml-10">
        <Link
          href="/store"
          className="rounded-md bg-green-600 px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
        >
          فروشگاه
        </Link>

        {navItems.map((item) => (
          <button
            key={item.title}
            onClick={() => handleNavClick(item.href)}
            className="relative text-gray-300 font-medium transition-colors duration-300 group hover:text-white cursor-pointer"
          >
            {item.textTitle}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          onClick={() => {
            closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <Image
            src={`https://ftp.granddesign.ir/images/20241027_175834.png`}
            alt="لوگو آرمان هوم"
            width={60}
            height={60}
            priority
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={openMenu}
          className="text-white text-2xl cursor-pointer"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-gray-500 text-black shadow-lg transform transition-transform duration-300 z-50 p-4 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h5 className="text-base font-semibold uppercase text-gray-400">
          منو
        </h5>

        <button
          onClick={closeMenu}
          className="absolute top-2.5 right-2.5 text-gray-400 hover:bg-gray-200 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          ✕
        </button>

        <ul className="py-4 space-y-2 font-medium">
          <li>
            <Link
              href="/store"
              onClick={closeMenu}
              className="flex items-center p-2 rounded-lg hover:bg-gray-400"
            >
              <span className="flex-1 text-right">فروشگاه</span>
            </Link>
          </li>

          {navItems.map((item) => (
            <li key={item.title}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="flex items-center p-2 rounded-lg hover:bg-gray-400 w-full"
              >
                <span className="flex-1 text-right">
                  {item.textTitle}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}
