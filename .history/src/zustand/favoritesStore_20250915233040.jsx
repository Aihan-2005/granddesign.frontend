// zustand/wishlistStore.js
import { create } from 'zustand';
export const useWishlistStore = create((set) => ({
  wishlistItems: [],
  
  addToWishlist: (product) => set((state) => {
    const exists = state.wishlistItems.find(item => item.id === product.id);
    if (!exists) {
      return { wishlistItems: [...state.wishlistItems, {...product, isFavorite: true}] };
    }
    return state;
  }),
  
  removeFromWishlist: (productId) => set((state) => ({
    wishlistItems: state.wishlistItems.filter(item => item.id !== productId)
  })),
  
  toggleWishlistItem: (product) => set((state) => {
    const exists = state.wishlistItems.find(item => item.id === product.id);
    if (exists) {
      return { wishlistItems: state.wishlistItems.filter(item => item.id !== product.id) };
    } else {
      return { wishlistItems: [...state.wishlistItems, {...product, isFavorite: true}] };
    }
  }),
}));