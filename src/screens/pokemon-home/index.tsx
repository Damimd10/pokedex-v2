import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { usePokemons } from '@/api/pokemons';
import { ControlledInput, FocusAwareStatusBar, Text, View } from '@/ui';

import { PokemonList } from './pokemon-list';

const schema = z.object({
  query: z.string().optional(),
});

export type FormType = z.infer<typeof schema>;

export const PokemonHome = () => {
  const { data = [] } = usePokemons();
  const { control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <FocusAwareStatusBar />
      <View className="gap-y-4 px-2 py-4">
        <Text variant="h1">Pokedex</Text>
        <Text variant="md">
          Use the advanced search to find Pokemon by type, weakness, ability and
          more!
        </Text>
        <View>
          <ControlledInput
            control={control}
            name="query"
            placeholder="Search a pokemon"
          />
        </View>
        <PokemonList pokemons={data} />
      </View>
    </>
  );
};
