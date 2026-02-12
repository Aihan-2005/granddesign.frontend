"use client";
import CategoryCard from "./CategoryCard";

export default function CategoryList({ categories = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} category={cat} showChildrenInline={false} />
      ))}
    </div>
  );
}
