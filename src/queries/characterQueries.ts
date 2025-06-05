/**
 * Consultas GraphQL para la API de Rick and Morty:
 * - Obtener lista de personajes con paginación.
 * - Obtener detalles de un personaje por ID.
 * - Buscar personajes por nombre con paginación.
 *
 * Detalles sobre la API y su esquema:
 * https://rickandmortyapi.com/documentation
 */

import { gql } from "urql";

export const GetCharactersQuery = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        gender
        status
        image
      }
    }
  }
`;


export const GetCharacterByIdQuery = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      status
      species
      image
      origin {
        name
      }
      location {
        name
      }
      episode{
        name
      }
    }
  }
`;

export const SearchCharactersByNameQuery = gql`
query ($name: String!, $page: Int) {
  characters(page: $page, filter: { name: $name }) {
    info {
      pages
      next
      prev
    }
    results {
      id
      name
      image
      status
      gender
    }
  }
}

`;