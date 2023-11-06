import React from 'react';
import { FlatList } from 'react-native';

import type { NormalizedPokemon } from '@/api/pokemons';
import { padWithLeadingZeros } from '@/utils/leading-zeros';

import { PokemonCard } from './pokemon-card';

interface PokemonListProps {
  pokemons: NormalizedPokemon[];
}

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  const lengthOfLastIndex = String(pokemons.length - 1).length;

  const calculatePokemonId = (index: number) =>
    padWithLeadingZeros(index + 1, lengthOfLastIndex);

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      renderItem={({ item, index }) => (
        <PokemonCard id={calculatePokemonId(index)} pokemon={item} />
      )}
    />
  );
};
