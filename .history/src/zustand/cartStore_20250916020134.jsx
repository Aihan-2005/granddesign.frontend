
import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 

export const useCartStore = create(
  persist( 
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
