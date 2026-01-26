export async function getProducts() {
  //   Mock data :)
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    const { allProducts } = await import("@/data/products");
    return allProducts;
  }

  //   Real API !
  const res = await fetch("YOUR_API_URL_HERE");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function getSpecialProducts() {
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    const { specialProducts } = await import("@/data/products");
    return specialProducts;
  }

  // محصولات ویژه
  const res = await fetch("YOUR_API_URL_FOR_SPECIAL_PRODUCTS");
  if (!res.ok) {
    throw new Error("Failed to fetch special products!");
  }
  return res.json();
}
