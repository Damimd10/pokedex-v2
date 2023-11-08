import type { AxiosError } from 'axios';
import { request } from 'graphql-request';
import { createQuery } from 'react-query-kit';

import { endpoint } from './constants';
import { pokemonListQuery } from './queries';
import type { NormalizedPokemon } from './types';
import { normalizePokemonList } from './utils';

type Response = NormalizedPokemon[];
type Variables = void;

export const usePokemons = createQuery<Response, Variables, AxiosError>({
  primaryKey: 'pokemons',
  queryFn: async () => {
    const data = await request(endpoint, pokemonListQuery);
    const normalizedData = normalizePokemonList(data);

    return normalizedData || [];
  },
});
