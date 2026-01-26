"use client";

import { useTestStore } from "@/zustand/store";
import FirstPage from "@/components/store/home/FirstPage";
import SpecialProducts from "@/components/store/home/SpecialProducts";
import Allproducts from "@/components/store/home/Allproducts";
import Footer from "@/components/store/Footer";

export default function Page() {
  const { count } = useTestStore();

  return (
    <>
      <FirstPage />
      <SpecialProducts />
      <Allproducts />
      <Footer />
    </>
  );
}
