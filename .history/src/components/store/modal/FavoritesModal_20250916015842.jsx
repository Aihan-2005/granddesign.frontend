
"use client";
import { useWishlistStore } from "@/zustand/favoritesStore";
import { useCartStore } from "@/zustand/cartStore";
import { X, Trash2, Plus } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function FavoritesModal() {
  const { isFavoritesOpen, closeFavorites, wishlistItems, removeFromWishlist } = useWishlistStore();
  const { addItem } = useCartStore();
  const modalRef = useRef();

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      closeFavorites();
    }
  };

  if (!isFavoritesOpen) return null;

  const handleAddToCart = (product) => {
    addItem(product);
    // می‌توانید یک toast یا پیام موفقیت هم اضافه کنید
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-xl relative flex flex-col" style={{ maxHeight: "90vh" }}>
        <button
          className="absolute top-3 left-3 text-gray-600 hover:text-black"
          onClick={closeFavorites}
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">لیست علاقه‌مندی‌ها</h2>

        <div className="overflow-y-auto flex-1 mb-4 pr-2">
          {wishlistItems.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <p className="text-lg">لیست علاقه‌مندی‌های شما خالی است.</p>
              <p className="text-sm mt-2">محصولاتی که به علاقه‌مندی‌ها اضافه می‌کنید در اینجا نمایش داده می‌شوند.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        قیمت: {item.price.toLocaleString()} تومان
                      </p>
                    </div>
                    <div className="font-bold text-emerald-600">
                      {item.price.toLocaleString()} تومان
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 py-2 flex items-center justify-center gap-2 text-green-600 border border-green-100 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <Plus size={16} />
                      <span>افزودن به سبد خرید</span>
                    </button>
                    
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="flex-1 py-2 flex items-center justify-center gap-2 text-red-500 border border-red-100 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                      <span>حذف</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}