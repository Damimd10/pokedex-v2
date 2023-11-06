import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

import { Button, FocusAwareStatusBar, Text } from '@/ui';

interface PokemonProps {
  navigation: NativeStackNavigationProp<any>;
}

export const Pokemon = ({ navigation }: PokemonProps) => {
  return (
    <>
      <FocusAwareStatusBar />
      <Button onPress={() => navigation.goBack()}>Back</Button>
      <Text variant="md">Pikachu</Text>
    </>
  );
};
