"use client"

import { create } from "zustand";




export const  useLoginStore = create((set) => ({
  loginAndRegister: "login",
  informationUser : {},
  setloginAndRegister: (state) => set(({ loginAndRegister: state })),
setInformationUser: (state) => set((prev) => ({
    ...prev,
    informationUser: { ...prev.informationUser, ...state },
  })),
setResetInformationUser: (state) => set((prev) => ({informationUser: {}})),
}));

