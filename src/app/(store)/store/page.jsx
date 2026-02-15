"use client";

export default function StorePage() {
  return (
    <section
      dir="rtl"
      className="flex flex-col items-center justify-center h-screen bg-black text-white relative overflow-hidden"
      style={{
        fontFamily: "IRANYekan, Inter, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-400/5 to-transparent" />

      <div className="z-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-teal-400 mb-4">
          فروشگاه گرند دیزاین
        </h1>
        <p className="text-gray-300 text-xl sm:text-2xl font-light tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          به‌زودی...
        </p>
      </div>

    </section>
  );
}
