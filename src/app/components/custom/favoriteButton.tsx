'use client'

import { useEffect, useState } from "react";
import { useFavoriteStore } from "@/stores/favoritesStore";
import NotFound from "@/app/not-found";


import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


import { ICharacter } from "@/types/Character";

type Props = {
  character: ICharacter | null;
};

export default function FavoriteButton({ character }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if(!character) return <NotFound />

  const favorite = isFavorite(character.id);
  const toggleFavorite = () => {
    
    favorite ? removeFavorite(character.id) : addFavorite(character);
    
  };

  if (!hasMounted) return null; 

  return (
    <button
      onClick={toggleFavorite}
      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100 transition cursor-pointer"
      title={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      {favorite ? (
        <FavoriteIcon className="text-red-500" />
      ) : (
        <FavoriteBorderIcon className="text-red-500" />
      )}
    </button>
  );
}
