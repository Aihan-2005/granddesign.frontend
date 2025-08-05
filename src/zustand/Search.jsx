import { create } from "zustand";


export const useSearchStore = create((set) => ({
  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
}));
