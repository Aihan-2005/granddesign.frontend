"use client";
import { Plus, Heart } from "lucide-react";
import { useCartStore } from "@/zustand/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlistStore } from "@/zustand/favoritesStore";
import { forwardRef } from "react";

const ProductCard = forwardRef(({ product, isActive }, ref) => {
  const { addItem, items } = useCartStore();
  const { toggleWishlistItem, wishlistItems } = useWishlistStore();

  const itemInCart = items.find((item) => item.id === product.id);
  const quantity = itemInCart?.quantity || 0;

  const isFavorite = wishlistItems.find((item) => item.id === product.id);

  return (
    <motion.div
      ref={ref}
      className={`border rounded p-4 shadow hover:shadow-lg transition relative ${
        isActive ? "ring-3 ring-green-500" : ""
      }`}
      whileHover={{ y: -5 }}
    >
      <motion.button
        onClick={() => toggleWishlistItem(product)}
        className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-md"
        whileTap={{ scale: 0.9 }}
        aria-label={
          isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
        }
      >
        <Heart
          size={20}
          className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}
        />
      </motion.button>

      <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-200 flex items-center justify-center">
        {product.image ? (
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div className="text-gray-400 text-center">
            <p className="text-sm">تصویر محصول</p>
          </div>
        )}
      </div>

      <h3 className="font-semibold text-xl text-end">{product.name}</h3>
      <p className="text-sm text-gray-600 text-end">{product.description}</p>
      <p className="text-red-500 font-bold mt-2 text-end" dir="rtl">
        {product.price.toLocaleString()} تومان
      </p>

      <div className="flex gap-2 mt-4 justify-between">
        <button className="border rounded-2xl text-center py-1 px-3 hover:bg-gray-100">
          مشاهده محصول
        </button>

        <motion.button
          onClick={() => addItem(product)}
          className={`
            relative
            flex items-center justify-center
            w-10 h-10
            text-white
            rounded-full
            ${quantity > 0 ? "bg-green-700" : "bg-green-600 hover:bg-green-700"}
          `}
          whileTap={{ scale: 0.9 }}
          aria-label={
            quantity > 0 ? `${quantity} عدد در سبد` : "افزودن به سبد خرید"
          }
        >
          <AnimatePresence mode="wait">
            {quantity > 0 ? (
              <motion.span
                key={`count-${product.id}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="font-bold text-sm"
              >
                {quantity}
              </motion.span>
            ) : (
              <motion.span
                key={`plus-${product.id}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Plus size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
});

ProductCard.displayName = "ProductCard";

export default function ProductsList({ products = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isActive={false}
          ref={null}
        />
      ))}
    </div>
  );
}
