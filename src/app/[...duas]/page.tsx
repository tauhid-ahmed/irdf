import { getDuasByCategoryId } from "@/queries";
import DuaCard from "./_components/dua-card";

export default async function Homepage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const { cat: catId } = await searchParams.catch((error) => error);
  const duas = await getDuasByCategoryId(catId as string).catch(
    (error) => error
  );

  return (
    <>
      <DuaCard duas={duas} catId={catId as number} />
    </>
  );
}
