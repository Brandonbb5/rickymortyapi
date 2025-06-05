import { getUrqlClient } from "@/lib/uqrl";
import { SearchCharactersByNameQuery } from "@/queries/characterQueries";
import NotFoundPage from "@/app/not-found";
import { ICharacter } from "@/types/Character";

import CharacterCard from "@/app/components/characterCard";
import Pagination from "@/app/components/custom/pagination";

type Props = {
  params: { name: string };
  searchParams: { tab?: string; page?: string };
};

const DetailsPage = async ({ params, searchParams }: Props) => {
  const { name } = params;
  const page = parseInt(searchParams.page || "1");

  const { client } = getUrqlClient();
  const result = await client
    .query(SearchCharactersByNameQuery, { name, page })
    .toPromise();

  const charactersData = result.data?.characters;
  const searchResults: ICharacter[] = charactersData?.results ?? [];
  const info = charactersData?.info ?? null;

  if (!searchResults) return <NotFoundPage />;

  if (result.error) {
   
    return (
      <div className="max-w-6xl mx-auto p-6 text-center text-red-600">
        <h2 className="text-2xl font-bold mb-4">Error al cargar datos</h2>
        <p>{result.error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Resultados para "{name}"
      </h1>

      <Pagination currentPage={page} totalPages={info?.pages} basePath={`/search/${encodeURIComponent(name)}`} />

      {searchResults.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No se encontró ningún personaje con ese nombre.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchResults.map((result) => (
            <CharacterCard
              key={result.id}
              character={{
                id: result.id.toString(),
                name: result.name,
                image: result.image,
                gender: result.gender,
                status: result.status,
              }}
            />
          ))}
        </div>
      )}

      <Pagination currentPage={page} totalPages={info?.pages} basePath={`/search/${encodeURIComponent(name)}`} />
    </div>
  );
};

export default DetailsPage;
