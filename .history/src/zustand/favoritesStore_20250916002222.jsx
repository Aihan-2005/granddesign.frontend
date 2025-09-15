// // src/zustand/wishlistStore.js
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// export const useWishlistStore = create(
//   persist(
//     (set, get) => ({
//       wishlistItems: [],
      
//       // اضافه کردن محصول به علاقه‌مندی‌ها
//       addToWishlist: (product) => set((state) => {
//         const exists = state.wishlistItems.find(item => item.id === product.id);
//         if (!exists) {
//           return { wishlistItems: [...state.wishlistItems, product] };
//         }
//         return state;
//       }),
      
//       // حذف محصول از علاقه‌مندی‌ها
//       removeFromWishlist: (productId) => set((state) => ({
//         wishlistItems: state.wishlistItems.filter(item => item.id !== productId)
//       })),
      
//       // تغییر وضعیت محصول در علاقه‌مندی‌ها
//       toggleWishlistItem: (product) => set((state) => {
//         const exists = state.wishlistItems.find(item => item.id === product.id);
//         if (exists) {
//           return { 
//             wishlistItems: state.wishlistItems.filter(item => item.id !== product.id) 
//           };
//         } else {
//           return { 
//             wishlistItems: [...state.wishlistItems, product] 
//           };
//         }
//       }),

//       // پاک کردن همه علاقه‌مندی‌ها
//       clearWishlist: () => set({ wishlistItems: [] }),
      
//       // بررسی وجود محصول در علاقه‌مندی‌ها
//       isInWishlist: (productId) => {
//         return get().wishlistItems.some(item => item.id === productId);
//       }
//     }),
//     {
//       name: 'wishlist-storage', // نام برای ذخیره در localStorage
//     }
//   )
// );