import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors, radius, spacing} from '@theme/theme';

import {PokemonImage} from './PokemonImage';

interface PokemonListItemProps {
  item: {name: string; id: number};
  onPress?: (id: number) => void;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(item.id)}
      style={styles.container}>
      <PokemonImage id={item.id} />
      <View style={styles.imageContainer}>
        <Text style={[styles.text]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: radius.s,
    flex: 1,
    flexDirection: 'row',
    marginVertical: spacing.xs,
    padding: spacing.s,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: colors.text,
    margin: 4,
    textTransform: 'capitalize',
  },
});
