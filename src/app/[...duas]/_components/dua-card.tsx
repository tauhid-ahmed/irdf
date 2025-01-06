"use client";

import * as Icons from "@/components/icons";
import React from "react";
import { useSearchParams } from "next/navigation";

// Define type for `Dua`
type Dua = {
  dua_name_en: string;
  top_en: string;
  dua_arabic: string;
  transliteration_en?: string;
  translation_en?: string;
  refference_en: string;
  audio?: string; // Add this field for audio if it exists
};

// Props for `DuaCard`
type DuaCardProps = {
  catId: string | undefined; // `catId` can be a string or undefined if not provided
  duas: Dua[]; // Add this property to the props
};

export default function DuaCard({ duas, catId }: DuaCardProps) {
  return (
    <div className="col-start-1 xl:row-span-2 col-span-4 lg:col-start-2 lg:col-span-3 xl:col-start-3 2xl:col-span-2 px-2 overflow-y-scroll">
      <h3 className="px-8 font-semibold py-4 rounded bg-white text-gray-600 sticky top-0 shadow">
        <span className="text-brand">Section: {catId || "Unknown"}</span>{" "}
        <span>The servant is dependent on his Lord</span>
      </h3>
      <div className="space-y-4 mt-4">
        {duas.map((dua, i) => (
          <CardContent dua={dua} i={i} key={i} />
        ))}
      </div>
    </div>
  );
}

type CardContentProps = {
  dua: Dua;
  i: number;
};

function CardContent({ dua, i }: CardContentProps) {
  const searchParams = useSearchParams();
  const catQuery = searchParams.get("cat");

  return (
    <div className="bg-white shadow py-4 px-7 rounded" key={i}>
      <h3 className="font-semibold text-brand flex items-center gap-2">
        <Icons.Ayat className="size-9" /> {i + 1}. {dua.dua_name_en}
      </h3>
      <div className="mt-7 space-y-7">
        <p>{dua.top_en}</p>
        <p dir="rtl" className="text-2xl font-semibold leading-loose">
          {dua.dua_arabic}
        </p>
        <div className="space-y-4">
          {dua.transliteration_en && (
            <p className="italic">
              <strong className="font-semibold">Transliteration:</strong>{" "}
              {dua.transliteration_en}
            </p>
          )}
          {dua.translation_en && (
            <p>
              <strong className="font-semibold">Translation:</strong>{" "}
              {dua.translation_en}
            </p>
          )}
        </div>
        <p className="font-medium">
          <span className="text-brand block">Reference:</span>
          <span className="text-gray-700">{dua.refference_en}</span>
        </p>
        <div className="flex min-h-11 items-center">
          {dua.audio && (
            <div className="size-11 rounded-full bg-brand inline-flex items-center justify-center">
              <Icons.Play />
            </div>
          )}
          <div className="ml-auto flex gap-10 items-center">
            {/* buttons */}
            <Icons.Copy className="size-7" />
            <Icons.Bookmark className="size-6" />
            <Icons.Bulb className="size-6" />
            <Icons.Share className="size-6" />
            <Icons.Report className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
