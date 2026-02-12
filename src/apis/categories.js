export async function getCategories() {
  // Mock data :)
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    const categories = await import("@/data/categories");
    return categories.categories || categories.default || [];
  }

  // Real API
  const res = await fetch("YOUR_API_URL_FOR_CATEGORIES");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}
