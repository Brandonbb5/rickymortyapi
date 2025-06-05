import Link from "next/link";
import { getUrqlClient } from "@/lib/uqrl";
import { GetCharacterByIdQuery } from "@/queries/characterQueries";
import { notFound } from "next/navigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CharacterBadges from "@/app/components/custom/character-badges";

type Props = {
  params: { id: string };
  searchParams: { tab?: string };
};

const DetailsPage = async ({ params, searchParams }: Props) => {
  const { id } = params;
  const activeTab = searchParams.tab || "general";

  const { client } = getUrqlClient();
  const result = await client.query(GetCharacterByIdQuery, { id }).toPromise();
  const character = result.data?.character;

  if (!character) return notFound();

  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto bg-white rounded-xl shadow-md mt-12">
      <div className="relative flex flex-col items-center sm:flex-row sm:justify-between mb-8 gap-4">
        <h1 className="text-4xl font-extrabold text-center sm:text-left text-gray-900">
          {character.name}
        </h1>
        <button
          className="self-start sm:self-auto bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
          title="Agregar a favoritos"
        >
          <FavoriteBorderIcon className="text-red-500" fontSize="large" />
        </button>
      </div>


      <div className="mt-8 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={character.image}
            alt={character.name}
            className="w-full max-w-xs md:max-w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col">
          <nav className="flex border-b border-gray-200 mb-6">
            {["general", "episodios"].map((tab,key) => (
              <Link
                key={key}
                href={`?tab=${tab}`}
                scroll={false}
                className={`px-5 py-3 font-semibold transition-colors border-b-4 -mb-px cursor-pointer ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab === "general" ? "General" : "Aparece en..."}
              </Link>
            ))}
          </nav>

          {activeTab === "general" ? (
            <div className="space-y-4 text-lg text-gray-700">
                <CharacterBadges gender={character.gender} status={character.status} />
              <div>

                <strong>Especie:</strong> {character.species}
              </div>
              <div>
                <strong>Origen:</strong> {character.origin.name}
              </div>
              <div>
                <strong>Ubicación actual:</strong> {character.location.name}
              </div>
            </div>
          ) : (
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
              {character.episode.map((ep: any,key:any) => (
                <li key={key} className="hover:text-blue-600 transition cursor-default">
                  {ep.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
