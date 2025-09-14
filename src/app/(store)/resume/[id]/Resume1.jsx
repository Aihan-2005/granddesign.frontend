import Image from "next/image";

export default function Resume1() {
  const gallery = [
    { id: 1, src: "/images/weblogs/1.jpg", alt: "نما و محوطه 1" },
    { id: 2, src: "/images/weblogs/2.jpg", alt: "نما و محوطه 2" },
    { id: 3, src: "/images/weblogs/3.jpg", alt: "نما و محوطه 3" },
    { id: 4, src: "/images/weblogs/4.jpg", alt: "نما و محوطه 4" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-12 px-6">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/images/weblogs/1.jpg"
          alt="نما و محوطه"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded">
          <h1 className="text-3xl font-bold">نما و محوطه</h1>
          <p className="mt-2 text-sm sm:text-base">
            معرفی پروژه‌های برتر طراحی نما و محوطه با ما.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {gallery.map((item) => (
          <div key={item.id} className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="space-y-4 text-gray-300">
        <p>
          در این بخش نمونه پروژه‌های نما و محوطه ما را مشاهده می‌کنید. هر پروژه با دقت طراحی شده و تمرکز ویژه روی زیبایی و عملکرد محیط دارد.
        </p>
        <p>
          از طراحی محوطه تا نمای ساختمان، تمام مراحل توسط تیم حرفه‌ای ما اجرا می‌شود تا نتیجه‌ای بی‌نظیر حاصل شود.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <a
          href="#blog"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          مشاهده رزومه کامل
        </a>
      </div>
    </div>
  );
}


