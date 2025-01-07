import DuaCard from "./_components/dua-card";
import { getDuasByCategoryId } from "@/queries";

export default async function Homepage({
  searchParams,
}: {
  searchParams: Promise<{ cat: string }>;
}) {
  try {
    // Extract the "cat" parameter from searchParams
    const { cat: catId } = await searchParams;

    // Fetch duas using the category ID
    const duas = catId ? await getDuasByCategoryId(catId) : [];

    return (
      <>
        <DuaCard duas={duas} catId={+catId} />
      </>
    );
  } catch (error) {
    console.error(error);
    return <p>Something went wrong while fetching duas</p>;
  }
}
