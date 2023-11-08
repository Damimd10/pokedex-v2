import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { usePokemon } from '@/api/pokemons';
import { Badge, Image, Text, View } from '@/ui';
import { padWithLeadingZeros } from '@/utils/leading-zeros';
import { POKEMON_TYPES } from '@/utils/pokemon-types';

import { PokemonTabs } from './pokemon-tabs';

interface PokemonProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<{ params: { id: string } }>;
}

export const PokemonDetails = ({ navigation, route }: PokemonProps) => {
  const id = route.params.id;
  const { data } = usePokemon({ variables: { id } });
  console.log('Pokemon Data', data);

  if (!data) {
    return null;
  }

  const badgeColor =
    POKEMON_TYPES[data?.types.at(0) as keyof typeof POKEMON_TYPES].color;

  const goBack = () => navigation.goBack();

  return (
    <>
      <StatusBar hidden />
      <View className="flex-1">
        <LinearGradient colors={[badgeColor, 'white']}>
          <View className="flex flex-row items-center justify-between p-2">
            <AntDesign
              name="leftcircleo"
              size={24}
              color="black"
              onPress={goBack}
            />
            <View className="flex-1 items-center">
              <Text>{data?.name.toUpperCase()}</Text>
              <Text>#{padWithLeadingZeros(data.id, 3)}</Text>
            </View>
            <MaterialCommunityIcons name="pokeball" size={30} color="black" />
          </View>
          <View className="my-4 items-center">
            <Image className="h-64 w-64" source={{ uri: data.picture }} />
            <View className="my-4 flex flex-row items-center">
              {data.types.map((type) => (
                <Badge backgroundColor={badgeColor} key={type}>
                  {type.toUpperCase()}
                </Badge>
              ))}
            </View>
          </View>
        </LinearGradient>
        <PokemonTabs />
      </View>
    </>
  );
};
