import type { AxiosError } from 'axios';
import { request } from 'graphql-request';
import { createQuery } from 'react-query-kit';

import { pokemonListQuery } from './queries';
import type { NormalizedPokemon, Pokemon, PokemonResponse } from './types';

type Response = NormalizedPokemon[];
type Variables = void;

const endpoint = 'https://beta.pokeapi.co/graphql/v1beta';

const getNormalizedTypes = (data: Pokemon) => {
  const types = data.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );

  return types;
};

const normalizePokemonList = (data: PokemonResponse) => {
  const normalizedData = data.pokemon_v2_pokemon.map((pokemon) => {
    const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

    return {
      id: pokemon.id,
      name: pokemon.name,
      picture: imageLink,
      types: getNormalizedTypes(pokemon),
    };
  });

  return normalizedData;
};

export const usePokemons = createQuery<Response, Variables, AxiosError>({
  primaryKey: 'pokemons',
  queryFn: async () => {
    const data = await request(endpoint, pokemonListQuery);
    const normalizedData = normalizePokemonList(data);

    return normalizedData || [];
  },
});
