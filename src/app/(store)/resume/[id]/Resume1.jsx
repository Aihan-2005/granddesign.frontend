"use client";

import { useState, useMemo, useCallback, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const GalleryItem = memo(({ item, onClick, index }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
      onClick={() => onClick(item)}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 16vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        loading={index < 6 ? "eager" : "lazy"}
        quality={70}
        placeholder="blur"
        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23111827'/%3E%3C/svg%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
});

GalleryItem.displayName = "GalleryItem";

const ImageModal = memo(({ activeImage, onClose }) => {
  if (!activeImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-10"
          aria-label="بستن"
        >
          ✕
        </button>
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-[90vw] md:w-[70vw] h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width:768px) 90vw, 70vw"
            className="object-contain rounded-xl"
            priority
            quality={85}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

ImageModal.displayName = "ImageModal";

export default function ResumeGallery() {
  const gallery = useMemo(
    () => [
      { id: 1, src: "https://ftp.granddesign.ir/nama/chalak-pirmohamadi/a.jpg", alt: "نما و محوطه 1" },
      { id: 2, src: "https://ftp.granddesign.ir/nama/chalak-pirmohamadi/b.jpg", alt: "نما و محوطه 2" },
      { id: 3, src: "https://ftp.granddesign.ir/nama/chalak-pirmohamadi/c.jpg", alt: "نما و محوطه 3" },
      { id: 4, src: "https://ftp.granddesign.ir/nama/chalak-pirmohamadi/d.jpg", alt: "نما و محوطه 4" },
      { id: 5, src: "https://ftp.granddesign.ir/nama/chalak-pirmohamadi/e.jpg", alt: "نما و محوطه 5" },
      { id: 6, src: "https://ftp.granddesign.ir/nama/azizi -kisom/aziz (4).jpg", alt: "نما و محوطه 6" },
      { id: 7, src: "https://ftp.granddesign.ir/nama/azizi -kisom/aziz (8).jpg", alt: "نما و محوطه 7" },
      { id: 8, src: "https://ftp.granddesign.ir/nama/azizi -kisom/azizz (1).jpg", alt: "نما و محوطه 8" },
      { id: 9, src: "https://ftp.granddesign.ir/nama/heshmat-asadol/ui3.jpg", alt: "نما و محوطه 9" },
      { id: 10, src: "https://ftp.granddesign.ir/nama/azizi -kisom/azizz (16).jpg", alt: "نما و محوطه 10" },
      { id: 11, src: "https://ftp.granddesign.ir/nama/azizi -kisom/azizz (20).jpg", alt: "نما و محوطه 11" },
      { id: 12, src: "https://ftp.granddesign.ir/nama/azizi -kisom/azizz (24).jpg", alt: "نما و محوطه 12" },
      { id: 13, src: "https://ftp.granddesign.ir/nama/chaf-berlian/44 (1).jpg", alt: "نما و محوطه 13" },
      { id: 14, src: "https://ftp.granddesign.ir/nama/chaf-berlian/44 (3).jpg", alt: "نما و محوطه 14" },
      { id: 15, src: "https://ftp.granddesign.ir/nama/heshmat-asadol/ui1.jpg", alt: "نما و محوطه 15" },
      { id: 16, src: "https://ftp.granddesign.ir/nama/jana-lahijan/jjjjj (10).jpg", alt: "نما و محوطه 16" },
      { id: 17, src: "https://ftp.granddesign.ir/nama/jana-lahijan/jjjjj (11).jpg", alt: "نما و محوطه 17" },
      { id: 18, src: "https://ftp.granddesign.ir/nama/jana-lahijan/jjjjj (9).jpg", alt: "نما و محوطه 18" },
      { id: 19, src: "https://ftp.granddesign.ir/nama/kiashar-rahimzade/kiashar (11).jpg", alt: "نما و محوطه 19" },
      { id: 20, src: "https://ftp.granddesign.ir/nama/kiashar-rahimzade/kiashar (12).jpg", alt: "نما و محوطه 20" },
      { id: 21, src: "https://ftp.granddesign.ir/nama/kiashar-rahimzade/kiashar (3).jpg", alt: "نما و محوطه 21" },
      { id: 22, src: "https://ftp.granddesign.ir/nama/kiashar-rahimzade/kiashar (4).jpg", alt: "نما و محوطه 22" },
      { id: 23, src: "https://ftp.granddesign.ir/nama/kiashar-rahimzade/kiashar (6).jpg", alt: "نما و محوطه 23" },
      { id: 24, src: "https://ftp.granddesign.ir/nama/kiashar-rahimzade/kiashar (8).jpg", alt: "نما و محوطه 24" },
      { id: 25, src: "https://ftp.granddesign.ir/nama/kiashar-rahimzade/kiashar (9).jpg", alt: "نما و محوطه 25" },
      { id: 26, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (11).jpg", alt: "نما و محوطه 26" },
      { id: 27, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (12).jpg", alt: "نما و محوطه 27" },
      { id: 28, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (14).jpg", alt: "نما و محوطه 28" },
      { id: 29, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (15).jpg", alt: "نما و محوطه 29" },
      { id: 30, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (2).jpg", alt: "نما و محوطه 30" },
      { id: 31, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (4).jpg", alt: "نما و محوطه 31" },
      { id: 32, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (5).jpg", alt: "نما و محوطه 32" },
      { id: 33, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (8).jpg", alt: "نما و محوطه 33" },
      { id: 34, src: "https://ftp.granddesign.ir/nama/nama khararod/hsniiiasl (9).jpg", alt: "نما و محوطه 34" },
      { id: 35, src: "https://ftp.granddesign.ir/nama/nazari-bijarbane/nz (2).jpg", alt: "نما و محوطه 35" },
      { id: 36, src: "https://ftp.granddesign.ir/nama/nazari-bijarbane/nz (3).jpg", alt: "نما و محوطه 36" },
      { id: 37, src: "https://ftp.granddesign.ir/nama/nilass-lahijan/aslia (2).jpg", alt: "نما و محوطه 37" },
      { id: 38, src: "https://ftp.granddesign.ir/nama/nilass-lahijan/aslia (5).jpg", alt: "نما و محوطه 38" },
      { id: 39, src: "https://ftp.granddesign.ir/nama/nilass-lahijan/aslia (6).jpg", alt: "نما و محوطه 39" },
      { id: 40, src: "https://ftp.granddesign.ir/nama/nilass-lahijan/nmjanan (1).jpg", alt: "نما و محوطه 40" },
      { id: 41, src: "https://ftp.granddesign.ir/nama/nilass-lahijan/nmjanan (12).jpg", alt: "نما و محوطه 41" },
      { id: 42, src: "https://ftp.granddesign.ir/nama/nilass-lahijan/nmjanan (3).jpg", alt: "نما و محوطه 42" },
      { id: 43, src: "https://ftp.granddesign.ir/nama/sakhteman golestan(16 metri), akbari/IMG_20250912_112602_839.jpg", alt: "نما و محوطه 43" },
      { id: 44, src: "https://ftp.granddesign.ir/nama/sakhteman golestan(16 metri), akbari/IMG_20250912_112602_985.jpg", alt: "نما و محوطه 44" },
      { id: 45, src: "https://ftp.granddesign.ir/nama/sakhteman golestan(16 metri), akbari/IMG_20250912_112603_111.jpg", alt: "نما و محوطه 45" },
      { id: 46, src: "https://ftp.granddesign.ir/nama/shalman-askari/5.jpg", alt: "نما و محوطه 46" },
      { id: 47, src: "https://ftp.granddesign.ir/nama/shalman-askari/7.jpg", alt: "نما و محوطه 47" },
      { id: 48, src: "https://ftp.granddesign.ir/nama/shalman-askari/8.jpg", alt: "نما و محوطه 48" },
      { id: 49, src: "https://ftp.granddesign.ir/nama/shalman-askari/9.jpg", alt: "نما و محوطه 49" },
      { id: 50, src: "https://ftp.granddesign.ir/nama/shohani-jangal3000/sh1.jpg", alt: "نما و محوطه 50" },
      { id: 51, src: "https://ftp.granddesign.ir/nama/shohani-jangal3000/sh2.jpg", alt: "نما و محوطه 51" },
      { id: 52, src: "https://ftp.granddesign.ir/nama/shohani-jangal3000/sh3.jpg", alt: "نما و محوطه 52" },
      { id: 53, src: "https://ftp.granddesign.ir/nama/shohani-jangal3000/sh4.jpg", alt: "نما و محوطه 53" },
      { id: 54, src: "https://ftp.granddesign.ir/nama/shohani-jangal3000/sh5.jpg", alt: "نما و محوطه 54" },
      { id: 55, src: "https://ftp.granddesign.ir/nama/shohani-jangal3000/sh6.jpg", alt: "نما و محوطه 55" },
      { id: 56, src: "https://ftp.granddesign.ir/nama/shohani-jangal3000/sh7.jpg", alt: "نما و محوطه 56" },
      { id: 57, src: "https://ftp.granddesign.ir/nama/shohani-jangal3000/sh8.jpg", alt: "نما و محوطه 57" },
      { id: 58, src: "https://ftp.granddesign.ir/nama/siakal-vila-saeidi/saei.jpg", alt: "نما و محوطه 58" },
      { id: 59, src: "https://ftp.granddesign.ir/nama/siakal-vila-saeidi/saeidiii (7).jpg", alt: "نما و محوطه 59" },
      { id: 60, src: "https://ftp.granddesign.ir/nama/siakal-vila-saeidi/saeidiii (9).jpg", alt: "نما و محوطه 60" },
      { id: 61, src: "https://ftp.granddesign.ir/nama/siakal-vila-saeidi/trtrtr (2).jpg", alt: "نما و محوطه 61" },
      { id: 62, src: "https://ftp.granddesign.ir/nama/siakal-vila-saeidi/trtrtr (3).jpg", alt: "نما و محوطه 62" },
      { id: 63, src: "https://ftp.granddesign.ir/nama/siakal-vila-saeidi/trtrtr (5).jpg", alt: "نما و محوطه 63" },
      { id: 64, src: "https://ftp.granddesign.ir/nama/soostan-pirmohamadi/soostannn (1).jpg", alt: "نما و محوطه 64" },
      { id: 66, src: "https://ftp.granddesign.ir/nama/soostan-pirmohamadi/soostannn (4).jpg", alt: "نما و محوطه 66" },
      { id: 67, src: "https://ftp.granddesign.ir/nama/soostan-pirmohamadi/soostannn (6).jpg", alt: "نما و محوطه 67" },
      { id: 68, src: "https://ftp.granddesign.ir/nama/vila jngl2000-mohamadi/2.jpg", alt: "نما و محوطه 68" },
      { id: 69, src: "https://ftp.granddesign.ir/nama/vila jngl2000-mohamadi/4.jpg", alt: "نما و محوطه 69" },
      { id: 70, src: "https://ftp.granddesign.ir/nama/vila jngl2000-mohamadi/6.jpg", alt: "نما و محوطه 70" },
      { id: 71, src: "https://ftp.granddesign.ir/nama/vila jngl2000-mohamadi/7.jpg", alt: "نما و محوطه 71" },
      { id: 72, src: "https://ftp.granddesign.ir/nama/vila jngl2000-mohamadi/8.jpg", alt: "نما و محوطه 72" },
      { id: 73, src: "https://ftp.granddesign.ir/nama/vila jngl2000-mohamadi/9.jpg", alt: "نما و محوطه 73" },
      { id: 74, src: "https://ftp.granddesign.ir/nama/vila jngl2000-mohamadi/aa.jpg", alt: "نما و محوطه 74" },
      { id: 75, src: "https://ftp.granddesign.ir/nama/vila jngl2000-mohamadi/bb.jpg", alt: "نما و محوطه 75" },
      { id: 76, src: "https://ftp.granddesign.ir/nama/villa chobi-rodbne/a (1).jpg", alt: "نما و محوطه 76" },
      { id: 77, src: "https://ftp.granddesign.ir/nama/villa chobi-rodbne/a (2).jpg", alt: "نما و محوطه 77" },
      { id: 78, src: "https://ftp.granddesign.ir/nama/villa chobi-rodbne/a (3).jpg", alt: "نما و محوطه 78" },
      { id: 79, src: "https://ftp.granddesign.ir/nama/villa chobi-rodbne/a (4).jpg", alt: "نما و محوطه 79" },
    ],
    []
  );

  const [visibleCount, setVisibleCount] = useState(8);
  const [activeImage, setActiveImage] = useState(null);

  const visibleImages = useMemo(
    () => gallery.slice(0, visibleCount),
    [gallery, visibleCount]
  );

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 12, gallery.length));
  }, [gallery.length]);

  const handleImageClick = useCallback((item) => {
    setActiveImage(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveImage(null);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-900 text-white py-20 px-6" dir="rtl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">نما و محوطه</h1>
      <p className="text-gray-300 mb-10 max-w-xl">
        در طراحی نما و محوطه، تمرکز ما بر ایجاد فضایی ماندگار، کاربردی و هماهنگ با محیط است.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {visibleImages.map((item, index) => (
          <GalleryItem
            key={item.id}
            item={item}
            onClick={handleImageClick}
            index={index}
          />
        ))}
      </div>

      {visibleCount < gallery.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition"
          >
            مشاهده تصاویر بیشتر ({gallery.length - visibleCount} عکس دیگر)
          </button>
        </div>
      )}

      <ImageModal activeImage={activeImage} onClose={handleCloseModal} />
    </section>
  );
}
