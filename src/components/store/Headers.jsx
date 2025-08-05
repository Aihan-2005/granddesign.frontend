"use client";

import Link from "next/link";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useSearchStore } from "@/zustand/Search";
import { useLoginStore } from "@/zustand/loginStore";
import { useCartStore } from "@/zustand/cartStore";

function IconButton({ icon, ariaLabel, onClick }) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="text-gray-700 hover:text-black transition duration-200"
    >
      {icon}
    </button>
  );
}

export default function Header() {
  const openSearch = useSearchStore((state) => state.openSearch);
  const openLogin = useLoginStore((state) => state.openLogin);
  const openCart = useCartStore((state) => state.openCart);

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-extrabold text-gray-800 hover:text-green-700 transition">
          <Link href="/">granddesign</Link>
        </div>

        <nav className="hidden md:flex gap-6 text-sm md:text-lg font-medium text-emerald-600">
          <Link className="hover:text-black transition" href="/">
            خانه
          </Link>
          <Link className="hover:text-black transition" href="/">
            چرا ما
          </Link>
          <Link className="hover:text-black transition" href="/store">
            فروشگاه
          </Link>
          <Link className="hover:text-black transition" href="/">
            وبلاگ
          </Link>
          <Link className="hover:text-black transition" href="/">
            ارتباط با ما
          </Link>
        </nav>

        <div className="flex items-center gap-4 text-gray-600">
          <IconButton
            icon={<Search size={20} />}
            ariaLabel="جستجو"
            onClick={openSearch}
          />

          <IconButton
            icon={<User size={20} />}
            ariaLabel="ورود"
            onClick={openLogin}
          />

          <Link href="/favorites">
            <IconButton icon={<Heart size={20} />} ariaLabel="علاقه‌مندی‌ها" />
          </Link>
          <IconButton
            icon={<ShoppingCart size={20} />}
            ariaLabel="سبد خرید"
            onClick={openCart}
          />
        </div>
      </div>
    </header>
  );
}
