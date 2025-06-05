"use client"
import { useFavoriteStore } from "@/stores/favoritesStore";
import CharacterCard from "../components/characterCard";

const FavoritosPage = () => {
  const { favorites } = useFavoriteStore();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Tus Favoritos</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No has agregado personajes a favoritos aún.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((character) => (
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
      )}
    </div>
  );
};

export default FavoritosPage;
