import Header from "@/components/store/Headers";
import { getCategories } from "@/apis/categories";
import { getProductsByCategory } from "@/apis/products";
import { findCategoryBySlug, isLeafCategory } from "@/lib/categories";
import CategoryList from "@/components/store/shop/CategoryList";
import ProductsList from "@/components/store/shop/ProductsList";

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  // Fetch data
  const categories = await getCategories();
  const products = await getProductsByCategory(slug);

  // Find category by slug
  const category = findCategoryBySlug(categories, slug);

  // Handle category not found
  if (!category) {
    return (
      <>
        <Header />
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-500">
              دسته‌بندی پیدا نشد
            </h1>
          </div>
        </section>
      </>
    );
  }

  const isLeaf = isLeafCategory(category);
  const childrenList = isLeaf ? [] : (category.children || []).filter(Boolean);

  return (
    <>
      <Header />
      <section className="bg-gray-300 font-bold text-center py-20 mb-8">
        <h1 className="text-4xl font-bold text-green-900 mb-2">
          {category.name}
        </h1>
        {category.description && (
          <p className="text-lg text-gray-700">{category.description}</p>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-12">
        {isLeaf ? (
          <>
            <h1 className="text-2xl font-semibold text-right mb-5">
              محصولات {category.name}
            </h1>
            {products && products.length > 0 ? (
              <ProductsList products={products} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">محصولی یافت نشد</p>
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-right mb-5">
              زیردسته‌های {category.name}
            </h1>
            {childrenList.length > 0 ? (
              <CategoryList categories={childrenList} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">زیردسته‌ای یافت نشد</p>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
