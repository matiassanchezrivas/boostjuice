import {useQuery} from '@apollo/client';
import {GET_POKEMON} from '@graphql/queries/pokemonQueries';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useMemo} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';

import {PokemonImage} from '@components/common/PokemonImage';
import {PokemonListItem} from '@components/common/PokemonListItem';
import {commonStyles} from '@theme/common';
import {colors, radius, spacing} from '@theme/theme';
import {typeToEmojiMap} from 'utils';

import {Label} from './components/Label';
import PokemonStatsChart from './components/PokemonStatsChart';
import {PillList} from './components/PillList';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export const PokemonDetailScreen: React.FC<Props> = ({route, navigation}) => {
  const {id} = route.params;

  const {data, error, loading} = useQuery(GET_POKEMON, {
    variables: {id: id},
  });
  const species = data?.species;
  const {color, evolutionChain, flavorText, habitat, name, pokemon, shape} =
    species || {};
  const {abilityList, height, statList, typeList, weight} = pokemon?.[0] || {};
  const description = flavorText?.[0]?.flavor_text.replace(/\n/g, '') ?? '';

  const onPressPokemon = useCallback(
    (pokemonId: number) => {
      navigation.push('Details', {id: pokemonId});
    },
    [navigation],
  );

  const statsData: ChartData = useMemo(
    () => ({
      datasets: [{data: statList?.map(stat => stat.base_stat ?? 0) ?? []}],
      labels: statList?.map(stat => stat.stat?.name ?? '') ?? [],
    }),
    [statList],
  );

  if (error) {
    return <Text>Error</Text>;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {loading && <ActivityIndicator />}
        {!loading && (
          <>
            {/* TITLE */}
            <View style={commonStyles.primaryContainer}>
              <Text style={[commonStyles.text, styles.title]}>{name}</Text>
              <Text style={commonStyles.text}>{description}</Text>
            </View>
            {/* IMAGE */}
            <View
              style={[styles.imageContainer, {backgroundColor: color?.name}]}>
              <PokemonImage id={id} size={100} />
              <PokemonImage id={id} size={100} isBack />
            </View>
            {/* CHARACTERISTICS */}
            <View style={commonStyles.primaryContainer}>
              <Label title={'Weight:'} value={weight} />
              <Label title={'Height:'} value={height} />
              {habitat?.name && (
                <Label title={'Habitat:'} value={habitat?.name} />
              )}
              {shape?.name && <Label title={'Shape:'} value={shape?.name} />}
            </View>
            {/* ABILITIES */}
            <PillList
              title="Abilities"
              data={abilityList?.map(list => list.ability?.name ?? '') || []}
            />
            {/* TYPES */}
            <PillList
              title="Types"
              data={
                typeList?.map(
                  list => list.type?.name + ' ' + typeToEmojiMap(list.type?.id),
                ) || []
              }
            />
            {/* STATS */}
            <Label title={'Stats'} />
            <PokemonStatsChart data={statsData} />
            {/* RELATED */}
            {!!evolutionChain?.pokemon?.length && <Label title={'Related'} />}
            <FlatList
              scrollEnabled={false}
              data={evolutionChain?.pokemon}
              renderItem={({item}) => (
                <PokemonListItem item={item} onPress={onPressPokemon} />
              )}
            />
          </>
        )}
      </ScrollView>
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
  imageContainer: {
    borderRadius: radius.s,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing.s,
    padding: spacing.xs,
  },
  title: {
    alignSelf: 'center',
    borderBottomColor: 'white',
    fontSize: 30,
    marginBottom: spacing.m,
    textTransform: 'capitalize',
  },
});
