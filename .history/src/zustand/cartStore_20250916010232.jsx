// import { create } from "zustand";

// export const useCartStore = create((set) => ({
//   isCartOpen: false,
//   items: [],

//   openCart: () => set({ isCartOpen: true }),
//   closeCart: () => set({ isCartOpen: false }),

//   addItem: (product) =>
//     set((state) => {
//       const existing = state.items.find((item) => item.id === product.id);
//       if (existing) {
//         return {
//           items: state.items.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }
//       return {
//         items: [...state.items, { ...product, quantity: 1 }],
//       };
//     }),

//   removeItem: (id) =>
//     set((state) => ({
//       items: state.items.filter((item) => item.id !== id),
//     })),
// }));
// src/zustand/cartStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // اضافه کردن این import

export const useCartStore = create(
  persist( // اضافه کردن persist
    (set, get) => ({
      items: [],
      isCartOpen: false,
      
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      
      addItem: (product) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id);
        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        } else {
          return {
            items: [...state.items, { ...product, quantity: 1 }]
          };
        }
      }),
      
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(item => item.id !== productId)
      })),
      
      updateQuantity: (productId, newQuantity) => set((state) => ({
        items: state.items.map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, newQuantity) }
            : item
        ).filter(item => item.quantity > 0)
      })),
      
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage', // نام برای localStorage
    }
  )
);
