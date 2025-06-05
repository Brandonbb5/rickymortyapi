import { getUrqlClient } from "../lib/uqrl";
import { GetCharactersQuery } from "../queries/characterQueries";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CharacterBadges from "./components/custom/character-badges";

type Props = {
  searchParams: { page?: string };
};

type Character = {
  id: number;
  name: string;
  image: string;
  gender: "Male" | "Female" | string;
  status: "Alive" | "Dead" | string;
};

async function getCharacters(page: number): Promise<{
  characters: Character[];
  info: any | null;
}>  {
  const { client } = getUrqlClient();
  const result = await client
    .query(GetCharactersQuery, { page })
    .toPromise();

  return {
    characters: result.data?.characters?.results || [],
    info: result.data?.characters?.info || null,
  };
}

export default async function HomePage({ searchParams }: Props) {
  const page = parseInt(searchParams.page || "1");
  const { characters, info } = await getCharacters(page);

  return (
    <div className="p-4 md:p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Personajes de Rick & Morty</h1>

      <div className="mb-6 rounded-md px-5 py-3 flex justify-end items-center w-fit ml-auto">
          <div className="text-sm font-medium mr-6">
            Página <span className="font-semibold text-gray-900">{page}</span>
          </div>
          <div className="flex gap-3">
            {page > 1 && (
              <Link
                href={`?page=${page - 1}`}
                className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Anterior
              </Link>
            )}
            {info?.pages && page < info.pages && (
              <Link
                href={`?page=${page + 1}`}
                className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Siguiente
              </Link>
            )}
          </div>
        </div>


      {characters.length === 0 && <p>No hay personajes.</p>}

      <div className="grid gap-x-4 gap-y-6 grid-cols-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition relative"
          >
           <button
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100 transition cursor-pointer"
            title="Agregar a favoritos"
          
          >
            <FavoriteBorderIcon className="text-red-500" />
          </button>
          <Link href={`/details/${character.id}`} className="block">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2 text-center py-4 2xl:text-3xl">{character.name}</h2>
            </Link>

            <CharacterBadges gender={character.gender} status={character.status} />
          
          </div>
        ))}
      </div>
    </div>
  );
}
