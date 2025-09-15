"use client";
import Header from "./../Headers";
import { Plus,Heart } from "lucide-react";
import { useCartStore } from "@/zustand/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlistStore } from "@/zustand/favoritesStore";
const specialProducts = [
  {
    id: 101, 
    name: "قرنیز ویژه",
    price: 650000,
    image: "/images/products/thermowall-skywalls1.jpg",
    description: "قرنیز مرغوب با طراحی ویژه"
  },
  {
    id: 102, 
    name: "پارکت لوکس",
    price: 850000,
    image: "/images/products/thermowall-skywalls1.jpg",
    description: "پارکت درجه یک با گارانتی 10 ساله"
  },
  {
    id: 103, 
    name: "کاغذ دیواری طرح دار",
    price: 750000,
    image: "/images/products/thermowall-skywalls1.jpg",
    description: "کاغذ دیواری ضد آب و ضد خش"
  }
];

const allProducts = [
  {
    id: 1, 
    name: "پارکت",
    price: 500000,
    image: "/images/products/parket1.jpg",
    description: "توضیحات محصول"
  },
  {
    id: 2, 
    name: "کاغذ دیواری",
    price: 500000,
    image: "/images/products/wallpaper.jpg",
    description: "توضیحات محصول"
  },
  {
    id: 3, 
    name: "قرنیز",
    price: 500000,
    image: "/images/products/garniz2.jpg",
    description: "توضیحات محصول"
  },
  {
    id: 4, 
    name: "کف پوش",
    price: 500000,
    image: "/images/products/parket.jpg",
    description: "توضیحات محصول"
  },
  {
    id: 5, 
    name: "PVC",
    price: 500000,
    image: "/images/products/PVC.jpg",
    description: "توضیحات محصول"
  },
  {
    id: 6, 
    name: "ماربل",
    price: 500000,
    image: "/images/products/marble.jpg",
    description: "توضیحات محصول"
  },
];

const ProductCard = ({ product }) => {
  const { addItem, items } = useCartStore();
  const itemInCart = items.find(item => item.id === product.id);
  const quantity = itemInCart?.quantity || 0;

  const isFavorite = wishlistItems.find
  return (
    <motion.div 
      className="border rounded p-4 shadow hover:shadow-lg transition"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <h3 className="font-semibold text-xl text-end">{product.name}</h3>
      <p className="text-sm text-gray-600 text-end">{product.description}</p>
      <p className="text-red-500 font-bold mt-2 text-end">
        {product.price.toLocaleString()} تومان
      </p>

      <div className="flex gap-2 mt-4 justify-between">
        <button className="border rounded-2xl text-center py-1 px-3 hover:bg-gray-100">
          مشاهده کالا
        </button>

        <motion.button
          onClick={() => addItem(product)}
          className={`
            relative
            flex items-center justify-center
            w-10 h-10
            text-white
            rounded-full
            ${quantity > 0 ? 'bg-green-700' : 'bg-green-600 hover:bg-green-700'}
          `}
          whileTap={{ scale: 0.9 }}
          aria-label={quantity > 0 ? `${quantity} عدد در سبد` : "افزودن به سبد خرید"}
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
};

export default function FirstProduct() {
  return (
    <>
      <Header />
      <section className="bg-gray-300 font-bold text-center py-20 mb-8">
        <h1 className="text-4xl font-bold text-green-900 mb-2">
          به فروشگاه ما خوش آمدید
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-12">
        <h1 className="text-2xl font-semibold text-right mb-5">
          محصولات ویژه ما
        </h1>

        
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isFeatured={true}
            />
          ))}
        </div>

        <section className="flex items-center justify-center font-bold py-20 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">تمام محصولات ما</h1>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}