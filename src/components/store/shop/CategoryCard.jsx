"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CategoryCard = forwardRef(
  ({ category, level = 0, showChildrenInline = true }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`border rounded p-4 shadow hover:shadow-lg transition relative`}
        whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-200 flex items-center justify-center">
          {category.image ? (
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="text-gray-400 text-center">
              <p className="text-sm">تصویر دسته‌بندی</p>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-xl text-center">{category.name}</h3>
        {category.description && (
          <p className="text-sm text-gray-600 text-center">
            {category.description}
          </p>
        )}

        <div className="flex gap-2 mt-5 justify-between">
          <Link
            href={
              category.slug
                ? `/store/${category.slug}`
                : `/store/${category.id}`
            }
            className="border rounded-2xl text-center py-2 px-3 hover:bg-gray-100"
          >
            مشاهده محصولات
          </Link>
        </div>
      </motion.div>
    );
  },
);

CategoryCard.displayName = "CategoryCard";

export default CategoryCard;
