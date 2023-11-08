import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import { useAuth } from '@/core';
import { Home } from '@/screens';
import { PokemonDetails } from '@/screens/pokemon-details';

import { NavigationContainer } from './navigation-container';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const status = useAuth.use.status();

  const hideSplash = React.useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      hideSplash();
    }
  }, [hideSplash, status]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      {/** @ts-ignore */}
      <Stack.Screen name="Pokemon" component={PokemonDetails} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
