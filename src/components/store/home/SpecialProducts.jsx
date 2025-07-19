"use client";

import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "پارکت",
    description: "پرفروش‌ترین انتخاب هفته",
    image: "/images/slider1.jpg",
  },
  {
    id: 2,
    title: "قرنیز",
    description: "همیشه انتخاب اول مشتری‌ها",
    image: "/images/slider1.jpg",
  },
  {
    id: 3,
    title: "کاغذ دیواری",
    description: "با کیفیتی که لمس میشه",
    image: "/images/slider1.jpg",
  },
];

export default function SpecialProducts() {
  return (
    <section className="w-full min-h-screen bg-gray-500 flex justify-center pt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl w-full px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          پرفروش‌ترین‌ها و پیشنهادهای ویژه‌ای که خریدارها عاشقشون شدن
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div
                className="h-64 bg-gray-200 rounded-xl mb-5 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <h3 className="text-xl font-semibold text-emerald-700">
                {product.title}
              </h3>
              <p className="text-sm text-emerald-700 mt-2">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
