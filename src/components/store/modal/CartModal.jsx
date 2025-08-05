"use client";

import { useCartStore } from "@/zustand/cartStore";
import { X } from "lucide-react";
import { useRef } from "react";

export default function CartModal() {
  const { isCartOpen, closeCart, items } = useCartStore();
  const modalRef = useRef();

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      closeCart();
    }
  };

  if (!isCartOpen) return null;

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-xl relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 left-3 text-gray-600 hover:text-black"
          onClick={closeCart}
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">سبد خرید</h2>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center border rounded-lg p-4 gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    تعداد: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    قیمت واحد: {item.price.toLocaleString()} تومان
                  </p>
                </div>
                <div className="font-bold text-emerald-600">
                  {(item.price * item.quantity).toLocaleString()} تومان
                </div>
              </div>
            ))}

            <div className="border-t pt-4 mt-6 text-lg font-bold flex justify-between">
              <span>قیمت نهایی:</span>
              <span className="text-emerald-600">
                {totalPrice.toLocaleString()} تومان
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
