export type PokemonType = {
  color: string;
  icon: any;
};

export type PokemonTypes = {
  bug: PokemonType;
  dark: PokemonType;
  dragon: PokemonType;
  electric: PokemonType;
  fairy: PokemonType;
  fighting: PokemonType;
  fire: PokemonType;
  flying: PokemonType;
  ghost: PokemonType;
  grass: PokemonType;
  ground: PokemonType;
  ice: PokemonType;
  normal: PokemonType;
  poison: PokemonType;
  psychic: PokemonType;
  rock: PokemonType;
  steel: PokemonType;
  water: PokemonType;
};

export const POKEMON_TYPES: PokemonTypes = {
  bug: { color: '#ab2', icon: require('../../assets/icons/type-bug.png') },
  dark: { color: '#754', icon: require('../../assets/icons/type-dark.png') },
  dragon: {
    color: '#76e',
    icon: require('../../assets/icons/type-dragon.png'),
  },
  electric: {
    color: '#fc3',
    icon: require('../../assets/icons/type-electric.png'),
  },
  fairy: { color: '#e9e', icon: require('../../assets/icons/type-fairy.png') },
  fighting: {
    color: '#b54',
    icon: require('../../assets/icons/type-fighting.png'),
  },
  fire: { color: '#FF9741', icon: require('../../assets/icons/type-fire.png') },
  flying: {
    color: '#89f',
    icon: require('../../assets/icons/type-flying.png'),
  },
  ghost: { color: '#66b', icon: require('../../assets/icons/type-ghost.png') },
  grass: {
    color: '#38BF4B',
    icon: require('../../assets/icons/type-grass.png'),
  },
  ground: {
    color: '#db5',
    icon: require('../../assets/icons/type-ground.png'),
  },
  ice: { color: '#6cf', icon: require('../../assets/icons/type-ice.png') },
  normal: {
    color: '#dbdbdb',
    icon: require('../../assets/icons/type-normal.png'),
  },
  poison: {
    color: '#a59',
    icon: require('../../assets/icons/type-poison.png'),
  },
  psychic: {
    color: '#f59',
    icon: require('../../assets/icons/type-psychic.png'),
  },
  rock: { color: '#ba6', icon: require('../../assets/icons/type-rock.png') },
  steel: { color: '#aab', icon: require('../../assets/icons/type-steel.png') },
  water: {
    color: '#3692DC',
    icon: require('../../assets/icons/type-water.png'),
  },
};
