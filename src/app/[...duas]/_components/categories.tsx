"use client";

import Link from "next/link";
import * as path from "@/paths";
import { createSlug } from "@/lib/create-slug";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";
import * as Icons from "@/components/icons";

import { cn } from "@/lib/cn";

// Define type for category props
type Category = {
  id: number;
  cat_id: number;
  cat_name_en: string;
  no_of_dua: number;
  sub_category: SubCategoryType[];
};

type SubCategoryType = {
  subcat_name_en: string;
};

type CategoriesProps = {
  categories: Category[];
};

export default function Categories({ categories }: CategoriesProps) {
  const categoryRefs = React.useRef<Record<string, HTMLLIElement | null>>({});
  const containerRef = React.useRef<HTMLUListElement | null>(null);
  const [collapsedIndex, setCollapsedIndex] = React.useState<number | null>(
    null
  );

  const searchParams = useSearchParams();
  const catQuery = searchParams.get("cat");

  React.useEffect(() => {
    if (catQuery && categoryRefs.current[`cat-${catQuery}`]) {
      categoryRefs.current[`cat-${catQuery}`]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [catQuery]);

  React.useEffect(() => {
    setCollapsedIndex(catQuery ? +catQuery : null);
  }, [catQuery]);

  return (
    <div className="row-start-2 xl:row-span-2 hidden lg:block overflow-y-scroll bg-white relative">
      <div className="sticky z-10 -top-[70px]">
        <h3 className="bg-brand text-center text-white font-semibold py-4 rounded">
          Categories
        </h3>
        <div className="p-4">
          <div className="border w-full border-gray-500 rounded-lg overflow-hidden bg-white flex focus-within:border-brand items-center w-92 h-13 shadow">
            <button className="w-14 h-11 rounded inline-flex items-center justify-center">
              <Icons.Search />
            </button>
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="h-13 placeholder:text-gray-600 w-full focus:outline-transparent pr-2"
            />
          </div>
        </div>
      </div>
      <ul ref={containerRef} className="space-y-3 px-4 pt-20 -mt-20">
        {categories.map((category) => (
          <li
            ref={(el) => (categoryRefs.current[`cat-${category.cat_id}`] = el)}
            key={category.id}
          >
            <Link
              href={{
                pathname: path.duaCategory(createSlug(category.cat_name_en)),
                query: {
                  cat: category.cat_id,
                },
              }}
            >
              <div
                className={cn(
                  "h-20 p-2.5 rounded-xl flex justify-between items-center",
                  {
                    "bg-gray-400": Number(catQuery) === category.cat_id,
                    "border-b border-gray-400":
                      Number(catQuery) !== category.cat_id,
                  }
                )}
              >
                <div className="flex gap-4">
                  <Image
                    src="/assets/icons/person.png"
                    width="40"
                    height="40"
                    alt="person"
                  />
                  <div>
                    <h4 className="text-brand">{category.cat_name_en}</h4>
                    {category.sub_category.length > 0 && (
                      <h5>Subcategory: {category.sub_category.length}</h5>
                    )}
                  </div>
                </div>
                <div
                  className={cn("text-center pl-4", {
                    "border-l border-gray-400":
                      Number(catQuery) !== category.cat_id,
                  })}
                >
                  <span className="block font-semibold text-gray-700">
                    {category.no_of_dua}
                  </span>
                  <span className="block text-sm text-gray-600">duas</span>
                </div>
              </div>
            </Link>
            {category.sub_category && collapsedIndex === category.cat_id && (
              <SubCategory
                category={category.sub_category}
                catId={category.cat_id}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

type SubCategoryProps = {
  category: SubCategoryType[];
  catId: number;
};

function SubCategory({ category, catId }: SubCategoryProps) {
  console.log(category);
  return (
    <div className="px-5">
      <ul className="relative pl-4 before:absolute before:left-0 before:inset-y-0 before:w-0.5 before:bg-border-pattern">
        {category.map((cat, i) => (
          <li
            className="relative before:absolute before:-left-4 before:-translate-x-1/3 before:size-2 before:rounded-full before:bg-brand before:top-1/2 before:-translate-y-1/2 py-4"
            key={i}
          >
            <Link
              href={{
                pathname: "",
                query: {
                  cat: catId,
                  sub: cat.subcat_id, // `sub` query parameter (e.g., subcategory index)
                },
              }}
            >
              {cat.subcat_name_en}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
