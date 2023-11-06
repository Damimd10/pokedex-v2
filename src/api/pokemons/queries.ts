import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { parse } from 'graphql';
import { gql } from 'graphql-request';

import type { PokemonResponse } from './types';

export const pokemonListQuery: TypedDocumentNode<PokemonResponse> = parse(gql`
  query {
    pokemon_v2_pokemon {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`);
