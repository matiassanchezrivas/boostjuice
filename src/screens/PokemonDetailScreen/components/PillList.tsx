import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {commonStyles} from '@theme/common';
import {colors, radius, spacing} from '@theme/theme';

import {Label} from './Label';

interface PillListProps {
  data: string[];
  title: string;
}

export const PillList: React.FC<PillListProps> = ({data, title}) => {
  return (
    <View style={commonStyles.primaryContainer}>
      <Label title={title} />
      <View style={styles.pillContainer}>
        {data?.map(text => (
          <View key={text} style={styles.pill}>
            <Text style={[commonStyles.text, styles.pillText]}>{text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    backgroundColor: colors.background2,
    borderRadius: radius.l,
    marginRight: spacing.xs,
    marginTop: spacing.xs,
    padding: 7,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pillText: {
    fontStyle: 'italic',
    textTransform: 'capitalize',
  },
});
