import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { PokemonHome } from '../pokemon-home';

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PokemonList" component={PokemonHome} />
    </Tab.Navigator>
  );
};
