import React from 'react';

import {Dimensions, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {ChartConfig, ChartData} from 'react-native-chart-kit/dist/HelperTypes';

import {colors, radius, spacing} from '@theme/theme';

const chartConfig: ChartConfig = {
  backgroundGradientFrom: colors.background,
  backgroundGradientTo: colors.background2,
  barPercentage: 0.75,
  color: () => 'white',
  decimalPlaces: 0,
  propsForBackgroundLines: {
    stroke: colors.background,
  },
  strokeWidth: 2,
};

interface PokemonStatsChartProps {
  data: ChartData;
}

export const PokemonStatsChart: React.FC<PokemonStatsChartProps> = ({data}) => {
  return (
    <BarChart
      chartConfig={chartConfig}
      data={data}
      fromNumber={150}
      fromZero
      height={250}
      showValuesOnTopOfBars
      style={styles.chart}
      verticalLabelRotation={-55}
      width={Dimensions.get('window').width - spacing.l * 2}
      withHorizontalLabels={false}
      yAxisLabel=""
      yAxisSuffix=""
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    borderRadius: radius.s,
    paddingRight: 0,
    marginBottom: spacing.s,
  },
});

export default PokemonStatsChart;
