"use client"

import { create } from "zustand";




export const  useTestStore = create((set) => ({
  count: 123466,
  increase: () => set(state => ({ count: state.count + 1 })),
}));

