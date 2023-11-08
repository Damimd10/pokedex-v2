import type { AxiosError } from 'axios';
import request from 'graphql-request';
import { createQuery } from 'react-query-kit';

import { endpoint } from './constants';
import { pokemonDetailsQuery } from './queries';
import type { NormalizedPokemon } from './types';
import { normalizePokemon } from './utils';

type Response = NormalizedPokemon;
type Variables = { id: string };

export const usePokemon = createQuery<Response, Variables, AxiosError>({
  primaryKey: 'pokemon',
  queryFn: async ({ queryKey: [_primaryKey, variables] }) => {
    const data = await request(endpoint, pokemonDetailsQuery, variables);
    const pokemon = data.pokemon_v2_pokemon[0];
    const normalizedData = normalizePokemon(pokemon);

    return normalizedData;
  },
});
