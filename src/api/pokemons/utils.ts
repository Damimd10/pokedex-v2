import type { Pokemon, PokemonResponse } from './types';

const getNormalizedTypes = (data: Pokemon) => {
  console.log('HERE TYPES', data);
  const types = data.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );

  return types;
};

export const normalizePokemonList = (data: PokemonResponse) => {
  const normalizedData = data.pokemon_v2_pokemon.map((pokemon) =>
    normalizePokemon(pokemon)
  );

  return normalizedData;
};

export const normalizePokemon = (data: Pokemon) => {
  const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;

  return {
    id: data.id,
    name: data.name,
    picture: imageLink,
    types: getNormalizedTypes(data),
  };
};
