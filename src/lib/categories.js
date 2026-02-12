// Pure utility functions - NO data imports
// These functions work with any category tree structure

export function findCategoryBySlug(categories, slug) {
  if (!categories || !Array.isArray(categories)) return null;

  for (const category of categories) {
    if (!category) continue; // Skip null/undefined categories
    if (category.slug === slug) {
      return category;
    }
    if (category.children && Array.isArray(category.children)) {
      const found = findCategoryBySlug(category.children, slug);
      if (found) return found;
    }
  }
  return null;
}

export function isLeafCategory(category) {
  if (!category) return false;
  const hasChildren =
    category.children &&
    Array.isArray(category.children) &&
    category.children.length > 0;
  return !hasChildren || category.children.every((c) => !c);
}
