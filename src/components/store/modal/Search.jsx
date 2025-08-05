"use client";

import { useSearchStore } from "./../../../zustand/Search"
import { X } from "lucide-react";
import { useRef } from "react";

export default function Search() {
  const { isSearchOpen, closeSearch } = useSearchStore();
  const modalRef = useRef();

  if (!isSearchOpen) return null;


  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      closeSearch();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
        <button
          className="absolute top-3 left-3 text-gray-600 hover:text-black"
          onClick={closeSearch}
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">جستجو</h2>

        <input
          type="text"
          placeholder="دنبال چی می‌گردی؟"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 text-right focus:ring-emerald-400 transition"
        />
      </div>
    </div>
  );
}
