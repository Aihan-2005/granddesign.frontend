import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

// برای generate کردن صفحات استاتیک
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// برای SEO
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "مقاله یافت نشد"
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // مقالات مرتبط (غیر از مقاله فعلی)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen text-gray-100">
      {/* دکمه برگشت */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-[50px] py-4">
          <Link 
            href="/blog" 
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-semibold transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            بازگشت به وبلاگ
          </Link>
        </div>
      </div>

      {/* محتوای مقاله */}
      <article className="container mx-auto px-[50px] lg:px-[150px] py-16">
        {/* هدر مقاله */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm mb-6">
            <span className="bg-gradient-to-r from-blue-700 to-purple-800 text-white px-4 py-2 rounded-full font-semibold">
              {post.category}
            </span>
            <span className="text-gray-400">{post.readTime}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">{post.date}</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-semibold">{post.author}</span>
            </div>
          </div>
        </header>

        {/* تصویر اصلی */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-[500px] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* محتوای مقاله */}
        <div 
          className="prose prose-lg max-w-none mb-16 text-gray-300"
          style={{
            fontSize: '18px',
            lineHeight: '1.8'
          }}
        >
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="[&>h2]:text-white [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 
                       [&>h3]:text-white [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-3
                       [&>p]:text-gray-300 [&>p]:mb-4 [&>p]:leading-relaxed
                       [&>ul]:text-gray-300 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:mr-6
                       [&>ol]:text-gray-300 [&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:mr-6
                       [&>li]:mb-2"
          />
        </div>

        {/* مقالات مرتبط */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-16 border-t-2 border-gray-700">
            <h2 className="text-3xl font-bold mb-8 text-white">مقالات مرتبط</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-700">
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-3 text-sm text-gray-400">
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
