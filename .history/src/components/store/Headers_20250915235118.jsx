"use client";
import Link from "next/link";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useSearchStore } from "@/zustand/Search";
import { useLoginStore } from "@/zustand/loginStore";
import { useCartStore } from "@/zustand/cartStore";
import { useMenuStore } from "@/zustand/store";
import { useWishlistStore } from "@/zustand/favoritesStore";
function IconButton({ icon, ariaLabel, onClick, hasBadge = false, badgeCount = 0 }) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="text-gray-700 hover:text-black transition duration-200 relative cursor-pointer"
    >
      {icon}
      {hasBadge && badgeCount > 0 && (
        <span className="
          absolute -top-2 -right-2
          bg-red-500 text-white
          text-xs font-bold
          rounded-full
          w-5 h-5
          flex items-center justify-center
          cursor-pointer
        ">
          {badgeCount}
        </span>
      )}
    </button>
  );
}

export default function Header() {
  const { isOpen, openMenu, closeMenu } = useMenuStore();
  const navItems = [
    { title: "home", textTitle: "خانه", href: "#" },
    { title: "portfolio", textTitle: "چرا ما ", href: "#" },
    ,
    { title: "about", textTitle: " فروشگاه", href: "#" },
    {title: "product tracking", textTitle:"پیگیری سفارش", href:"#"}
  ];

  const openSearch = useSearchStore((state) => state.openSearch);
  const openLogin = useLoginStore((state) => state.openLogin);
  const openCart = useCartStore((state) => state.openCart);
  const cartItems = useCartStore((state) => state.items);
  
  // محاسبه تعداد کل محصولات در سبد خرید
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
   // اضافه کردن این خط برای دسترسی به علاقه‌مندی‌ها
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  
 
 
  
  // محاسبه تعداد محصولات در علاقه‌مندی‌ها
  const totalWishlistItems = wishlistItems.length;
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-extrabold text-gray-800 hover:text-green-700 transition cursor-pointer">
          <Link href="/">granddesign</Link>
        </div>

        <nav className="hidden md:flex gap-6 text-sm md:text-lg font-medium text-emerald-600">
          <Link className="hover:text-black transition cursor-pointer" href="/">
            خانه
          </Link>
          <Link className="hover:text-black transition cursor-pointer" href="/why-us">
            چرا ما
          </Link>
          <Link className="hover:text-black transition cursor-pointer" href="/store">
            فروشگاه
          </Link>
          <Link className="hover:text-black transition cursor-pointer" href="/">
            پیگیری سفارش
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

          {/* تغییر این بخش برای آیکون قلب */}
          <Link href="/favorites" className="cursor-pointer relative">
            <IconButton 
              icon={<Heart size={20} />} 
              ariaLabel="علاقه‌مندی‌ها"
              hasBadge={true}
              badgeCount={totalWishlistItems}
            />
          </Link>
          
          <IconButton
            icon={<ShoppingCart size={20} />}
            ariaLabel="سبد خرید"
            onClick={openCart}
            hasBadge={true}
            badgeCount={totalItems}
          />
        </div>
          {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={openMenu}
          className="text-gray-400 focus:outline-none  "
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
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
    </header>
  );
}