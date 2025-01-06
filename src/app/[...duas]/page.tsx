import { getDuasByCategoryId } from "@/queries";
import DuaCard from "./_components/dua-card";

export default async function Homepage({
  searchParams,
}: {
  params: any; // Type `params` if you know its structure
  searchParams: { cat?: string };
}) {
  const { cat: catId } = searchParams;
  const duas = await getDuasByCategoryId(catId);

  return (
    <>
      <DuaCard duas={duas} catId={catId} />
    </>
  );
}
