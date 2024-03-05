import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button } from 'react-native-elements';

// Import FontAwesome for React Native
import { FontAwesome } from '@expo/vector-icons';

import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? 'arrow-down' : 'arrow-up';
  const valueTxtColor = value < 0 ? "red" : "green";

  return (
    value ? (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name={valueIcon} size={16} color={valueTxtColor} />
        <Text style={{ fontWeight: 'bold', marginLeft: 5, color: valueTxtColor }}>
          {Math.abs(value)}{suffix}
        </Text>
      </View>
    ) : (
      <Text>--</Text>
    )
  );
};

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceIcon = bounceRate < 0 ? 'arrow-down' : 'arrow-up';
    const bounceTxtColor = bounceRate < 0 ? "red" : "green";

    return (
      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        <View>
          <Text>{pageName}</Text>
        </View>
        <View>
          <Text>{views}</Text>
        </View>
        <View>
          <Text>${returnValue}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name={bounceIcon} size={16} color={bounceTxtColor} />
          <Text style={{ marginLeft: 5, color: bounceTxtColor }}>
            {Math.abs(bounceRate)}%
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{ border: '1px solid #ccc', borderRadius: 8, overflow: 'hidden', margin: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Page visits</Text>
          </View>
          <View>
            <Button title="See all" type="outline" size="small" />
          </View>
        </View>
        {pageVisits.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
      </View>
    </ScrollView>
  );
};

// Repeat similar steps for other components...
