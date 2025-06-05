// Define un store con Zustand para manejar la lista de personajes favoritos,
// con persistencia en almacenamiento local. Permite agregar personajes sin duplicados,
// elimina personajes por ID, verifica si un personaje está en favoritos,
// y limita el total a 5, eliminando el más antiguo al exceder el límite.


import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { ICharacter } from "@/types/Character";

interface IFavoritesState {
  favorites: ICharacter[];
  addFavorite: (character: ICharacter) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoriteStore = create(
  persist<IFavoritesState>(
    (set, get) => ({
      favorites: [],
      addFavorite: (character) => {
        const { favorites } = get();

        if (favorites.find((favoriteCharacter) => favoriteCharacter.id === character.id)) return;

        const updated =
          favorites.length >= 5
            ? [...favorites.slice(1), character]
            : [...favorites, character];

        set({ favorites: updated });
      },
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((c) => c.id !== id),
        })),
      isFavorite: (id) => !!get().favorites.find((c) => c.id === id),
    }),
    {
      name: "favorite-characters",
    }
  )
);
