import { profile } from "@/data/profile";
import { createErrorResponse, createSuccessResponse } from "@/lib/api/response";
import type { ApiResponse } from "@/lib/api/types";
import type { CategoryItem } from "@/types/profile";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getCategoriesData(): Promise<CategoryItem[]> {
  return profile.skills.map((skill) => ({
    id: toSlug(skill.category),
    name: skill.category,
    description: `${skill.items.length} tracked skill areas`,
  }));
}

export const categoriesService = {
  async getCategories(): Promise<ApiResponse<CategoryItem[]>> {
    try {
      return createSuccessResponse(await getCategoriesData(), "Categories retrieved successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return createErrorResponse("Unable to load categories", [message]);
    }
  },

  async createCategory(category: Partial<CategoryItem>): Promise<ApiResponse<CategoryItem[]>> {
    const nextCategory = {
      id: category.id ?? toSlug(category.name ?? "new-category"),
      name: category.name ?? "New category",
      description: category.description ?? "",
    };

    const nextCategories = [...(await getCategoriesData()), nextCategory];
    return createSuccessResponse(nextCategories, "Category created successfully");
  },

  async updateCategory(id: string, updates: Partial<CategoryItem>): Promise<ApiResponse<CategoryItem[]>> {
    const nextCategories = (await getCategoriesData()).map((item) =>
      item.id === id ? { ...item, ...updates, id } : item,
    );

    if (!nextCategories.some((item) => item.id === id)) {
      return createErrorResponse("Category not found", [`Category ${id} was not found.`]);
    }

    return createSuccessResponse(nextCategories, "Category updated successfully");
  },

  async deleteCategory(id: string): Promise<ApiResponse<CategoryItem[]>> {
    const nextCategories = (await getCategoriesData()).filter((item) => item.id !== id);

    if (nextCategories.length === (await getCategoriesData()).length) {
      return createErrorResponse("Category not found", [`Category ${id} was not found.`]);
    }

    return createSuccessResponse(nextCategories, "Category deleted successfully");
  },
};
