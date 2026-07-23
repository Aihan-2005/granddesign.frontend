"use client";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { useRef } from "react";

export default function WeblogHome() {
  const scrollRef = useRef(null);
  
  const visiblePosts = blogPosts.slice(0, 6);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-white">مقالات و راهنماها</h2>
          <p className="text-gray-400">آخرین مطالب در زمینه طراحی و دکوراسیون داخلی</p>
        </div>
        <Link 
          href="/blog" 
          className="bg-gradient-to-r from-green-700 to-green-800 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          مشاهده همه مقالات
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('right')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition hidden lg:block"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll('left')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-800 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition hidden lg:block"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div 
          ref={scrollRef}
          className="changeScroll flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'thin' }}
        >
          {visiblePosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group block flex-shrink-0 w-[350px] md:w-[380px]"
            >
              <div className="bg-green-500 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-green-700">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-green-700">
                    <span className="text-sm text-gray-400">
                      {post.author}
                    </span>
                    <span className="text-green-400 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      ادامه مطلب
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:hidden">
        {visiblePosts.slice(0, 4).map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="bg-green-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-green-700">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-4 text-sm text-green-400 mb-3">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-green-300 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
