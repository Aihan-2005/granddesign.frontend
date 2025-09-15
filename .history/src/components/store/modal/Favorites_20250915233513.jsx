// src/app/favorites/page.jsx
"use client";
import Header from "@/components/Headers";
import { useWishlistStore } from "@/zustand/wishlistStore";
import { Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/zustand/cartStore";

export default function FavoritesPage() {
  const { wishlistItems, removeFromWishlist } = useWishlistStore();
  const { addItem } = useCartStore();

  // تابع برای اضافه کردن محصول به سبد خرید از صفحه علاقه‌مندی‌ها
  const handleAddToCart = (product) => {
    addItem(product);
  };

  if (wishlistItems.length === 0) {
    return (
      <>
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">لیست علاقه‌مندی‌ها</h1>
            <p className="text-gray-600 mb-8">هنوز هیچ محصولی به علاقه‌مندی‌های شما اضافه نشده است.</p>
            <Link 
              href="/store" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 inline-flex items-center"
            >
              بازگشت به فروشگاه
              <ArrowRight size={16} className="mr-2" />
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-16 mt-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">لیست علاقه‌مندی‌های شما</h1>
          
          <div className="grid gap-4">
            {wishlistItems.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition duration-200">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative w-20 h-20">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <p className="text-red-500 font-bold text-lg">
                      {product.price.toLocaleString()} تومان
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* دکمه اضافه به سبد خرید */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition duration-200"
                    aria-label="افزودن به سبد خرید"
                  >
                    <ShoppingCart size={20} />
                  </button>
                  
                  {/* دکمه حذف از علاقه‌مندی‌ها */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="text-red-500 hover:text-red-700 p-2 transition duration-200"
                    aria-label="حذف از علاقه‌مندی‌ها"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center pt-4 border-t">
            <Link 
              href="/store" 
              className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
            >
              <ArrowRight size={16} className="ml-2" />
              ادامه خرید
            </Link>
            
            <span className="text-gray-600">
              تعداد محصولات: {wishlistItems.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}