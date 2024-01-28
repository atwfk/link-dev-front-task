import { Category, News } from "@/types/News";

export const addCategoryById = (
  news: News[],
  categories: Category[]
): News[] => {
  const mapCategories: Map<string, Category> = new Map();

  categories.forEach((category) => {
    mapCategories.set(category.id, category);
  });

  return news.map((n) => ({
    ...n,
    category: mapCategories?.get(n.categoryID)?.name,
  }));
};
