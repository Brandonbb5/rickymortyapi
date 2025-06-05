import Link from "next/link";
import FavoriteButton from "@/app/components/custom/favoriteButton";
import CharacterBadges from "@/app/components/custom/characterBadges";

import { ICharacter } from "@/types/Character";

const CharacterCard = ({ character }: { character: ICharacter }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition relative">
      <Link href={`/details/${character.id}`}>
        <img
          src={character.image}
          alt={character.name}
          width={400}
          height={400}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4">
        <Link href={`/details/${character.id}`}>
          <h2 className="font-semibold text-lg text-center">{character.name}</h2>
         </Link> 
        <div className="flex justify-between items-start mb-2">
          <FavoriteButton
            character={{
              id: character.id.toString(),
              name: character.name,
              image: character.image,
              gender: character.gender,
              status: character.status,
            }}
          />
        </div>

        <CharacterBadges gender={character.gender} status={character.status} />
      
      </div>
    </div>
  );
};

export default CharacterCard;
