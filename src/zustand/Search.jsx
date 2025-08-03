import { create } from "zustand";

export const Search = create((set) => ({
  isOpen: false,
  openLogin: () => set({ isOpen: true }),
  closeLogin: () => set({ isOpen: false }),
}));
