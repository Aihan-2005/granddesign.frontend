
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlistItems: [],
      isFavoritesOpen: false,
      
      
      openFavorites: () => set({ isFavoritesOpen: true }),
      closeFavorites: () => set({ isFavoritesOpen: false }),
      
      // توابع قبلی...
      addToWishlist: (product) => set((state) => {
        const exists = state.wishlistItems.find(item => item.id === product.id);
        if (!exists) {
          return { wishlistItems: [...state.wishlistItems, product] };
        }
        return state;
      }),
      
      removeFromWishlist: (productId) => set((state) => ({
        wishlistItems: state.wishlistItems.filter(item => item.id !== productId)
      })),
      
      toggleWishlistItem: (product) => set((state) => {
        const exists = state.wishlistItems.find(item => item.id === product.id);
        if (exists) {
          return { 
            wishlistItems: state.wishlistItems.filter(item => item.id !== product.id),
            isFavoritesOpen: true // باز نگه داشتن modal بعد از حذف
          };
        } else {
          return { 
            wishlistItems: [...state.wishlistItems, product],
            isFavoritesOpen: true // باز نگه داشتن modal بعد از اضافه کردن
          };
        }
      }),

      clearWishlist: () => set({ wishlistItems: [] }),
      
      isInWishlist: (productId) => {
        return get().wishlistItems.some(item => item.id === productId);
      }
    }),
    {
      name: 'wishlist-storage',
    }
  )
);