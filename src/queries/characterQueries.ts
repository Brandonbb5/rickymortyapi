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

