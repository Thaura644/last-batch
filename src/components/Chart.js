import React from "react";
import { View, Text } from "react-native";
import { LineChart, PieChart, BarChart } from "react-native-chart-kit";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

export const SalesValueChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [1, 2, 2, 3, 3, 4, 3]
      }
    ]
  };

  const options = {
    yAxisSuffix: "k",
    decimalPlaces: 0,
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };

  return (
    <LineChart
      data={data}
      width={350}
      height={220}
      yAxisLabel="$"
      yAxisInterval={1}
      chartConfig={options}
      bezier
      style={{ marginVertical: 8, borderRadius: 16 }}
    />
  );
};

export const SalesValueChartphone = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [1, 2, 2, 3, 3, 4, 3]
      }
    ]
  };

  const options = {
    yAxisSuffix: "k",
    decimalPlaces: 0,
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };

  return (
    <LineChart
      data={data}
      width={200}
      height={150}
      yAxisLabel="$"
      yAxisInterval={1}
      chartConfig={options}
      bezier
      style={{ marginVertical: 8, borderRadius: 16 }}
    />
  );
};

export const CircleChart = (props) => {
  const { series = [], donutWidth = 20 } = props;
  const data = series.map((value, index) => ({ value }));

  const options = {
    backgroundColor: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
  };

  return (
    <PieChart
      data={data}
      width={200}
      height={150}
      chartConfig={options}
      accessor="value"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [], chartClassName = "ct-golden-section" } = props;
  const data = {
    labels,
    datasets: [
      {
        data: series
      }
    ]
  };

  const options = {
    backgroundColor: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
  };

  return (
    <BarChart
      data={data}
      width={200}
      height={220}
      yAxisLabel="$"
      chartConfig={options}
      style={{ marginVertical: 8, borderRadius: 16 }}
    />
  );
};
