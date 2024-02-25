import {useQuery} from '@apollo/client';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {PokemonListItem} from '@components/common/PokemonListItem';
import {SEARCH_POKEMON} from '@graphql/queries/pokemonQueries';
import {colors, spacing} from '@theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const PokemonListScreen: React.FC<Props> = ({navigation}) => {
  const [input, setInput] = useState('');

  const {data, error, loading} = useQuery(SEARCH_POKEMON, {
    variables: {name: `${input}%`},
  });

  const onPressPokemon = useCallback(
    (id: number) => {
      navigation.navigate('Details', {id});
    },
    [navigation],
  );

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Search your Pokemon</Text>
      <TextInput
        onChangeText={setInput}
        placeholder="Pikachu"
        style={styles.textInput}
        value={input}
      />
      {loading && <ActivityIndicator />}
      {!loading && (
        <FlatList
          data={data?.pokemons}
          renderItem={({item}) => (
            <PokemonListItem item={item} onPress={onPressPokemon} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background2,
    flex: 1,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.xl,
  },
  text: {
    alignSelf: 'center',
    color: colors.text,
    margin: spacing.xs,
  },
  textInput: {
    backgroundColor: colors.text,
    borderRadius: spacing.s,
    marginBottom: spacing.m,
    padding: spacing.xs,
  },
});
