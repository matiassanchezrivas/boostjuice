import {StyleSheet} from 'react-native';

import {colors, radius, spacing} from './theme';

export const commonStyles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: colors.background,
    borderRadius: radius.s,
    marginBottom: spacing.s,
    padding: spacing.s,
  },
  text: {
    color: colors.text,
  },
});
