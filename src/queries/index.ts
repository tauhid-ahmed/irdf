import { prisma } from "@/lib/prisma";

// const duas = await prisma.dua.findMany({
//   where: {
//     cat_id: 1, // Replace with category ID
//     subcat_id: 2, // Replace with subcategory ID
//   },
//   include: {
//     category: {
//       select: {
//         id: true,
//         cat_name_en: true,
//         cat_name_bn: true,
//       },
//     },
//     sub_category: {
//       select: {
//         id: true,
//         subcat_name_en: true,
//         subcat_name_bn: true,
//       },
//     },
//   },
// });

export const getCategories = async () => await prisma.category.findMany();

export const getDuasByCategoryId = async (id: string) =>
  await prisma.dua.findMany({
    where: {
      cat_id: +id,
    },
  });

export const getSubCategory = async (id: string) =>
  await prisma.subCategory.findMany({
    where: {
      cat_id: +id,
    },
  });

export const getAllCategories = async () => {
  return await prisma.category.findMany({
    include: {
      sub_category: true,
    },
  });
};
