"use client";

import { useSearchStore } from "@/zustand/Search";
import { X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { allProducts } from "@/data/products";

const FOCUS_DELAY_MS = 50;

// Simple Levenshtein distance function (Fuzzy search)
function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1,
            );
    }
  }
  return matrix[b.length][a.length];
}

export default function Search() {
  const {
    isSearchOpen,
    closeSearch,
    addToHistory,
    loadHistory,
    history,
    clearHistory,
  } = useSearchStore();

  const [query, setQuery] = useState("");
  const [notFound, setNotFound] = useState("");

  const modalRef = useRef(null);
  const inputRef = useRef(null);

  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    if (!isSearchOpen) return;

    loadHistory();
    setTimeout(() => {
      inputRef.current?.focus();
    }, FOCUS_DELAY_MS);
  }, [isSearchOpen, loadHistory]);

  if (!isSearchOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) closeSearch();
  };

  const runSearch = (searchValue) => {
    setNotFound("");

    const trimmedQuery = searchValue.trim();
    if (!trimmedQuery) return;

    const qLower = trimmedQuery.toLowerCase();

    let foundProduct =
      allProducts.find(
        (p) =>
          (p.name || "").toLowerCase().includes(qLower) ||
          (p.alias || "").toLowerCase().includes(qLower),
      ) || null;

    if (!foundProduct) {
      let minDistance = Infinity;
      allProducts.forEach((p) => {
        const dist = levenshtein(qLower, (p.name || "").toLowerCase());
        if (dist < minDistance && dist <= 2) {
          minDistance = dist;
          foundProduct = p;
        }
      });
    }

    if (!foundProduct) {
      setNotFound("محصول مورد نظرت اینجا نبود");
      return;
    }

    addToHistory(trimmedQuery);
    closeSearch();

    const currentProductId = params.get("product");
    if (currentProductId !== String(foundProduct.id)) {
      router.push(`/store?product=${foundProduct.id}`, { scroll: false });
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      dir="rtl"
      className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
        <button
          onClick={closeSearch}
          className="absolute top-3 left-3 text-gray-600 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">جستجو</h2>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && runSearch(query)}
          placeholder="دنبال چی می‌گردی؟"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 text-right focus:ring-emerald-400"
        />

        {notFound && (
          <div className="text-sm text-red-600 mt-2 text-right">{notFound}</div>
        )}

        {history.length > 0 && (
          <div className="mt-4 text-right">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">
                محصولاتی که قبلا سرچ کردی:
              </span>
              <button onClick={clearHistory} className="text-xs text-gray-500">
                پاک کن
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {history.map((h) => (
                <button
                  key={h}
                  onClick={() => runSearch(h)}
                  className="px-3 py-1 rounded-full bg-gray-100 hover:bg-emerald-100"
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={() => runSearch(query)}
          className="w-full mt-4 bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600"
        >
          جستجو
        </button>
      </div>
    </div>
  );
}
