import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import type { NormalizedPokemon } from '@/api/pokemons';
import { Image, Text, View } from '@/ui';
import { capitalizeString } from '@/utils/capitalize-string';
import { POKEMON_TYPES } from '@/utils/pokemon-types';

interface PokemonCardProps {
  id: string;
  pokemon: NormalizedPokemon;
}

export const PokemonCard = ({ id, pokemon }: PokemonCardProps) => {
  const navigation = useNavigation();

  const backgroundColor =
    POKEMON_TYPES[pokemon.types.at(0) as keyof typeof POKEMON_TYPES].color;

  const navigateToPokemonDetails = () =>
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Pokemon',
        params: { id: pokemon.id },
      })
    );

  return (
    <TouchableWithoutFeedback onPress={navigateToPokemonDetails}>
      <View
        className="m-1 h-28 w-40 flex-1 rounded-3xl p-3"
        style={{
          backgroundColor,
        }}
      >
        <View className="flex flex-row items-center justify-between">
          <Text className="font-semibold text-white" variant="xs">
            {capitalizeString(pokemon.name)}
          </Text>
          <Text
            className="font-semibold text-white"
            variant="xs"
          >{`# ${id}`}</Text>
        </View>
        <View className="flex grow flex-row justify-between">
          <View className="flex justify-end">
            {pokemon.types.map((type) => {
              return (
                <View
                  className="my-0.5 flex flex-row items-center rounded-3xl bg-[#283141]/10 pl-1 pr-2"
                  key={type}
                >
                  <Image
                    className="h-5 w-5 object-contain"
                    source={
                      POKEMON_TYPES[type as keyof typeof POKEMON_TYPES].icon
                    }
                  />
                  <Text className="px-1 text-[10px] font-semibold text-white">
                    {capitalizeString(type)}
                  </Text>
                </View>
              );
            })}
          </View>
          <View className="flex justify-end">
            <Image
              className="h-14 w-14 object-cover"
              source={{
                uri: pokemon.picture,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
