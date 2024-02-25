import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {PokemonDetailScreen} from '@screens/PokemonDetailScreen/PokemonDetailScreen';
import {PokemonListScreen} from '@screens/PokemonListScreen/PokemonListScreen';
import {colors} from '@theme/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }}>
        <Stack.Screen name="Home" component={PokemonListScreen} />
        <Stack.Screen name="Details" component={PokemonDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
