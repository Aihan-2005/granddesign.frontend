"use client"

import { create } from "zustand";




export const  useTestStore = create((set) => ({
  count: 123466,
  increase: () => set(state => ({ count: state.count + 1 })),
}));

export const useMenuStore = create((set) => ({
  isOpen: false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));