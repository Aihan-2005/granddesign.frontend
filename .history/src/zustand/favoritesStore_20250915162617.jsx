// zustand/wishlistStore.js
import { create } from 'zustand';

export const useWishlistStore = create((set) => ({
  items: [],
  
  addItem: (product) => set((state) => {
    const exists = state.items.find(item => item.id === product.id);
    if (!exists) {
      return { items: [...state.items, {...product, isFavorite: true}] };
    }
    return state;
  }),
  
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId)
  })),
  
  toggleItem: (product) => set((state) => {
    const exists = state.items.find(item => item.id === product.id);
    if (exists) {
      return { items: state.items.filter(item => item.id !== product.id) };
    } else {
      return { items: [...state.items, {...product, isFavorite: true}] };
    }
  }),
}));