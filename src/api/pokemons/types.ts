type PokemonType = {
  pokemon_v2_type: {
    name: string;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: PokemonType[];
};

export type PokemonResponse = {
  pokemon_v2_pokemon: Pokemon[];
};

export type NormalizedPokemon = {
  id: number;
  name: string;
  picture: string;
  types: string[];
};
