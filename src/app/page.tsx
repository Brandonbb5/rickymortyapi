import { getUrqlClient } from "../lib/uqrl";
import { GetCharactersQuery } from "../queries/characterQueries";
import CharacterCard from "./components/characterCard";
import Pagination from "./components/custom/pagination";

import { ICharacter } from "@/types/Character";

type HomePageURLProps = {
  searchParams: { page?: string };
};

async function getCharacters(page: number): Promise<{
  characters: ICharacter[];
  info: any | null;
}> {
  const { client } = getUrqlClient();
  const result = await client.query(GetCharactersQuery, { page }).toPromise();

  return {
    characters: result.data?.characters?.results || [],
    info: result.data?.characters?.info || null,
  };
}



export default async function HomePage({ searchParams }: HomePageURLProps) {
  const page = parseInt(searchParams.page || "1");
  const { characters, info } = await getCharacters(page);

  

  return (
    <div className="p-4 md:p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Personajes de Rick & Morty</h1>

      <Pagination currentPage={page} totalPages={info?.pages} />

      {characters.length === 0 && <p>No hay personajes.</p>}

      <div className="grid gap-x-4 gap-y-6 grid-cols-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={{
              id: character.id.toString(),
              name: character.name,
              image: character.image,
              gender: character.gender,
              status: character.status,
            }}
          />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={info?.pages} />
    </div>
  );
}
