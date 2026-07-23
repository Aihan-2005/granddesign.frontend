import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "وبلاگ - مقالات طراحی داخلی و دکوراسیون",
  description: "آخرین مقالات و راهنماهای طراحی داخلی، دکوراسیون منزل و استفاده از هوش مصنوعی"
};

export default function BlogPage() {
  return (
    <div className="min-h-screen text-gray-100">
      {/* هدر صفحه */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 py-20">
        <div className="container mx-auto px-[50px]">
          <h1 className="text-5xl font-bold mb-4 text-white">وبلاگ</h1>
          <p className="text-xl text-gray-200">مقالات، راهنماها و نکات طراحی داخلی</p>
        </div>
      </div>

      {/* لیست مقالات */}
      <div className="container mx-auto px-[50px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-green-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-gray-700">
                {/* تصویر */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-700 to-purple-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* محتوا */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-green-400 mb-3">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <span className="text-sm text-gray-400 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {post.author}
                    </span>
                    <span className="text-blue-400 font-semibold">
                      مطالعه →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
