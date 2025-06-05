import { Client, cacheExchange, createClient, fetchExchange } from "urql/core";

let _client: Client | null = null;

export const getUrqlClient = () => {
  if (!_client) {
    _client = createClient({
      url: "https://rickandmortyapi.com/graphql",
      requestPolicy: "cache-and-network",
      exchanges: [cacheExchange, fetchExchange],
    });
  }
  const client = _client;
  return { client };
};
