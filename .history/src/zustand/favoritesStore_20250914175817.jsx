// import { create } from "zustand";

// export const useFavoritesStor = create((set) => ({
//   isFavoritesOpen: false,
//   items: [],

//   openFavorites: () => set({ isFavoritesOpen: true }),
//   closeFavorites: () => set({ isFavoritesOpen: false }),

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
"use client";
import { create } from "zustand";

 const useFavoritesStore = create((set) => ({
  favorites: [],
  addToFavorites: (product) =>
    set((state) => {
      // چک کنیم محصول تکراری وارد نشه
      if (state.favorites.find((item) => item.id === product.id)) {
        return state;
      }
      return { favorites: [...state.favorites, product] };
    }),
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
  toggleFavorite: (product) =>
    set((state) => {
      if (state.favorites.find((item) => item.id === product.id)) {
        return {
          favorites: state.favorites.filter((item) => item.id !== product.id),
        };
      } else {
        return { favorites: [...state.favorites, product] };
      }
    }),
}));
