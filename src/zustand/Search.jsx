import { create } from "zustand";

export const useSearchStore = create((set) => ({
  isSearchOpen: false,
  searchQuery: "",
  selectedProduct: null,
  history: [],
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  addToHistory: (query) =>
    set((state) => {
      try {
        const trimmed = query.trim();
        if (!trimmed) return state;
        const next = [
          trimmed,
          ...state.history.filter((h) => h !== trimmed),
        ].slice(0, 10);
        if (typeof localStorage !== "undefined")
          localStorage.setItem("search_history", JSON.stringify(next));
        return { history: next };
      } catch (e) {
        return state;
      }
    }),
  loadHistory: () =>
    set(() => {
      try {
        if (typeof localStorage === "undefined") return { history: [] };
        const raw = localStorage.getItem("search_history");
        const history = raw ? JSON.parse(raw) : [];
        return { history };
      } catch (e) {
        return { history: [] };
      }
    }),
  clearHistory: () => {
    try {
      if (typeof localStorage !== "undefined")
        localStorage.removeItem("search_history");
    } catch (e) {}
    set({ history: [] });
  },
}));
