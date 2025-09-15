// // src/app/favorites/page.jsx
// "use client";
// import Header from "@/components/Headers";
// import { useWishlistStore } from "@/zustand/wishlistStore";
// import { Trash2, ShoppingCart, ArrowRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { useCartStore } from "@/zustand/cartStore";

// export default function FavoritesPage() {
//   const { wishlistItems, removeFromWishlist } = useWishlistStore();
//   const { addItem } = useCartStore();

//   // تابع برای اضافه کردن محصول به سبد خرید از صفحه علاقه‌مندی‌ها
//   const handleAddToCart = (product) => {
//     addItem(product);
//   };

//   if (wishlistItems.length === 0) {
//     return (
//       <>
//         <Header />
//         <div className="max-w-4xl mx-auto px-4 py-16 mt-16 text-center">
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h1 className="text-2xl font-bold mb-4 text-gray-800">لیست علاقه‌مندی‌ها</h1>
//             <p className="text-gray-600 mb-8">هنوز هیچ محصولی به علاقه‌مندی‌های شما اضافه نشده است.</p>
//             <Link 
//               href="/store" 
//               className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 inline-flex items-center"
//             >
//               بازگشت به فروشگاه
//               <ArrowRight size={16} className="mr-2" />
//             </Link>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <div className="max-w-6xl mx-auto px-4 py-16 mt-16">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h1 className="text-2xl font-bold mb-6 text-gray-800">لیست علاقه‌مندی‌های شما</h1>
          
//           <div className="grid gap-4">
//             {wishlistItems.map((product) => (
//               <div key={product.id} className="border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition duration-200">
//                 <div className="flex items-center space-x-4 flex-1">
//                   <div className="relative w-20 h-20">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       fill
//                       className="rounded-lg object-cover"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
//                     <p className="text-gray-600 text-sm mb-2">{product.description}</p>
//                     <p className="text-red-500 font-bold text-lg">
//                       {product.price.toLocaleString()} تومان
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   {/* دکمه اضافه به سبد خرید */}
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition duration-200"
//                     aria-label="افزودن به سبد خرید"
//                   >
//                     <ShoppingCart size={20} />
//                   </button>
                  
//                   {/* دکمه حذف از علاقه‌مندی‌ها */}
//                   <button
//                     onClick={() => removeFromWishlist(product.id)}
//                     className="text-red-500 hover:text-red-700 p-2 transition duration-200"
//                     aria-label="حذف از علاقه‌مندی‌ها"
//                   >
//                     <Trash2 size={20} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex justify-between items-center pt-4 border-t">
//             <Link 
//               href="/store" 
//               className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
//             >
//               <ArrowRight size={16} className="ml-2" />
//               ادامه خرید
//             </Link>
            
//             <span className="text-gray-600">
//               تعداد محصولات: {wishlistItems.length}
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// src/app/favorites/page.jsx
// src/app/favorites/page.jsx
// src/components/modal/FavoritesModal.jsx
"use client";
import { useWishlistStore } from "@/zustand/favoritesStore";
import { useCartStore } from "@/zustand/cartStore";
import { X, Trash2, Plus } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function FavoritesModal() {
  const { isFavoritesOpen, closeFavorites, wishlistItems, removeFromWishlist } = useWishlistStore();
  const { addItem } = useCartStore();
  const modalRef = useRef();

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      closeFavorites();
    }
  };

  if (!isFavoritesOpen) return null;

  const handleAddToCart = (product) => {
    addItem(product);
    // می‌توانید یک toast یا پیام موفقیت هم اضافه کنید
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-xl relative flex flex-col" style={{ maxHeight: "90vh" }}>
        <button
          className="absolute top-3 left-3 text-gray-600 hover:text-black"
          onClick={closeFavorites}
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">لیست علاقه‌مندی‌ها</h2>

        <div className="overflow-y-auto flex-1 mb-4 pr-2">
          {wishlistItems.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <p className="text-lg">لیست علاقه‌مندی‌های شما خالی است.</p>
              <p className="text-sm mt-2">محصولاتی که به علاقه‌مندی‌ها اضافه می‌کنید در اینجا نمایش داده می‌شوند.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        قیمت: {item.price.toLocaleString()} تومان
                      </p>
                    </div>
                    <div className="font-bold text-emerald-600">
                      {item.price.toLocaleString()} تومان
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 py-2 flex items-center justify-center gap-2 text-green-600 border border-green-100 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <Plus size={16} />
                      <span>افزودن به سبد خرید</span>
                    </button>
                    
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="flex-1 py-2 flex items-center justify-center gap-2 text-red-500 border border-red-100 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                      <span>حذف</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}