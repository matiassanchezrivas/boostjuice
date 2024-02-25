import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {colors, spacing} from '@theme/theme';

interface LabelProps {
  title?: string;
  value?: string | number | null;
}

export const Label = ({title, value}: LabelProps) => (
  <View style={styles.container}>
    {title && <Text style={styles.title}>{title}</Text>}
    {value && <Text style={styles.value}>{value}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    color: colors.text,
    fontWeight: '900',
    marginRight: spacing.s,
    marginBottom: spacing.xs,
  },
  value: {
    color: colors.text,
    textTransform: 'capitalize',
  },
});
