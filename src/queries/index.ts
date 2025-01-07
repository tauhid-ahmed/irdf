import { prisma } from "@/lib/prisma";

export const getCategories = async () => {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories.");
  }
};

export const getDuasByCategoryId = async (id: string) => {
  try {
    return await prisma.dua.findMany({
      where: {
        cat_id: +id,
      },
    });
  } catch (error) {
    console.error(`Error fetching Duas for category ID ${id}:`, error);
    throw new Error(`Failed to fetch Duas for category ID ${id}.`);
  }
};

export const getSubCategory = async (id: string) => {
  try {
    return await prisma.subCategory.findMany({
      where: {
        cat_id: +id,
      },
    });
  } catch (error) {
    console.error(`Error fetching subcategories for category ID ${id}:`, error);
    throw new Error(`Failed to fetch subcategories for category ID ${id}.`);
  }
};

export const getAllCategories = async () => {
  try {
    return await prisma.category.findMany({
      include: {
        sub_category: true,
      },
    });
  } catch (error) {
    console.error("Error fetching all categories with subcategories:", error);
    throw new Error("Failed to fetch all categories.");
  }
};
